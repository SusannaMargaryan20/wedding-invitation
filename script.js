/* ============================================================
   Anna & David — wedding invitation
   Vanilla JS. No dependencies.
   ------------------------------------------------------------
   1. Configuration
   2. Translations (en / hy / ru)
   3. Utilities
   4. i18n engine
   5. Content binding (config -> DOM)
   6. Header, navigation, language
   7. Hero entrance
   8. Reveal observer
   9. Scroll-driven scenes (walk to church, first dance)
   10. RSVP form
   11. Boot
   ============================================================ */

/* ---------- 1. Configuration ---------- */
const weddingConfig = {
  couple: {
    brideName: "Anna",
    groomName: "David",
    brideInitial: "A",
    groomInitial: "D"
  },

  wedding: {
    dayShort: "SAT",
    dayNumber: "14",
    monthYear: "JUN 2025",
    city: "YEREVAN, ARMENIA"
  },

  ceremony: {
    title: "Saint Gregory The Illuminator Church",
    date: "Saturday, June 14, 2025",
    time: "16:00",
    location: "Yerevan, Armenia",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Saint+Gregory+the+Illuminator+Cathedral+Yerevan"
  },

  reception: {
    title: "Grand Hotel Yerevan",
    date: "Saturday, June 14, 2025",
    time: "19:00",
    location: "Yerevan, Armenia",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Yerevan"
  },

  images: {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
    story: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    storyAlt: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    /* the ceremony backdrop is drawn and animated in SVG — no photo needed */
    reception: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80"
  },

  /* Paste the deployed Google Apps Script web-app URL here.
     While it still contains PASTE_, the form runs in demo mode. */
  rsvpEndpoint: "PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
};

/* ---------- 2. Translations ---------- */
const translations = {
  en: {
    "meta.title": "Anna & David — 14 June 2025",

    "nav.story": "Our story",
    "nav.ceremony": "The ceremony",
    "nav.reception": "The reception",
    "nav.rsvp": "RSVP",

    "hero.eyebrow": "Together with their families",
    "hero.invite": "Invite you to celebrate their wedding",
    "hero.note": "Two hearts.<br>One journey.",
    "hero.scroll": "Scroll",
    "hero.brideName": "Anna",
    "hero.groomName": "David",
    "wedding.dayShort": "SAT",
    "wedding.monthYear": "JUN 2025",
    "wedding.city": "Yerevan, Armenia",

    "story.eyebrow": "Our story",
    "story.title": "How it all began",
    "story.para": "Some stories begin with a grand moment. Ours began quietly — with a conversation that somehow never really ended.",
    "story.para2": "Seven years, three cities and one small apartment full of plants later, we are asking the people we love most to stand beside us in Yerevan.",
    "story.cta": "Read our story",
    "story.note": "Same love,<br>new chapter.",

    "ceremony.eyebrow": "The ceremony",
    "ceremony.title": "Saint Gregory the Illuminator Church",
    "ceremony.date": "Saturday, June 14, 2025",
    "ceremony.location": "Yerevan, Armenia",

    "reception.eyebrow": "The reception",
    "reception.title": "Grand Hotel Yerevan",
    "reception.date": "Saturday, June 14, 2025",
    "reception.location": "Yerevan, Armenia",
    "reception.note": "Dinner, dancing & a night to remember.",

    "label.when": "When",
    "label.where": "Where",
    "cta.map": "View on map",
    "journey.church": "Church",
    "journey.reception": "Reception",

    "rsvp.title": "Will you join us?",
    "rsvp.sub": "We would be delighted to celebrate this day with you. Please let us know if you'll be joining us.",
    "rsvp.hand": "We can't wait to celebrate with you! ♡",
    "rsvp.thanksTitle": "Thank you. Your attendance has been confirmed.",
    "rsvp.thanksText": "We'll send the final details closer to the day. Travel safely — and see you in Yerevan.",
    "rsvp.thanksHand": "With love, Anna & David",

    "form.side": "From which side?",
    "form.sidePlaceholder": "Please choose",
    "form.sideBride": "Bride's side",
    "form.sideGroom": "Groom's side",
    "form.sideFriends": "Friends",
    "form.sideOther": "Other",
    "form.firstName": "First name",
    "form.firstNamePh": "Susanna",
    "form.lastName": "Last name",
    "form.lastNamePh": "Margaryan",
    "form.guests": "Guests",
    "form.guestsMore": "Add a guest",
    "form.guestsLess": "Remove a guest",
    "form.submit": "Confirm attendance",
    "form.sending": "Sending…",
    "form.sent": "Sent ✓",

    "err.side": "Choose which side you're joining from.",
    "err.firstName": "Add your first name.",
    "err.lastName": "Add your last name.",
    "err.guests": "Choose between 1 and 10 guests.",
    "err.send": "That didn't send. Check your connection and try again.",
    "status.demo": "Demo mode — connect the RSVP endpoint to receive this by email.",

    "lang.name": "English"
  },

  hy: {
    "meta.title": "Աննա և Դավիթ — 14 հունիսի 2025",

    "nav.story": "Մեր պատմությունը",
    "nav.ceremony": "Պսակադրություն",
    "nav.reception": "Հանդիսություն",
    "nav.rsvp": "Հաստատում",

    "hero.eyebrow": "Իրենց ընտանիքների հետ միասին",
    "hero.invite": "Հրավիրում են ձեզ իրենց հարսանիքին",
    "hero.note": "Երկու սիրտ։<br>Մեկ ճանապարհ։",
    "hero.scroll": "Ոլորել",
    "hero.brideName": "Աննա",
    "hero.groomName": "Դավիթ",
    "wedding.dayShort": "ՇԲԹ",
    "wedding.monthYear": "ՀՈՒՆ 2025",
    "wedding.city": "Երևան, Հայաստան",

    "story.eyebrow": "Մեր պատմությունը",
    "story.title": "Ինչպես ամեն ինչ սկսվեց",
    "story.para": "Որոշ պատմություններ սկսվում են մեծ պահից։ Մերը սկսվեց հանգիստ՝ մի զրույցով, որն այդպես էլ երբեք չավարտվեց։",
    "story.para2": "Յոթ տարի, երեք քաղաք և բույսերով լի մեկ փոքրիկ բնակարան անց՝ խնդրում ենք մեր ամենասիրելի մարդկանց լինել մեր կողքին Երևանում։",
    "story.cta": "Կարդալ մեր պատմությունը",
    "story.note": "Նույն սերը,<br>նոր գլուխը։",

    "ceremony.eyebrow": "Պսակադրություն",
    "ceremony.title": "Սուրբ Գրիգոր Լուսավորիչ եկեղեցի",
    "ceremony.date": "Շաբաթ, 14 հունիսի, 2025",
    "ceremony.location": "Երևան, Հայաստան",

    "reception.eyebrow": "Հանդիսություն",
    "reception.title": "Գրանդ Հոթել Երևան",
    "reception.date": "Շաբաթ, 14 հունիսի, 2025",
    "reception.location": "Երևան, Հայաստան",
    "reception.note": "Ընթրիք, պար և անմոռանալի գիշեր։",

    "label.when": "Երբ",
    "label.where": "Որտեղ",
    "cta.map": "Բացել քարտեզը",
    "journey.church": "Եկեղեցի",
    "journey.reception": "Հանդիսություն",

    "rsvp.title": "Կմիանա՞ք մեզ",
    "rsvp.sub": "Ուրախ կլինենք այս օրը նշել ձեզ հետ։ Խնդրում ենք տեղեկացնել՝ արդյոք կմիանաք մեզ։",
    "rsvp.hand": "Անհամբեր սպասում ենք ձեզ! ♡",
    "rsvp.thanksTitle": "Շնորհակալություն։ Ձեր մասնակցությունը հաստատված է։",
    "rsvp.thanksText": "Մանրամասները կուղարկենք օրվան մոտ։ Բարի ճանապարհ և կհանդիպենք Երևանում։",
    "rsvp.thanksHand": "Սիրով՝ Աննա և Դավիթ",

    "form.side": "Ո՞ր կողմից եք",
    "form.sidePlaceholder": "Ընտրեք",
    "form.sideBride": "Հարսի կողմից",
    "form.sideGroom": "Փեսայի կողմից",
    "form.sideFriends": "Ընկերներ",
    "form.sideOther": "Այլ",
    "form.firstName": "Անուն",
    "form.firstNamePh": "Սուսաննա",
    "form.lastName": "Ազգանուն",
    "form.lastNamePh": "Մարգարյան",
    "form.guests": "Հյուրեր",
    "form.guestsMore": "Ավելացնել հյուր",
    "form.guestsLess": "Պակասեցնել հյուրին",
    "form.submit": "Հաստատել մասնակցությունը",
    "form.sending": "Ուղարկվում է…",
    "form.sent": "Ուղարկված է ✓",

    "err.side": "Նշեք, թե որ կողմից եք։",
    "err.firstName": "Լրացրեք անունը։",
    "err.lastName": "Լրացրեք ազգանունը։",
    "err.guests": "Ընտրեք 1-ից 10 հյուր։",
    "err.send": "Չհաջողվեց ուղարկել։ Ստուգեք կապը և կրկին փորձեք։",
    "status.demo": "Դեմո ռեժիմ — միացրեք RSVP հասցեն՝ նամակ ստանալու համար։",

    "lang.name": "Հայերեն"
  },

  ru: {
    "meta.title": "Анна и Давид — 14 июня 2025",

    "nav.story": "Наша история",
    "nav.ceremony": "Венчание",
    "nav.reception": "Банкет",
    "nav.rsvp": "Подтвердить",

    "hero.eyebrow": "Вместе со своими семьями",
    "hero.invite": "Приглашают вас разделить день их свадьбы",
    "hero.note": "Два сердца.<br>Один путь.",
    "hero.scroll": "Листайте",
    "hero.brideName": "Анна",
    "hero.groomName": "Давид",
    "wedding.dayShort": "СБ",
    "wedding.monthYear": "ИЮНЬ 2025",
    "wedding.city": "Ереван, Армения",

    "story.eyebrow": "Наша история",
    "story.title": "Как всё начиналось",
    "story.para": "Некоторые истории начинаются с громкого момента. Наша началась тихо — с разговора, который так и не закончился.",
    "story.para2": "Семь лет, три города и одна маленькая квартира, полная растений, спустя — мы просим самых близких быть рядом с нами в Ереване.",
    "story.cta": "Читать нашу историю",
    "story.note": "Та же любовь,<br>новая глава.",

    "ceremony.eyebrow": "Венчание",
    "ceremony.title": "Церковь Святого Григория Просветителя",
    "ceremony.date": "Суббота, 14 июня 2025",
    "ceremony.location": "Ереван, Армения",

    "reception.eyebrow": "Банкет",
    "reception.title": "Гранд Отель Ереван",
    "reception.date": "Суббота, 14 июня 2025",
    "reception.location": "Ереван, Армения",
    "reception.note": "Ужин, танцы и вечер, который запомнится.",

    "label.when": "Когда",
    "label.where": "Где",
    "cta.map": "Открыть на карте",
    "journey.church": "Церковь",
    "journey.reception": "Банкет",

    "rsvp.title": "Будете с нами?",
    "rsvp.sub": "Мы будем рады встретить этот день вместе с вами. Пожалуйста, сообщите, придёте ли вы.",
    "rsvp.hand": "Будем счастливы видеть вас! ♡",
    "rsvp.thanksTitle": "Спасибо. Ваше присутствие подтверждено.",
    "rsvp.thanksText": "Детали пришлём ближе к дате. Доброй дороги — и до встречи в Ереване.",
    "rsvp.thanksHand": "С любовью, Анна и Давид",

    "form.side": "С чьей стороны?",
    "form.sidePlaceholder": "Выберите",
    "form.sideBride": "Со стороны невесты",
    "form.sideGroom": "Со стороны жениха",
    "form.sideFriends": "Друзья",
    "form.sideOther": "Другое",
    "form.firstName": "Имя",
    "form.firstNamePh": "Сусанна",
    "form.lastName": "Фамилия",
    "form.lastNamePh": "Маргарян",
    "form.guests": "Гости",
    "form.guestsMore": "Добавить гостя",
    "form.guestsLess": "Убрать гостя",
    "form.submit": "Подтвердить участие",
    "form.sending": "Отправляем…",
    "form.sent": "Отправлено ✓",

    "err.side": "Укажите, с чьей вы стороны.",
    "err.firstName": "Введите имя.",
    "err.lastName": "Введите фамилию.",
    "err.guests": "Выберите от 1 до 10 гостей.",
    "err.send": "Отправить не удалось. Проверьте соединение и попробуйте снова.",
    "status.demo": "Демо-режим — подключите адрес RSVP, чтобы получать письма.",

    "lang.name": "Русский"
  }
};

/* ---------- 3. Utilities ---------- */
const $  = (sel, ctx) => (ctx || document).querySelector(sel);
const $$ = (sel, ctx) => Array.prototype.slice.call((ctx || document).querySelectorAll(sel));
const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeInOut = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const wait = ms => new Promise(r => setTimeout(r, ms));

const prefersReduced = window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : { matches: false, addEventListener: null };

const isSmall = () => window.innerWidth <= 767;
const isCompact = () => window.innerWidth <= 1023;

const SUPPORTED = ["en", "hy", "ru"];
const STORE_KEY = "ad-wedding-lang";

let currentLang = "en";

function safeStorage(action, key, value) {
  try {
    if (action === "get") return window.localStorage.getItem(key);
    if (action === "set") window.localStorage.setItem(key, value);
  } catch (e) { /* private mode — ignore */ }
  return null;
}

/* ---------- 4. i18n engine ---------- */
function t(key, fallback) {
  const dict = translations[currentLang] || {};
  if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  if (Object.prototype.hasOwnProperty.call(translations.en, key)) return translations.en[key];
  return fallback !== undefined ? fallback : key;
}

function applyTranslations() {
  document.documentElement.setAttribute("lang", currentLang);
  document.title = t("meta.title", document.title);

  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = t(key, null);
    if (value === null) return;
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = value;
    else el.textContent = value;
  });

  $$("[data-i18n-placeholder]").forEach(el => {
    const value = t(el.getAttribute("data-i18n-placeholder"), null);
    if (value !== null) el.setAttribute("placeholder", value);
  });

  $$("[data-i18n-aria]").forEach(el => {
    const value = t(el.getAttribute("data-i18n-aria"), null);
    if (value !== null) el.setAttribute("aria-label", value);
  });
}

function setLanguage(lang, persist) {
  currentLang = SUPPORTED.indexOf(lang) > -1 ? lang : "en";
  if (persist !== false) safeStorage("set", STORE_KEY, currentLang);

  applyTranslations();
  applyContent();

  $$("#lang .lang__btn").forEach(btn => {
    const active = btn.getAttribute("data-lang") === currentLang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

/* ---------- 5. Content binding ---------- */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) el.textContent = value;
}

function applyContent() {
  const c = weddingConfig;

  /* monogram */
  $$("[data-config]").forEach(el => {
    const key = el.getAttribute("data-config");
    if (key === "brideInitial") el.textContent = c.couple.brideInitial;
    if (key === "groomInitial") el.textContent = c.couple.groomInitial;
  });

  /* hero */
  setText("heroBride", t("hero.brideName", c.couple.brideName));
  setText("heroGroom", t("hero.groomName", c.couple.groomName));
  setText("heroDay", t("wedding.dayShort", c.wedding.dayShort));
  setText("heroNum", c.wedding.dayNumber);
  setText("heroMonth", t("wedding.monthYear", c.wedding.monthYear));
  setText("heroCity", t("wedding.city", c.wedding.city));

  /* ceremony + reception */
  setText("ceremonyTitle", t("ceremony.title", c.ceremony.title));
  setText("ceremonyDate", t("ceremony.date", c.ceremony.date));
  setText("ceremonyTime", c.ceremony.time);
  setText("ceremonyPlace", t("ceremony.location", c.ceremony.location));

  setText("receptionTitle", t("reception.title", c.reception.title));
  setText("receptionDate", t("reception.date", c.reception.date));
  setText("receptionTime", c.reception.time);
  setText("receptionPlace", t("reception.location", c.reception.location));

  const cMap = document.getElementById("ceremonyMap");
  if (cMap && c.ceremony.mapUrl && c.ceremony.mapUrl.indexOf("http") === 0) cMap.href = c.ceremony.mapUrl;
  const rMap = document.getElementById("receptionMap");
  if (rMap && c.reception.mapUrl && c.reception.mapUrl.indexOf("http") === 0) rMap.href = c.reception.mapUrl;

  /* footer */
  setText("footerNames", t("hero.brideName", c.couple.brideName) + " & " + t("hero.groomName", c.couple.groomName));
  setText("footerDate", c.wedding.dayNumber + " " + t("wedding.monthYear", c.wedding.monthYear));
  setText("footerCity", t("wedding.city", c.wedding.city));
}

function applyImages() {
  const map = [
    ["heroImg", weddingConfig.images.hero],
    ["storyImg", weddingConfig.images.story],
    ["storyImgAlt", weddingConfig.images.storyAlt || weddingConfig.images.story],
    ["receptionImg", weddingConfig.images.reception]
  ];

  map.forEach(pair => {
    const el = document.getElementById(pair[0]);
    if (!el || !pair[1]) return;
    el.addEventListener("error", () => { el.style.display = "none"; }, { once: true });
    el.src = pair[1];
  });
}

/* ---------- 6. Header, navigation, language ---------- */
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMenu() {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileNav");
  if (!burger || !menu) return;

  const close = () => {
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-menu-open", "is-locked");
    menu.classList.remove("is-open");
    setTimeout(() => { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 450);
  };

  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-menu-open", "is-locked");
  };

  burger.addEventListener("click", () => {
    if (burger.getAttribute("aria-expanded") === "true") close(); else open();
  });

  $$(".mobile-nav__link", menu).forEach(link => link.addEventListener("click", close));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && burger.getAttribute("aria-expanded") === "true") close();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023 && burger.getAttribute("aria-expanded") === "true") close();
  });
}

function initLanguage() {
  const box = document.getElementById("lang");
  if (!box) return;
  box.addEventListener("click", e => {
    const btn = e.target.closest ? e.target.closest(".lang__btn") : null;
    if (!btn) return;
    setLanguage(btn.getAttribute("data-lang"), true);
  });
}

function initNavHighlight() {
  const links = $$(".nav__link");
  if (!links.length || !("IntersectionObserver" in window)) return;

  const sections = links
    .map(link => {
      const id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle("is-current", l.getAttribute("href") === "#" + entry.target.id));
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

  sections.forEach(s => obs.observe(s));
}

/* ---------- 7. Hero entrance ---------- */
function playIntro() {
  document.body.classList.remove("is-loading");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => document.body.classList.add("is-ready"));
  });
}

/* ---------- 8. Reveal observer ---------- */
function initReveals() {
  const targets = $$(".reveal").concat($$(".story__media"));
  if (!targets.length) return;

  if (!("IntersectionObserver" in window) || prefersReduced.matches) {
    targets.forEach(el => el.classList.add("is-in"));
    return;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      obs.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });

  targets.forEach(el => obs.observe(el));
}

/* ---------- 9. Scroll-driven scenes ---------- */
function initScenes() {
  const ceremony = document.getElementById("ceremony");
  const reception = document.getElementById("reception");

  const dStage = document.getElementById("receptionStage");
  const dPair = document.getElementById("receptionPair");
  const dBride = document.getElementById("danceBride");
  const dGroom = document.getElementById("danceGroom");

  const fillInline = document.getElementById("journeyFillInline");
  const node2 = document.getElementById("journeyNodeInline2");

  const botanical = document.getElementById("storyBotanical");
  const story = document.getElementById("story");

  /* static, complete layout when motion is reduced */
  function restStatic() {
    if (dPair) { dPair.style.transform = "translate3d(-50%,0,0)"; dPair.style.opacity = "1"; }
    if (dBride) dBride.style.transform = "translate3d(calc(-50% - 22px),0,0)";
    if (dGroom) dGroom.style.transform = "translate3d(calc(-50% + 22px),0,0)";
    if (fillInline) fillInline.style.transform = isCompact() ? "scaleX(1)" : "scaleY(1)";
    if (node2) node2.classList.add("is-active");
  }

  if (prefersReduced.matches) {
    document.body.classList.add("no-motion");
    restStatic();
    return;
  }

  let running = true;
  let paused = false;

  function frame(now) {
    if (!running) return;
    if (!paused) render(now || 0);
    requestAnimationFrame(frame);
  }

  function render(now) {
    const vh = window.innerHeight || 800;
    const small = isSmall();

    /* --- story botanical parallax --- */
    if (botanical && story) {
      const sr = story.getBoundingClientRect();
      if (sr.bottom > 0 && sr.top < vh) {
        const p = clamp01((vh - sr.top) / (vh + sr.height));
        botanical.style.transform = "translate3d(0," + ((p - 0.5) * (small ? 26 : 64)).toFixed(2) + "px,0)";
      }
    }

    /* --- journey progress: church → reception --- */
    if (ceremony && reception) {
      const cr = ceremony.getBoundingClientRect();
      const rr = reception.getBoundingClientRect();
      const start = cr.top - vh * 0.35;
      const span = (rr.top - cr.top) + rr.height * 0.4;
      const jp = clamp01(-start / (span || 1));

      if (fillInline) fillInline.style.transform = (isCompact() ? "scaleX(" : "scaleY(") + jp.toFixed(3) + ")";
      if (node2) node2.classList.toggle("is-active", jp > 0.55);
    }

    /* --- reception: the first dance --- */
    if (reception && dStage && dPair && dBride && dGroom) {
      const r = reception.getBoundingClientRect();
      const active = r.bottom > -240 && r.top < vh + 240;
      if (active) {
        const p = clamp01((vh - r.top) / (vh + r.height));
        const width = dStage.offsetWidth || vh;

        const enter = easeInOut(clamp01((p - 0.08) / 0.24));
        const close = easeInOut(clamp01((p - 0.18) / 0.30));
        const out = easeInOut(clamp01((p - 0.86) / 0.14));

        const sway = Math.sin(now / 1750);
        const sway2 = Math.sin(now / 1750 + 0.5);
        const amp = small ? 4 : 9;

        const spread = width * (small ? 0.2 : 0.24);
        const rest = small ? 13 : 20;

        const bx = -(spread * (1 - close) + rest) + sway * amp * close;
        const gx = (spread * (1 - close) + rest) + sway * amp * close;
        const tilt = sway * 1.6 * close;

        dBride.style.transform =
          "translate3d(calc(-50% + " + bx.toFixed(1) + "px),0,0) rotate(" + (-tilt).toFixed(2) + "deg)" +
          (small ? "" : " skewX(" + (sway2 * 1.1).toFixed(2) + "deg)");
        dGroom.style.transform =
          "translate3d(calc(-50% + " + gx.toFixed(1) + "px),0,0) rotate(" + tilt.toFixed(2) + "deg)";

        dPair.style.transform =
          "translate3d(-50%," + ((1 - enter) * 34).toFixed(1) + "px,0) rotate(" + (sway * 0.7 * close).toFixed(2) + "deg)";
        dPair.style.opacity = (enter * (1 - out)).toFixed(3);
      }
    }
  }

  document.addEventListener("visibilitychange", () => { paused = document.hidden; });

  if (prefersReduced.addEventListener) {
    prefersReduced.addEventListener("change", e => {
      if (e.matches) { running = false; document.body.classList.add("no-motion"); restStatic(); }
    });
  }

  requestAnimationFrame(frame);
}

/* ---------- 9b. Ceremony scene: walk in, marry, come out under rose petals ---------- */
function initCeremonyScene() {
  const section = document.getElementById("ceremony");
  const bride = document.getElementById("artBride");
  const groom = document.getElementById("artGroom");
  if (!section || !bride || !groom) return;

  const glow = document.getElementById("doorGlow");
  const spill = document.getElementById("doorSpill");
  const guests = document.getElementById("guests");
  const canvas = document.getElementById("petalCanvas");
  const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;

  /* timeline, in milliseconds — 5 full seconds are spent inside the church */
  const T = {
    start: 400,     // a beat before they set off
    meet: 3600,     // they meet in the middle of the aisle
    hold: 4300,     // a pause, facing each other
    door: 7000,     // they reach the doorway
    gone: 7500,     // inside
    appear: 12500,  // 5 seconds later, back at the door
    cheer: 12700,   // guests raise their arms
    front: 15400,   // they step out to the front
    loop: 26000     // the scene begins again
  };

  const GROUND = 860, DOOR_Y = 700, DOOR_S = 0.4;
  const POS = {
    bride: { start: 620, meet: 742, door: 782, front: 748 },
    groom: { start: 1180, meet: 858, door: 818, front: 852 }
  };
  const COLORS = ["#C9757E", "#B4596A", "#DFA3A3", "#EBD1C2", "#C29B5B"];

  let petals = [];
  let didBurst = false;
  let rafId = null;
  let startedAt = 0;
  let cw = 0, ch = 0;

  const seg = (t, a, b) => clamp01((t - a) / (b - a));
  const lerp = (a, b, p) => a + (b - a) * p;

  function place(el, x, y, s, o) {
    el.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ") scale(" + s.toFixed(3) + ")");
    el.style.opacity = o.toFixed(3);
  }

  /* position of one figure at time t */
  function figureAt(t, key) {
    const k = POS[key];
    let x = k.start, y = GROUND, s = 1, o = 1, moving = false;

    if (t < T.start) {
      x = k.start;
    } else if (t < T.meet) {
      x = lerp(k.start, k.meet, easeInOut(seg(t, T.start, T.meet)));
      moving = true;
    } else if (t < T.hold) {
      x = k.meet;
    } else if (t < T.door) {
      const p = easeInOut(seg(t, T.hold, T.door));
      x = lerp(k.meet, k.door, p);
      y = lerp(GROUND, DOOR_Y, p);
      s = lerp(1, DOOR_S, p);
      moving = true;
    } else if (t < T.gone) {
      x = k.door; y = DOOR_Y; s = DOOR_S;
      o = 1 - seg(t, T.door, T.gone);
    } else if (t < T.appear) {
      x = k.door; y = DOOR_Y; s = DOOR_S; o = 0;
    } else if (t < T.front) {
      const p = easeInOut(seg(t, T.appear, T.front));
      x = lerp(k.door, k.front, p);
      y = lerp(DOOR_Y, GROUND, p);
      s = lerp(DOOR_S, 1, p);
      o = seg(t, T.appear, T.appear + 500);
      moving = true;
    } else {
      const sway = Math.sin((t - T.front) / 950);
      x = k.front + sway * (key === "bride" ? 4 : -4);
      y = GROUND;
    }

    if (moving) y += Math.sin(t / 155) * 3 * s;
    return { x: x, y: y, s: s, o: o };
  }

  /* --- petals --- */
  function resize() {
    if (!canvas) return;
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cw = r.width; ch = r.height;
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(count) {
    const small = isSmall();
    for (let i = 0; i < count; i++) {
      const left = i % 2 === 0;
      const from = left ? 630 : 970;
      const dir = left ? 1 : -1;
      petals.push({
        x: from + (Math.random() - 0.5) * 230,
        y: 700 + (Math.random() - 0.5) * 120,
        vx: dir * (0.4 + Math.random() * 2.1),
        vy: -(2.4 + Math.random() * 5),
        r: (small ? 3 : 4.5) + Math.random() * 3.5,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.09,
        phase: Math.random() * Math.PI * 2,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        alpha: 0.55 + Math.random() * 0.3
      });
    }
  }

  function drawPetals(t) {
    if (!ctx) return;
    ctx.clearRect(0, 0, cw, ch);
    if (!petals.length) return;

    const k = Math.max(cw / 1600, ch / 900);
    const ox = (cw - 1600 * k) / 2;
    const oy = (ch - 900 * k) / 2;

    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.vy += 0.1;
      p.vx *= 0.995;
      p.x += p.vx + Math.sin(p.phase + t / 320) * 0.9;
      p.y += p.vy;
      p.rot += p.spin;

      if (p.y > 980 || p.x < -160 || p.x > 1760) { petals.splice(i, 1); continue; }

      ctx.save();
      ctx.translate(ox + p.x * k, oy + p.y * k);
      ctx.rotate(p.rot);
      const edge = Math.min(1, Math.min(p.x - 470, 1140 - p.x) / 110);
      ctx.globalAlpha = p.alpha * Math.max(0, edge) * (p.y > 860 ? Math.max(0, 1 - (p.y - 860) / 120) : 1);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r * k, p.r * 0.55 * k, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }

  /* --- frame --- */
  function render(now) {
    let t = now - startedAt;

    if (t > T.loop) {
      startedAt = now;
      t = 0;
      didBurst = false;
      petals.length = 0;
      if (guests) guests.classList.remove("is-cheering");
    }

    const b = figureAt(t, "bride");
    const g = figureAt(t, "groom");
    place(bride, b.x, b.y, b.s, b.o);
    place(groom, g.x, g.y, g.s, g.o);

    let light = 0.12;
    if (t >= T.hold && t < T.door) light = lerp(0.12, 0.92, easeInOut(seg(t, T.hold, T.door)));
    else if (t >= T.door && t < T.appear) light = 0.92 + Math.sin(t / 520) * 0.06;
    else if (t >= T.appear && t < T.front) light = lerp(0.92, 0.45, easeInOut(seg(t, T.appear, T.front)));
    else if (t >= T.front) light = 0.45 + Math.sin(t / 900) * 0.05;

    if (glow) glow.setAttribute("opacity", light.toFixed(3));
    if (spill) spill.setAttribute("opacity", (light * 0.8).toFixed(3));

    if (guests) guests.classList.toggle("is-cheering", t >= T.cheer && t < T.loop - 2000);

    if (t >= T.cheer && !didBurst) {
      spawn(isSmall() ? 18 : 40);
      didBurst = true;
    }
    if (didBurst && t < T.cheer + 4000 && Math.random() < 0.32) {
      spawn(1);
    }

    drawPetals(t);
    rafId = requestAnimationFrame(render);
  }

  function start() {
    if (rafId !== null) return;
    resize();
    startedAt = performance.now();
    didBurst = false;
    petals.length = 0;
    if (guests) guests.classList.remove("is-cheering");
    rafId = requestAnimationFrame(render);
  }

  function stop() {
    if (rafId === null) return;
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  /* the finished picture, for reduced motion */
  function restFinal() {
    const b = figureAt(T.front + 1, "bride");
    const g = figureAt(T.front + 1, "groom");
    place(bride, b.x, b.y, b.s, 1);
    place(groom, g.x, g.y, g.s, 1);
    if (glow) glow.setAttribute("opacity", "0.5");
    if (spill) spill.setAttribute("opacity", "0.4");
    if (guests) guests.classList.add("is-cheering");
  }

  if (prefersReduced.matches) { restFinal(); return; }

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); });

  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !document.hidden) start(); else stop();
      });
    }, { threshold: 0.25 });
    obs.observe(section);
  } else {
    start();
  }

  if (prefersReduced.addEventListener) {
    prefersReduced.addEventListener("change", e => { if (e.matches) { stop(); petals.length = 0; if (ctx) ctx.clearRect(0, 0, cw, ch); restFinal(); } });
  }
}

/* ---------- 10. RSVP form ---------- */
function initRsvp() {
  const form = document.getElementById("rsvpForm");
  if (!form) return;

  const side = document.getElementById("rsvpSide");
  const first = document.getElementById("rsvpFirst");
  const last = document.getElementById("rsvpLast");
  const guestsInput = document.getElementById("rsvpGuests");
  const guestValue = document.getElementById("guestValue");
  const minus = document.getElementById("guestMinus");
  const plus = document.getElementById("guestPlus");
  const submit = document.getElementById("rsvpSubmit");
  const submitLabel = document.getElementById("rsvpSubmitLabel");
  const status = document.getElementById("rsvpStatus");
  const thanks = document.getElementById("rsvpThanks");

  const MIN = 1, MAX = 10;
  let guests = 1;
  let busy = false;

  function paintCounter() {
    if (guestValue) guestValue.textContent = String(guests);
    if (guestsInput) guestsInput.value = String(guests);
    if (minus) minus.disabled = guests <= MIN;
    if (plus) plus.disabled = guests >= MAX;
  }

  function bump(delta) {
    guests = Math.min(MAX, Math.max(MIN, guests + delta));
    paintCounter();
    clearError("errGuests");
  }

  if (minus) minus.addEventListener("click", () => bump(-1));
  if (plus) plus.addEventListener("click", () => bump(1));
  paintCounter();

  function showError(errId, fieldEl, key) {
    const err = document.getElementById(errId);
    if (err) err.textContent = t(key);
    const wrapper = fieldEl ? fieldEl.closest(".field") : (err ? err.closest(".field") : null);
    if (wrapper) wrapper.classList.add("has-error");
  }

  function clearError(errId) {
    const err = document.getElementById(errId);
    if (!err) return;
    err.textContent = "";
    const wrapper = err.closest(".field");
    if (wrapper) wrapper.classList.remove("has-error");
  }

  [[side, "errSide"], [first, "errFirst"], [last, "errLast"]].forEach(pairArr => {
    const el = pairArr[0];
    if (!el) return;
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, () => clearError(pairArr[1]));
  });

  function validate() {
    let ok = true;
    ["errSide", "errFirst", "errLast", "errGuests"].forEach(clearError);

    const allowed = ["bride", "groom", "friends", "other"];
    if (!side || allowed.indexOf(side.value) === -1) { showError("errSide", side, "err.side"); ok = false; }
    if (!first || first.value.trim().length < 2) { showError("errFirst", first, "err.firstName"); ok = false; }
    if (!last || last.value.trim().length < 2) { showError("errLast", last, "err.lastName"); ok = false; }
    if (!(guests >= MIN && guests <= MAX)) { showError("errGuests", null, "err.guests"); ok = false; }

    if (!ok) {
      const firstBad = form.querySelector(".field.has-error .input") || form.querySelector(".field.has-error");
      if (firstBad && firstBad.focus) firstBad.focus({ preventScroll: false });
    }
    return ok;
  }

  async function send(payload) {
    const url = weddingConfig.rsvpEndpoint;
    const configured = typeof url === "string" && /^https?:\/\//.test(url) && url.indexOf("PASTE_") === -1;

    if (!configured) {
      await wait(900);
      return { ok: true, demo: true };
    }

    /* text/plain avoids a CORS preflight that Apps Script cannot answer */
    const options = {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    };

    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json().catch(() => ({ result: "ok" }));
      if (data && data.result === "error") throw new Error(data.message || "rejected");
      return { ok: true };
    } catch (err) {
      try {
        options.mode = "no-cors";
        await fetch(url, options);
        return { ok: true, opaque: true };
      } catch (e) {
        return { ok: false, error: err };
      }
    }
  }

  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (busy) return;
    if (status) { status.textContent = ""; status.classList.remove("is-error"); }
    if (!validate()) return;

    busy = true;
    if (submit) submit.disabled = true;
    if (submitLabel) submitLabel.textContent = t("form.sending");

    const payload = {
      side: side.value,
      firstName: first.value.trim(),
      lastName: last.value.trim(),
      guestCount: guests,
      language: currentLang,
      submittedAt: new Date().toISOString()
    };

    const result = await send(payload);

    if (result.ok) {
      if (submitLabel) submitLabel.textContent = t("form.sent");
      if (submit) submit.classList.add("is-done");
      if (result.demo && status) status.textContent = t("status.demo");

      await wait(750);

      if (thanks) {
        form.hidden = true;
        thanks.hidden = false;
        if (typeof thanks.scrollIntoView === "function") {
          thanks.scrollIntoView({ behavior: prefersReduced.matches ? "auto" : "smooth", block: "center" });
        }
      }
    } else {
      busy = false;
      if (submit) { submit.disabled = false; submit.classList.remove("is-done"); }
      if (submitLabel) submitLabel.textContent = t("form.submit");
      if (status) { status.textContent = t("err.send"); status.classList.add("is-error"); }
    }
  });
}

/* ---------- 11. Boot ---------- */
function boot() {
  const stored = safeStorage("get", STORE_KEY);
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  const initial = SUPPORTED.indexOf(stored) > -1
    ? stored
    : (SUPPORTED.indexOf(browser) > -1 ? browser : "en");

  applyImages();
  setLanguage(initial, false);

  initHeader();
  initMenu();
  initLanguage();
  initNavHighlight();
  initReveals();
  initScenes();
  initCeremonyScene();
  initRsvp();

  const hero = document.getElementById("heroImg");
  if (hero && !hero.complete) {
    hero.addEventListener("load", playIntro, { once: true });
    hero.addEventListener("error", playIntro, { once: true });
    setTimeout(playIntro, 1600);
  } else {
    playIntro();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
