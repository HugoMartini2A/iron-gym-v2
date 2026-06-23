/**
 * MOTION — orchestration client (source de vérité unique du temps & du scroll).
 * ----------------------------------------------------------------------------
 * Lenis pilote le scroll → ScrollTrigger.update + gsap.ticker.
 *
 * Branche d'accessibilité : si `prefers-reduced-motion`, on n'initialise PAS
 * Lenis ; on révèle tout statiquement. Les fonctionnalités (carrousel,
 * formulaire) restent actives dans les deux branches.
 *
 * Le drapeau `html.js-motion` (posé en <head>) cache les éléments [data-reveal]
 * AVANT l'hydratation pour éviter tout flash — posé seulement si le mouvement
 * est autorisé, donc en reduced-motion le contenu reste visible par défaut.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { registerEases } from './easing';

gsap.registerPlugin(ScrollTrigger, SplitText);

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = window.matchMedia('(pointer: fine)').matches;

// ─────────────────────────────────────────────────────────────────────────────
// Entrée
// ─────────────────────────────────────────────────────────────────────────────
export function initSite(): void {
  registerEases();

  // Fonctionnalités indépendantes du mouvement (toujours actives).
  setupReviewCarousel();
  setupContactForm();
  setupObjetPrefill();
  setupScrollProgress();

  if (REDUCED) {
    setupNavMenu(null);
    reducedInit();
    return;
  }

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    syncTouch: false, // touch natif sur iOS (cf. skill motion)
    wheelMultiplier: 1,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Menu mobile AVANT le handler d'ancres : au clic d'un lien, le menu se ferme
  // (et relance Lenis) d'abord, puis l'ancre scrolle.
  setupNavMenu(lenis);

  // Anchor links → scroll lissé Lenis, avec offset pour le header fixe.
  const navEl = document.querySelector<HTMLElement>('[data-nav]');
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = navEl?.offsetHeight ?? 0;
      lenis.scrollTo(target as HTMLElement, {
        offset: id === '#top' ? 0 : -(headerH + 12),
        duration: 1.2,
      });
    });
  });

  // Choreography
  setupLineMasks();
  setupReveals();
  setupCounts();
  setupYearCount();
  setupParallax();
  setupTemple();
  setupHeritage();
  setupMarquee(lenis);
  if (FINE_POINTER) setupMagnetic();
  setupNav();

  // Lenis démarre + entrée hero (char-by-char).
  startHero(lenis);

  // Recalc après chargement complet (fonts, images).
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

// ─────────────────────────────────────────────────────────────────────────────
// Reduced motion : tout visible, pas de Lenis.
// ─────────────────────────────────────────────────────────────────────────────
function reducedInit(): void {
  document.documentElement.classList.remove('js-motion');
  gsap.set('[data-reveal], .line-inner, [data-hero-fade]', {
    clearProps: 'all',
    opacity: 1,
    y: 0,
  });
  // Compteur année : valeur finale = année courante (aucune animation).
  document.querySelectorAll<HTMLElement>('[data-count-year]').forEach((el) => {
    const from = parseInt(el.dataset.countFrom ?? '1992', 10);
    const year = new Date().getFullYear();
    el.textContent = year.toString();
    updateYearCaption(from, year);
  });
  // Autres compteurs : valeur finale directe.
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const to = el.dataset.count ?? '';
    if (to) el.textContent = to;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Reveals génériques
// ─────────────────────────────────────────────────────────────────────────────
function setupReveals(): void {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: 'enter',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });
  gsap.set('[data-reveal]', { y: 28 });
}

// ─────────────────────────────────────────────────────────────────────────────
// Masques de texte ligne par ligne
// ─────────────────────────────────────────────────────────────────────────────
function setupLineMasks(): void {
  gsap.utils.toArray<HTMLElement>('[data-lines]').forEach((group) => {
    const inners = group.querySelectorAll<HTMLElement>('.line-inner');
    gsap.fromTo(
      inners,
      { yPercent: 110, y: 0 },
      {
        yPercent: 0,
        duration: 1,
        ease: 'enter',
        stagger: 0.08,
        scrollTrigger: { trigger: group, start: 'top 82%' },
      },
    );
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Compteurs déclenchés (au scroll-in)
// ─────────────────────────────────────────────────────────────────────────────
function setupCounts(): void {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const to = parseFloat(el.dataset.count ?? '0');
    const obj = { v: parseFloat(el.dataset.countFrom ?? '0') };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: to,
          duration: 1.6,
          ease: 'swift',
          onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
          onComplete: () => (el.textContent = Math.round(to).toString()),
        }),
    });
  });
}

// Compteur année (héritage) : count-up 1992 → année courante, déclenché UNE
// SEULE fois à l'entrée dans le viewport. L'année cible est calculée au runtime.
function setupYearCount(): void {
  const el = document.querySelector<HTMLElement>('[data-count-year]');
  if (!el) return;
  const from = parseInt(el.dataset.countFrom ?? '1992', 10);
  const to = new Date().getFullYear();
  updateYearCaption(from, to);
  const triggerSel = el.dataset.countTrigger;
  const trigger = (triggerSel && document.querySelector(triggerSel)) || el;
  const obj = { v: from };
  ScrollTrigger.create({
    trigger,
    start: 'top 75%',
    once: true,
    onEnter: () => {
      el.textContent = from.toString();
      gsap.to(obj, {
        v: to,
        duration: 1.8,
        ease: 'swift',
        onUpdate: () => (el.textContent = Math.round(obj.v).toString()),
        onComplete: () => (el.textContent = to.toString()),
      });
    },
  });
}

function updateYearCaption(from: number, year: number): void {
  const cap = document.querySelector<HTMLElement>('[data-year-caption]');
  if (!cap) return;
  const suffix = cap.dataset.suffix ?? '';
  cap.textContent = `— ${year - from} ans, ${suffix}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Parallaxe multi-couches
// ─────────────────────────────────────────────────────────────────────────────
function setupParallax(): void {
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = parseFloat(el.dataset.parallax ?? '60');
    gsap.fromTo(
      el,
      { yPercent: -amount * 0.15 },
      {
        yPercent: amount * 0.15,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('[data-parallax-scope]') ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Le Temple : galerie horizontale épinglée (desktop), swipe natif (mobile)
// + barre de progression discrète.
// ─────────────────────────────────────────────────────────────────────────────
function setupTemple(): void {
  const section = document.querySelector<HTMLElement>('[data-temple]');
  const track = document.querySelector<HTMLElement>('[data-temple-track]');
  const progress = document.querySelector<HTMLElement>('[data-temple-progress]');
  if (!section || !track) return;

  const setProgress = (p: number) => {
    if (progress) progress.style.transform = `scaleX(${Math.max(0, Math.min(1, p))})`;
  };

  const mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', () => {
    track.style.overflow = 'visible';
    const distance = () => track.scrollWidth - window.innerWidth;
    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + distance(),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (self) => setProgress(self.progress),
      },
    });
    return () => tween.kill();
  });

  mm.add('(max-width: 1023px)', () => {
    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      setProgress(max > 0 ? track.scrollLeft / max : 0);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => track.removeEventListener('scroll', onScroll);
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Héritage : révélation du récit
// ─────────────────────────────────────────────────────────────────────────────
function setupHeritage(): void {
  const section = document.querySelector<HTMLElement>('[data-heritage]');
  if (!section) return;
  gsap.utils.toArray<HTMLElement>('[data-story-step]').forEach((step, i) => {
    gsap.from(step, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'enter',
      scrollTrigger: { trigger: step, start: 'top 80%' },
      delay: i * 0.05,
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Marquee plein écran : défilement infini couplé à la vélocité du scroll Lenis.
// L'empreinte « Locomotive » : plus on scrolle vite, plus le ruban accélère.
// ─────────────────────────────────────────────────────────────────────────────
function setupMarquee(lenis: Lenis): void {
  gsap.utils.toArray<HTMLElement>('[data-marquee]').forEach((m) => {
    const inner = m.querySelector<HTMLElement>('[data-marquee-inner]');
    if (!inner) return;
    // Le contenu est dupliqué dans le markup → -50% = une boucle sans couture.
    const speed = parseFloat(m.dataset.marqueeSpeed ?? '26');
    const tween = gsap.to(inner, {
      xPercent: -50,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });
    lenis.on('scroll', ({ velocity }: { velocity: number }) => {
      const boost = 1 + Math.min(Math.abs(velocity) * 0.06, 6);
      gsap.to(tween, { timeScale: boost, duration: 0.4, overwrite: true });
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Boutons magnétiques (desktop)
// ─────────────────────────────────────────────────────────────────────────────
function setupMagnetic(): void {
  gsap.utils.toArray<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic ?? '0.3');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'soft' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'soft' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    });
    el.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Nav : devient solide après le hero
// ─────────────────────────────────────────────────────────────────────────────
function setupNav(): void {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!nav || !hero) return;
  ScrollTrigger.create({
    trigger: hero,
    start: 'bottom 90%',
    onToggle: (self) => nav.classList.toggle('is-solid', self.isActive || self.progress > 0),
    onEnterBack: () => nav.classList.remove('is-solid'),
    onLeave: () => nav.classList.add('is-solid'),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Barre de progression de scroll + haltère (rAF, scroll passif).
// ─────────────────────────────────────────────────────────────────────────────
function setupScrollProgress(): void {
  const fill = document.querySelector<HTMLElement>('[data-scroll-progress-fill]');
  const thumb = document.querySelector<HTMLElement>('[data-scroll-progress-thumb]');
  if (!fill && !thumb) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (fill) fill.style.transform = `scaleX(${p})`;
    if (thumb) thumb.style.left = `clamp(8px, ${p * 100}%, calc(100% - 8px))`;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

// ─────────────────────────────────────────────────────────────────────────────
// Menu mobile (burger)
// ─────────────────────────────────────────────────────────────────────────────
function setupNavMenu(lenis: Lenis | null): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-nav-menu]');
  if (!toggle || !menu) return;

  let open = false;
  const focusables = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));

  const setOpen = (next: boolean) => {
    if (next === open) return;
    open = next;
    menu.hidden = !next;
    toggle.setAttribute('aria-expanded', String(next));
    toggle.setAttribute('aria-label', next ? 'Fermer le menu' : 'Ouvrir le menu');
    document.documentElement.classList.toggle('menu-open', next);
    if (next) {
      lenis?.stop();
      focusables()[0]?.focus(); // piège le focus à l'intérieur du menu
    } else {
      lenis?.start();
      toggle.focus(); // rend le focus au burger à la fermeture
    }
  };

  toggle.addEventListener('click', () => setOpen(!open));

  // Fermeture au clic d'un lien : posé AVANT le handler d'ancres global → ferme
  // (et relance Lenis) d'abord, puis l'ancre scrolle.
  menu
    .querySelectorAll<HTMLAnchorElement>('a[href]')
    .forEach((a) => a.addEventListener('click', () => setOpen(false)));

  // Fermeture au clic sur le fond (overlay) — hors liens/boutons.
  menu.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t === menu || !t.closest('a[href], button')) setOpen(false);
  });

  // Échap + piège à focus (Tab cyclique) tant que le menu est ouvert.
  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'Tab') {
      const f = focusables();
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Carrousel d'avis : autoplay doux, pause au hover/focus, flèches + drag.
// ─────────────────────────────────────────────────────────────────────────────
function setupReviewCarousel(): void {
  const root = document.querySelector<HTMLElement>('[data-reviews]');
  const track = root?.querySelector<HTMLElement>('[data-reviews-track]');
  if (!root || !track) return;
  const slides = Array.from(track.querySelectorAll<HTMLElement>('.reviews-slide'));
  if (!slides.length) return;

  const prevBtn = root.querySelector<HTMLButtonElement>('[data-review-prev]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-review-next]');

  let index = 0;
  let dragging = false;
  let startX = 0;
  let baseX = 0;

  const perView = () =>
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const maxIndex = () => Math.max(0, slides.length - perView());

  const baseOffset = () => slides[Math.min(index, slides.length - 1)].offsetLeft;

  const apply = (x: number, withTransition: boolean) => {
    track.style.transition = withTransition ? '' : 'none';
    track.style.transform = `translateX(${-x}px)`;
  };

  const goTo = (i: number) => {
    index = Math.max(0, Math.min(i, maxIndex()));
    apply(baseOffset(), true);
  };

  prevBtn?.addEventListener('click', () => goTo(index - 1));
  nextBtn?.addEventListener('click', () => goTo(index + 1));
  window.addEventListener('resize', () => goTo(index));

  const onDown = (e: PointerEvent) => {
    dragging = true;
    startX = e.clientX;
    baseX = baseOffset();
    track.setPointerCapture(e.pointerId);
    track.style.cursor = 'grabbing';
  };
  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    apply(baseX - (e.clientX - startX), false);
  };
  const onUp = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    track.style.cursor = '';
    const moved = e.clientX - startX;
    if (Math.abs(moved) > 40) goTo(index + (moved < 0 ? 1 : -1));
    else goTo(index);
  };
  track.addEventListener('pointerdown', onDown);
  track.addEventListener('pointermove', onMove);
  track.addEventListener('pointerup', onUp);
  track.addEventListener('pointercancel', onUp);

  goTo(0);

  if (!REDUCED) {
    let timer = window.setInterval(tick, 4500);
    function tick() {
      goTo(index >= maxIndex() ? 0 : index + 1);
    }
    const pause = () => {
      window.clearInterval(timer);
      timer = 0 as unknown as number;
    };
    const resume = () => {
      if (!timer) timer = window.setInterval(tick, 4500);
    };
    root.addEventListener('mouseenter', pause);
    root.addEventListener('mouseleave', resume);
    root.addEventListener('focusin', pause);
    root.addEventListener('focusout', resume);
    track.addEventListener('pointerdown', pause);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Pré-remplissage de l'objet du formulaire depuis les CTA [data-objet].
// ─────────────────────────────────────────────────────────────────────────────
function setupObjetPrefill(): void {
  const select = document.querySelector<HTMLSelectElement>('#cf-objet');
  if (!select) return;
  document.querySelectorAll<HTMLAnchorElement>('a[data-objet]').forEach((a) => {
    a.addEventListener('click', () => {
      const objet = a.dataset.objet;
      if (objet && select.querySelector(`option[value="${objet}"]`)) select.value = objet;
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Formulaire de contact : validation + envoi (Web3Forms) ou fallback mailto.
// ─────────────────────────────────────────────────────────────────────────────
function setupContactForm(): void {
  const formEl = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!formEl) return;
  const key = formEl.dataset.web3formsKey ?? '';
  const fallbackEmail = formEl.dataset.fallbackEmail ?? '';
  const successEl = document.querySelector<HTMLElement>('[data-form-success]');
  const submitBtn = formEl.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = formEl.querySelector<HTMLElement>('[data-submit-label]');

  const setError = (name: string, msg: string) => {
    const el = formEl.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    const field = formEl.querySelector<HTMLElement>(`[name="${name}"]`)?.closest('.field');
    if (el) el.textContent = msg;
    field?.classList.toggle('field--error', !!msg);
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telRe = /[0-9]{6,}/;

  const validate = (): boolean => {
    let ok = true;
    const get = (n: string) =>
      formEl.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${n}"]`);

    const nom = get('nom')?.value.trim() ?? '';
    if (nom.length < 2) { setError('nom', 'Indiquez votre nom.'); ok = false; } else setError('nom', '');

    const tel = (get('telephone')?.value ?? '').replace(/\s/g, '');
    if (!telRe.test(tel)) { setError('telephone', 'Numéro invalide.'); ok = false; } else setError('telephone', '');

    const email = get('email')?.value.trim() ?? '';
    if (!emailRe.test(email)) { setError('email', 'Email invalide.'); ok = false; } else setError('email', '');

    const message = get('message')?.value.trim() ?? '';
    if (message.length < 10) { setError('message', 'Votre message est trop court.'); ok = false; } else setError('message', '');

    const consent = formEl.querySelector<HTMLInputElement>('[name="consent"]');
    if (!consent?.checked) { setError('consent', 'Le consentement est requis.'); ok = false; } else setError('consent', '');

    return ok;
  };

  const showSuccess = () => {
    formEl.hidden = true;
    if (successEl) {
      successEl.hidden = false;
      if (!REDUCED) gsap.from(successEl, { opacity: 0, y: 16, duration: 0.7, ease: 'enter' });
    }
  };

  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) {
      formEl
        .querySelector<HTMLElement>('.field--error [name], .field--error select, .field--error textarea')
        ?.focus();
      return;
    }

    const data = new FormData(formEl);

    // Sans clé Web3Forms : fallback mailto propre.
    if (!key) {
      const body = [
        `Nom : ${data.get('nom')}`,
        `Téléphone : ${data.get('telephone')}`,
        `Email : ${data.get('email')}`,
        `Objet : ${data.get('objet')}`,
        '',
        `${data.get('message')}`,
      ].join('\n');
      const subject = `Demande Iron Gym — ${data.get('objet')}`;
      window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      showSuccess();
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = 'Envoi…';
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      showSuccess();
    } catch {
      if (submitLabel) submitLabel.textContent = 'Réessayer';
      setError('message', "L'envoi a échoué. Réessayez ou appelez-nous.");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Démarrage : Lenis + entrée hero (char-by-char)
// ─────────────────────────────────────────────────────────────────────────────
function startHero(lenis: Lenis): void {
  lenis.start();
  heroEntrance();
}

// Entrée du hero : « IRON GYM » révélé caractère par caractère (SplitText),
// puis fondu du sous-titre et des CTA.
function heroEntrance(): void {
  const titleEls = gsap.utils.toArray<HTMLElement>('[data-hero-chars]');
  if (titleEls.length) {
    // aria:'none' → SplitText n'ajoute aucun attribut ARIA (aria-label sur un
    // <span> serait prohibé). L'accessibilité est portée par le h1 aria-label
    // + les spans aria-hidden dans le markup.
    const split = new SplitText(titleEls, { type: 'chars', aria: 'none' });
    gsap.set(titleEls, { visibility: 'visible' });
    gsap.from(split.chars, {
      yPercent: 120,
      opacity: 0,
      duration: 0.7,
      ease: 'swift',
      stagger: { each: 0.03, from: 'start' },
    });
  }
  gsap.to('[data-hero-fade]', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: 'enter',
    delay: 0.15,
  });
}
