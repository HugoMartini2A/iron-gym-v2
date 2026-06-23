import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const URL = process.env.AUDIT_URL || 'http://localhost:4321';
const OUT = process.env.AUDIT_OUT || '/tmp/audit';
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: 'mobile', w: 375, h: 812 },
  { name: 'tablet', w: 768, h: 1024 },
  { name: 'desktop', w: 1440, h: 900 },
];

const browser = await chromium.launch();
const report = {};

for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text().slice(0, 160)));
  page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message.slice(0, 160)));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2600); // laisser jouer les entrées/anim

  // Débordement horizontal global
  const doc = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  const overflowX = doc.sw > doc.iw + 1;

  // Éléments qui dépassent le bord droit du viewport
  const offenders = await page.evaluate(() => {
    const vw = window.innerWidth;
    const bad = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0 && r.right > vw + 1.5 && getComputedStyle(el).position !== 'fixed') {
        bad.push({ tag: el.tagName.toLowerCase(), cls: (el.getAttribute('class') || '').slice(0, 70), right: Math.round(r.right), w: Math.round(r.width) });
      }
    }
    return bad.slice(0, 12);
  });

  // Liens & ancres
  const links = await page.evaluate(() => [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')));
  const anchors = [...new Set(links.filter((h) => h && h.startsWith('#') && h !== '#'))];
  const deadAnchors = await page.evaluate(
    (as) => as.filter((h) => !document.querySelector(h)),
    anchors,
  );

  await page.screenshot({ path: `${OUT}/${vp.name}.png`, fullPage: true });

  // Test burger (mobile/tablette)
  let burger = 'n/a (desktop)';
  if (vp.w < 1024) {
    const toggle = await page.$('[data-nav-toggle]');
    if (!toggle) burger = 'MISSING toggle';
    else {
      const visible = await toggle.isVisible();
      await toggle.click();
      await page.waitForTimeout(400);
      const menuShown = await page.evaluate(() => {
        const m = document.querySelector('[data-nav-menu]');
        return m ? !m.hidden && getComputedStyle(m).display !== 'none' : false;
      });
      await page.screenshot({ path: `${OUT}/${vp.name}-menu.png` });
      burger = `toggle visible=${visible}, menu opens=${menuShown}`;
      // referme
      await page.keyboard.press('Escape').catch(() => {});
    }
  }

  // Scroll progress présent ?
  const progress = await page.evaluate(() => {
    const el = document.querySelector('[data-scroll-progress]');
    if (!el) return 'MISSING';
    const r = el.getBoundingClientRect();
    return `present (w=${Math.round(r.width)})`;
  });

  report[vp.name] = { overflowX, docScrollW: doc.sw, viewportW: doc.iw, offenders, errors, deadAnchors, anchorsChecked: anchors.length, burger, progress };
  await ctx.close();
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
