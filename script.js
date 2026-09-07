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
    titleHtml: "Saint Gregory<br><em>The Illuminator Church</em>",
    date: "SAT, JUN 14, 2025",
    time: "16:00",
    location: "Yerevan, Armenia",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Saint+Gregory+the+Illuminator+Cathedral+Yerevan"
  },
  reception: {
    titleHtml: "Grand Hotel Yerevan",
    date: "SAT, JUN 14, 2025",
    time: "19:00",
    location: "Yerevan, Armenia",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Yerevan"
  },
  images: {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=92",
    story: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=92",
    ceremony: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2400&q=92",
    reception: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=92"
  },

  /*
    GOOGLE APPS SCRIPT WEB APP URL
    Deploy apps-script.gs as a Web App and paste the /exec URL here.
  */
  rsvpEndpoint: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"
};

/* =========================================================
   2) TRANSLATIONS
   ========================================================= */
const translations = {
  en: {
    nav: { story: "Our Story", ceremony: "The Ceremony", reception: "The Reception", rsvp: "RSVP" },
    hero: { kicker: "TOGETHER WITH THEIR FAMILIES", invite: "INVITE YOU TO CELEBRATE THEIR WEDDING", note1: "Two hearts.", note2: "One journey.", scroll: "SCROLL" },
    story: { eyebrow: "OUR STORY", title: "How It All<br>Began", text: "From a chance meeting to a lifetime together, our story is one of love, laughter and endless adventures. We can’t wait to continue it with you by our side.", button: "Continue the journey", note: "Same love, new chapter. ♡" },
    ceremony: { kicker: "THE CEREMONY", progressTitle: "SCROLL TO<br>SEE THE JOURNEY", progressChurch: "Church", progressReception: "Reception" },
    reception: { kicker: "THE RECEPTION", note: "Dinner • Music • Dancing" },
    common: { map: "View on Map" },
    rsvp: { title: "RSVP", heading: "Will you join us?", subtitle: "Please let us know if you will be celebrating with us.", sideLabel: "From which side are you coming?", selectPart: "Select side", brideSide: "Bride's side", groomSide: "Groom's side", friends: "Friends", other: "Other", familyName: "Family Name", familyNamePlaceholder: "Enter family name", surname: "Surname", surnamePlaceholder: "Enter surname", count: "Guests", confirm: "Confirm attendance", note: "We can't wait to celebrate with you! ♡", sending: "Sending...", success: "Thank you! Your RSVP was sent successfully.", error: "We couldn't send your RSVP. Please try again.", configure: "Add your Google Apps Script Web App URL in script.js first." }
  },
  hy: {
    nav: { story: "Մեր պատմությունը", ceremony: "Պսակադրություն", reception: "Հանդիսություն", rsvp: "Մասնակցություն" },
    hero: { kicker: "ՄԵՐ ԸՆՏԱՆԻՔՆԵՐԻ ՀԵՏ ՄԻԱՍԻՆ", invite: "ՍԻՐՈՎ ՀՐԱՎԻՐՈՒՄ ԵՆՔ ՁԵԶ ՄԵՐ ՀԱՐՍԱՆԻՔԻՆ", note1: "Երկու սիրտ։", note2: "Մեկ ճանապարհ։", scroll: "ՈԼՈՐԵԼ" },
    story: { eyebrow: "ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ", title: "Ինչպես ամեն ինչ<br>սկսվեց", text: "Պատահական հանդիպումից մինչև միասին անցկացվող մի ամբողջ կյանք՝ մեր պատմությունը սիրո, ծիծաղի և անվերջ արկածների մասին է։ Մենք անհամբեր սպասում ենք այն շարունակել ձեզ հետ միասին։", button: "Շարունակել ճանապարհը", note: "Նույն սերը, նոր գլուխը։ ♡" },
    ceremony: { kicker: "ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ", progressTitle: "ՈԼՈՐԵՔ՝<br>ՃԱՆԱՊԱՐՀԸ ՏԵՍՆԵԼՈՒ ՀԱՄԱՐ", progressChurch: "Եկեղեցի", progressReception: "Հանդիսություն" },
    reception: { kicker: "ՀԱՆԴԻՍՈՒԹՅՈՒՆ", note: "Ընթրիք • Երաժշտություն • Պար" },
    common: { map: "Դիտել քարտեզում" },
    rsvp: { title: "ՄԱՍՆԱԿՑՈՒԹՅՈՒՆ", heading: "Կմիանա՞ք մեզ", subtitle: "Խնդրում ենք տեղեկացնել՝ կմիանա՞ք մեր տոնակատարությանը։", sideLabel: "Ո՞ւմ կողմից եք գալիս", selectPart: "Ընտրեք կողմը", brideSide: "Հարսի կողմից", groomSide: "Փեսայի կողմից", friends: "Ընկերներ", other: "Այլ", familyName: "Ընտանիքի անուն", familyNamePlaceholder: "Մուտքագրեք ընտանիքի անունը", surname: "Ազգանուն", surnamePlaceholder: "Մուտքագրեք ազգանունը", count: "Հյուրերի քանակ", confirm: "Հաստատել մասնակցությունը", note: "Անհամբեր սպասում ենք ձեզ հետ տոնելուն։ ♡", sending: "Ուղարկվում է...", success: "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։", error: "Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք կրկին փորձել։", configure: "Նախ script.js-ում ավելացրեք Google Apps Script Web App URL-ը։" }
  },
  ru: {
    nav: { story: "Наша история", ceremony: "Церемония", reception: "Банкет", rsvp: "Ответ" },
    hero: { kicker: "ВМЕСТЕ С НАШИМИ СЕМЬЯМИ", invite: "ПРИГЛАШАЕМ ВАС РАЗДЕЛИТЬ РАДОСТЬ НАШЕЙ СВАДЬБЫ", note1: "Два сердца.", note2: "Один путь.", scroll: "ЛИСТАЙТЕ" },
    story: { eyebrow: "НАША ИСТОРИЯ", title: "Как всё<br>началось", text: "От случайной встречи до целой жизни вместе — наша история наполнена любовью, смехом и бесконечными приключениями. Мы будем счастливы продолжить её рядом с вами.", button: "Продолжить путь", note: "Та же любовь, новая глава. ♡" },
    ceremony: { kicker: "ЦЕРЕМОНИЯ", progressTitle: "ЛИСТАЙТЕ,<br>ЧТОБЫ УВИДЕТЬ ПУТЬ", progressChurch: "Церковь", progressReception: "Банкет" },
    reception: { kicker: "БАНКЕТ", note: "Ужин • Музыка • Танцы" },
    common: { map: "Открыть карту" },
    rsvp: { title: "ОТВЕТ", heading: "Вы будете с нами?", subtitle: "Пожалуйста, сообщите, будете ли вы праздновать вместе с нами.", sideLabel: "С чьей стороны вы приходите?", selectPart: "Выберите сторону", brideSide: "Со стороны невесты", groomSide: "Со стороны жениха", friends: "Друзья", other: "Другое", familyName: "Имя семьи", familyNamePlaceholder: "Введите имя семьи", surname: "Фамилия", surnamePlaceholder: "Введите фамилию", count: "Количество гостей", confirm: "Подтвердить участие", note: "Не можем дождаться, чтобы отпраздновать с вами! ♡", sending: "Отправка...", success: "Спасибо! Ваш ответ успешно отправлен.", error: "Не удалось отправить ответ. Пожалуйста, попробуйте еще раз.", configure: "Сначала добавьте URL Google Apps Script Web App в script.js." }
  }
};

let currentLang = localStorage.getItem("wedding-language") || "en";
let isSubmitting = false;
let iframeLoadedAfterSubmit = false;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const on = (el, event, handler, options) => { if (el) el.addEventListener(event, handler, options); };
const setText = (el, value) => { if (el && value != null) el.textContent = value; };
const setHtml = (el, value) => { if (el && value != null) el.innerHTML = value; };

function applyConfig() {
  const c = weddingConfig;
  document.title = `${c.couple.brideName} & ${c.couple.groomName} — Wedding Invitation`;

  const bindings = {
    brideName: c.couple.brideName,
    groomName: c.couple.groomName,
    brideInitial: c.couple.brideInitial,
    groomInitial: c.couple.groomInitial,
    dayShort: c.wedding.dayShort,
    dayNumber: c.wedding.dayNumber,
    monthYear: c.wedding.monthYear,
    city: c.wedding.city,
    ceremonyDate: c.ceremony.date,
    ceremonyTime: c.ceremony.time,
    ceremonyLocation: c.ceremony.location,
    receptionDate: c.reception.date,
    receptionTime: c.reception.time,
    receptionLocation: c.reception.location
  };

  Object.entries(bindings).forEach(([key, value]) => $$(`[data-bind="${key}"]`).forEach(el => el.textContent = value));

  setHtml($("#ceremonyTitle"), c.ceremony.titleHtml);
  setHtml($("#receptionTitle"), c.reception.titleHtml);
  const ceremonyMap = $("#ceremonyMap");
  const receptionMap = $("#receptionMap");
  const heroMedia = $("#heroMedia");
  const storyImage = $("#storyImage");
  const ceremonyMedia = $("#ceremonyMedia");
  const receptionMedia = $("#receptionMedia");
  if (ceremonyMap) ceremonyMap.href = c.ceremony.mapUrl;
  if (receptionMap) receptionMap.href = c.reception.mapUrl;
  if (heroMedia) heroMedia.style.backgroundImage = `url("${c.images.hero}")`;
  if (storyImage) storyImage.src = c.images.story;
  if (ceremonyMedia) ceremonyMedia.style.backgroundImage = `url("${c.images.ceremony}")`;
  if (receptionMedia) receptionMedia.style.backgroundImage = `url("${c.images.reception}")`;
}

function getTranslation(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], translations[currentLang]);
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("wedding-language", lang);
  document.documentElement.lang = lang;
  const languageTrigger = $("#languageTrigger");
  const formLanguage = $("#formLanguage");
  if (languageTrigger?.firstChild) languageTrigger.firstChild.nodeValue = `${lang.toUpperCase()} `;
  if (formLanguage) formLanguage.value = lang;

  $$('[data-i18n]').forEach(el => {
    const value = getTranslation(el.dataset.i18n);
    if (value != null) el.textContent = value;
  });
  $$('[data-i18n-html]').forEach(el => {
    const value = getTranslation(el.dataset.i18nHtml);
    if (value != null) el.innerHTML = value;
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const value = getTranslation(el.dataset.i18nPlaceholder);
    if (value != null) el.placeholder = value;
  });
}

function setupNavigation() {
  const header = $("#siteHeader");
  const menuToggle = $("#menuToggle");
  const mobileNav = $("#mobileNav");
  const languageTrigger = $("#languageTrigger");
  const languageMenu = $("#languageMenu");

  on(menuToggle, "click", () => {
    if (!mobileNav) return;
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  if (mobileNav) {
    $$("a", mobileNav).forEach(a => on(a, "click", () => {
      mobileNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }));
  }

  on(languageTrigger, "click", (e) => {
    e.stopPropagation();
    if (!languageMenu) return;
    const open = languageMenu.classList.toggle("open");
    languageTrigger.setAttribute("aria-expanded", String(open));
  });

  $$('[data-lang]').forEach(button => on(button, "click", () => {
    applyLanguage(button.dataset.lang);
    languageMenu?.classList.remove("open");
    languageTrigger?.setAttribute("aria-expanded", "false");
  }));

  on(document, "click", () => {
    languageMenu?.classList.remove("open");
    languageTrigger?.setAttribute("aria-expanded", "false");
  });

  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 18);
  onScroll();
  on(window, "scroll", onScroll, { passive: true });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .16 });
  $$(".reveal-up").forEach(el => observer.observe(el));
}

function setupScrollMotion() {
  const hero = $("#heroMedia");
  const ceremony = $("#ceremonyMedia");
  const reception = $("#receptionMedia");
  const progress = $("#pageProgress");
  const journeyFill = $("#journeyFill");
  const ceremonySection = $("#ceremony");
  const receptionSection = $("#reception");

  let ticking = false;
  const render = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    if (hero) hero.style.transform = `translate3d(0, ${Math.min(y * .12, 75)}px, 0) scale(1.07)`;

    [[ceremonySection, ceremony], [receptionSection, reception]].forEach(([section, media]) => {
      if (!section || !media) return;
      const rect = section.getBoundingClientRect();
      const centerOffset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
      const amount = Math.max(-70, Math.min(70, centerOffset * .08));
      media.style.transform = `translate3d(0, ${amount}px, 0) scale(1.08)`;
    });

    if (ceremonySection && journeyFill) {
      const cRect = ceremonySection.getBoundingClientRect();
      const raw = (window.innerHeight - cRect.top) / (window.innerHeight + cRect.height);
      const p = Math.max(0, Math.min(1, raw));
      journeyFill.style.height = `${p * 100}%`;
    }
    ticking = false;
  };

  const requestRender = () => {
    if (!ticking) {
      requestAnimationFrame(render);
      ticking = true;
    }
  };

  render();
  on(window, "scroll", requestRender, { passive: true });
  on(window, "resize", requestRender);
}

function setupRsvp() {
  const form = $("#rsvpForm");
  const count = $("#guestCount");
  const status = $("#formStatus");
  const submitButton = $("#submitButton");
  const frame = $("#rsvpFrame");
  const minus = $("#guestMinus");
  const plus = $("#guestPlus");

  if (!form || !count || !status || !submitButton) return;

  on(minus, "click", () => count.value = Math.max(1, Number(count.value) - 1));
  on(plus, "click", () => count.value = Math.min(12, Number(count.value) + 1));

  on(frame, "load", () => {
    if (!isSubmitting || !iframeLoadedAfterSubmit) return;
    isSubmitting = false;
    iframeLoadedAfterSubmit = false;
    submitButton.disabled = false;
    setText(submitButton.querySelector("span"), getTranslation("rsvp.confirm"));
    status.className = "form-status success";
    status.textContent = getTranslation("rsvp.success");
    form.reset();
    count.value = 1;
    const formLanguage = $("#formLanguage");
    if (formLanguage) formLanguage.value = currentLang;
  });

  on(form, "submit", (event) => {
    status.className = "form-status";
    status.textContent = "";

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    if (!weddingConfig.rsvpEndpoint || weddingConfig.rsvpEndpoint.includes("PASTE_YOUR")) {
      event.preventDefault();
      status.className = "form-status error";
      status.textContent = getTranslation("rsvp.configure");
      return;
    }

    form.action = weddingConfig.rsvpEndpoint;
    isSubmitting = true;
    iframeLoadedAfterSubmit = true;
    submitButton.disabled = true;
    setText(submitButton.querySelector("span"), getTranslation("rsvp.sending"));

    window.setTimeout(() => {
      if (isSubmitting) {
        isSubmitting = false;
        submitButton.disabled = false;
        setText(submitButton.querySelector("span"), getTranslation("rsvp.confirm"));
        status.className = "form-status error";
        status.textContent = getTranslation("rsvp.error");
      }
    }, 12000);
  });
}

function initWeddingSite() {
  applyConfig();
  applyLanguage(currentLang);
  setupNavigation();
  setupRevealAnimations();
  setupScrollMotion();
  setupRsvp();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initWeddingSite, { once: true });
} else {
  initWeddingSite();
}
