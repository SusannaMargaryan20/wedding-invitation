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
    ceremony: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80",
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
    "form.family": "Family name",
    "form.familyPh": "Margaryan",
    "form.surname": "First name",
    "form.surnamePh": "Susanna",
    "form.guests": "Guests",
    "form.guestsMore": "Add a guest",
    "form.guestsLess": "Remove a guest",
    "form.submit": "Confirm attendance",
    "form.sending": "Sending…",
    "form.sent": "Sent ✓",

    "err.side": "Choose which side you're joining from.",
    "err.family": "Add your family name.",
    "err.surname": "Add your first name.",
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
    "form.family": "Ազգանուն",
    "form.familyPh": "Մարգարյան",
    "form.surname": "Անուն",
    "form.surnamePh": "Սուսաննա",
    "form.guests": "Հյուրեր",
    "form.guestsMore": "Ավելացնել հյուր",
    "form.guestsLess": "Պակասեցնել հյուրին",
    "form.submit": "Հաստատել մասնակցությունը",
    "form.sending": "Ուղարկվում է…",
    "form.sent": "Ուղարկված է ✓",

    "err.side": "Նշեք, թե որ կողմից եք։",
    "err.family": "Լրացրեք ազգանունը։",
    "err.surname": "Լրացրեք անունը։",
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
    "form.family": "Фамилия",
    "form.familyPh": "Маргарян",
    "form.surname": "Имя",
    "form.surnamePh": "Сусанна",
    "form.guests": "Гости",
    "form.guestsMore": "Добавить гостя",
    "form.guestsLess": "Убрать гостя",
    "form.submit": "Подтвердить участие",
    "form.sending": "Отправляем…",
    "form.sent": "Отправлено ✓",

    "err.side": "Укажите, с чьей вы стороны.",
    "err.family": "Введите фамилию.",
    "err.surname": "Введите имя.",
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
    ["ceremonyImg", weddingConfig.images.ceremony],
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

  const stage = document.getElementById("ceremonyStage");
  const pair = document.getElementById("ceremonyPair");
  const bride = document.getElementById("ceremonyBride");
  const groom = document.getElementById("ceremonyGroom");
  const church = document.getElementById("stageChurch");
  const glow = document.getElementById("stageGlow");

  const dStage = document.getElementById("receptionStage");
  const dPair = document.getElementById("receptionPair");
  const dBride = document.getElementById("danceBride");
  const dGroom = document.getElementById("danceGroom");

  const rail = document.getElementById("journey");
  const fill = document.getElementById("journeyFill");
  const fillInline = document.getElementById("journeyFillInline");
  const node2 = document.getElementById("journeyNodeInline2");
  const railNodes = rail ? $$(".journey__node", rail) : [];

  const botanical = document.getElementById("storyBotanical");
  const story = document.getElementById("story");

  /* static, complete layout when motion is reduced */
  function restStatic() {
    if (pair) { pair.style.transform = "translate3d(-50%,0,0)"; pair.style.opacity = "1"; }
    if (bride) bride.style.transform = "translate3d(calc(-50% - 70px),0,0)";
    if (groom) groom.style.transform = "translate3d(calc(-50% + 70px),0,0)";
    if (dPair) { dPair.style.transform = "translate3d(-50%,0,0)"; dPair.style.opacity = "1"; }
    if (dBride) dBride.style.transform = "translate3d(calc(-50% - 22px),0,0)";
    if (dGroom) dGroom.style.transform = "translate3d(calc(-50% + 22px),0,0)";
    if (glow) glow.style.opacity = "0.35";
    if (fill) fill.style.transform = "scaleY(1)";
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

    /* --- ceremony: walk toward each other, then into the church --- */
    if (ceremony && stage && pair && bride && groom) {
      const r = ceremony.getBoundingClientRect();
      const active = r.bottom > -240 && r.top < vh + 240;
      if (active) {
        const p = clamp01((vh - r.top) / (vh + r.height));
        const width = stage.offsetWidth || vh;

        const approach = easeInOut(clamp01((p - 0.10) / 0.30));   // phase 1 + 2
        const walk = easeInOut(clamp01((p - 0.46) / 0.32));       // phase 3 + 4
        const fade = easeInOut(clamp01((p - 0.72) / 0.20));       // phase 5

        const spread = width * (small ? 0.24 : 0.30);
        const rest = small ? 15 : 26;
        const step = small ? 0 : Math.sin(now / 340) * 2.2 * (1 - approach);

        const bx = -(spread * (1 - approach) + rest);
        const gx = (spread * (1 - approach) + rest);

        bride.style.transform = "translate3d(calc(-50% + " + bx.toFixed(1) + "px)," + step.toFixed(2) + "px,0)";
        groom.style.transform = "translate3d(calc(-50% + " + gx.toFixed(1) + "px)," + (-step).toFixed(2) + "px,0)";

        const lift = -walk * (small ? 46 : 96);
        const scale = 1 - walk * (small ? 0.5 : 0.62);
        pair.style.transform = "translate3d(-50%," + lift.toFixed(1) + "px,0) scale(" + scale.toFixed(3) + ")";
        pair.style.opacity = (1 - fade).toFixed(3);

        if (glow) glow.style.opacity = (walk * 0.85 * (0.35 + fade * 0.65)).toFixed(3);
        if (church) church.style.opacity = (0.35 + walk * 0.65).toFixed(3);
      }
    }

    /* --- journey progress: church → reception --- */
    if (ceremony && reception) {
      const cr = ceremony.getBoundingClientRect();
      const rr = reception.getBoundingClientRect();
      const start = cr.top - vh * 0.35;
      const span = (rr.top - cr.top) + rr.height * 0.4;
      const jp = clamp01(-start / (span || 1));

      if (fill) fill.style.transform = "scaleY(" + jp.toFixed(3) + ")";
      if (fillInline) fillInline.style.transform = (isCompact() ? "scaleX(" : "scaleY(") + jp.toFixed(3) + ")";
      if (node2) node2.classList.toggle("is-active", jp > 0.55);
      if (railNodes.length === 2) railNodes[1].classList.toggle("is-active", jp > 0.55);

      if (rail) {
        const visible = cr.top < vh * 0.5 && rr.bottom > vh * 0.4;
        rail.classList.toggle("is-visible", visible);
      }
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

/* ---------- 10. RSVP form ---------- */
function initRsvp() {
  const form = document.getElementById("rsvpForm");
  if (!form) return;

  const side = document.getElementById("rsvpSide");
  const family = document.getElementById("rsvpFamily");
  const surname = document.getElementById("rsvpSurname");
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

  [[side, "errSide"], [family, "errFamily"], [surname, "errSurname"]].forEach(pairArr => {
    const el = pairArr[0];
    if (!el) return;
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, () => clearError(pairArr[1]));
  });

  function validate() {
    let ok = true;
    ["errSide", "errFamily", "errSurname", "errGuests"].forEach(clearError);

    const allowed = ["bride", "groom", "friends", "other"];
    if (!side || allowed.indexOf(side.value) === -1) { showError("errSide", side, "err.side"); ok = false; }
    if (!family || family.value.trim().length < 2) { showError("errFamily", family, "err.family"); ok = false; }
    if (!surname || surname.value.trim().length < 2) { showError("errSurname", surname, "err.surname"); ok = false; }
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
      familyName: family.value.trim(),
      surname: surname.value.trim(),
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
