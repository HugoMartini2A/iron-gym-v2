import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const URL = process.env.AUDIT_URL || 'http://localhost:4321';
const OUT = '/tmp/shots';
mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: 'm', w: 375, h: 812 },
  { name: 'd', w: 1440, h: 900 },
];
// scroll targets (selector or 0 for top)
const targets = [
  { id: 'top', sel: null },
  { id: 'manifeste', sel: '#manifeste' },
  { id: 'heritage', sel: '#heritage' },
  { id: 'temple', sel: '#temple' },
  { id: 'tarifs', sel: '#tarifs' },
  { id: 'contact', sel: '#contact' },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.w, height: vp.h },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce', // rend tout statique → frames propres
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  for (const t of targets) {
    if (t.sel) {
      await page.evaluate((s) => {
        const el = document.querySelector(s);
        if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, t.sel);
    } else {
      await page.evaluate(() => window.scrollTo(0, 0));
    }
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/${vp.name}-${t.id}.png` }); // viewport-only
  }
  await ctx.close();
}
await browser.close();
console.log('shots done →', OUT);
