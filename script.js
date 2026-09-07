
const translations = {
  en: {
    nav: { story: "Our Story", ceremony: "Ceremony", reception: "Reception", rsvp: "RSVP" },
    hero: {
      eyebrow: "TOGETHER WITH THEIR FAMILIES",
      subtitle: "invite you to celebrate their wedding",
      cta: "Begin Our Journey",
      scroll: "SCROLL"
    },
    common: {
      yerevanArmenia: "YEREVAN, ARMENIA",
      yerevanArmeniaTitle: "Yerevan, Armenia",
      dateTime: "DATE & TIME",
      location: "LOCATION",
      viewMap: "View on Map ↗"
    },
    story: {
      eyebrow: "OUR STORY",
      title: "Two hearts,<br><em>one journey.</em>",
      p1: "Some stories begin with a grand moment. Ours began simply — with a smile, a conversation, and two people who kept choosing each other.",
      p2: "Now we are beginning our favorite chapter, and we would love to have you beside us.",
      note: "our favorite<br>chapter ♡"
    },
    ceremony: {
      eyebrow: "THE CEREMONY",
      title: "Saint Gregory<br><em>The Illuminator Church</em>",
      datetime: "Saturday, June 14, 2025 · 16:00",
      arrives: "THE COUPLE ARRIVES"
    },
    transition: { quote: "And so the adventure continues…" },
    reception: {
      eyebrow: "THE RECEPTION",
      title: "Grand Hotel<br><em>Yerevan</em>",
      datetime: "Saturday, June 14, 2025 · 19:00",
      dance: "LET'S DANCE"
    },
    schedule: {
      eyebrow: "THE EVENING",
      title: "A day to remember",
      subtitle: "From the first blessing to the last dance.",
      ceremony: "Holy Ceremony",
      churchDesc: "Saint Gregory the Illuminator Church",
      drinks: "Welcome Drinks",
      drinksDesc: "A little toast before dinner",
      dinner: "Dinner & Dancing",
      hotelDesc: "Grand Hotel Yerevan",
      lastDance: "One Last Dance",
      lastDanceDesc: "Until the night becomes a memory"
    },
    gallery: { eyebrow: "A FEW MEMORIES", title: "Love, captured." },
    rsvp: {
      eyebrow: "KINDLY RESPOND",
      title: "Will you join us?",
      intro: "Please tell us who you are coming with so we can prepare a place for everyone we love.",
      sideLabel: "From which part are you coming?",
      familyName: "Family name",
      surname: "Surname",
      guests: "Number of guests",
      messageLabel: "Anything we should know?",
      optional: "(optional)",
      submit: "Confirm attendance",
      familyNamePlaceholder: "Family name",
      surnamePlaceholder: "Surname",
      messagePlaceholder: "Dietary notes, wishes, etc.",
      options: {
        select: "Select family side",
        bride: "Bride's family",
        groom: "Groom's family",
        friends: "Friends",
        other: "Other"
      },
      sending: "Sending…",
      notConfigured: translations[currentLanguage].rsvp.notConfigured,
      genericError: translations[currentLanguage].rsvp.genericError,
      success: "Thank you, {surname}! Your RSVP for {count} {guestWord} was sent successfully.",
      guestSingular: "guest",
      guestPlural: "guests"
    },
    footer: {
      withLove: "With love, Anna & David",
      date: "14 · 06 · 2025 · Yerevan, Armenia"
    },
    emailSubject: "New Wedding RSVP"
  },

  hy: {
    nav: { story: "Մեր պատմությունը", ceremony: "Պսակադրություն", reception: "Հանդիսություն", rsvp: "Մասնակցություն" },
    hero: {
      eyebrow: "ՄԵՐ ԸՆՏԱՆԻՔՆԵՐԻ ՀԵՏ ՄԻԱՍԻՆ",
      subtitle: "սիրով հրավիրում ենք ձեզ կիսելու մեր հարսանիքի ուրախությունը",
      cta: "Սկսել մեր ճանապարհը",
      scroll: "ՈԼՈՐԵԼ"
    },
    common: {
      yerevanArmenia: "ԵՐԵՎԱՆ, ՀԱՅԱՍՏԱՆ",
      yerevanArmeniaTitle: "Երևան, Հայաստան",
      dateTime: "ԱՄՍԱԹԻՎ ԵՎ ԺԱՄ",
      location: "ՎԱՅՐ",
      viewMap: "Դիտել քարտեզի վրա ↗"
    },
    story: {
      eyebrow: "ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ",
      title: "Երկու սիրտ,<br><em>մեկ ճանապարհ։</em>",
      p1: "Որոշ պատմություններ սկսվում են մեծ իրադարձությամբ։ Մերը սկսվեց պարզապես՝ ժպիտով, զրույցով և երկու մարդկանցով, ովքեր շարունակեցին ընտրել միմյանց։",
      p2: "Այժմ սկսում ենք մեր ամենասիրելի գլուխը և շատ կուզենք, որ դուք լինեք մեր կողքին։",
      note: "մեր սիրելի<br>գլուխը ♡"
    },
    ceremony: {
      eyebrow: "ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ",
      title: "Սուրբ Գրիգոր<br><em>Լուսավորիչ եկեղեցի</em>",
      datetime: "Շաբաթ, 14 հունիսի, 2025 · 16:00",
      arrives: "ԶՈՒՅԳԸ ԺԱՄԱՆՈՒՄ Է"
    },
    transition: { quote: "Եվ այսպես շարունակվում է մեր արկածը…" },
    reception: {
      eyebrow: "ՀԱՆԴԻՍՈՒԹՅՈՒՆ",
      title: "Grand Hotel<br><em>Yerevan</em>",
      datetime: "Շաբաթ, 14 հունիսի, 2025 · 19:00",
      dance: "ՊԱՐԵՆՔ"
    },
    schedule: {
      eyebrow: "ԵՐԵԿՈՆ",
      title: "Օր, որը կհիշենք",
      subtitle: "Առաջին օրհնությունից մինչև վերջին պարը։",
      ceremony: "Պսակադրություն",
      churchDesc: "Սուրբ Գրիգոր Լուսավորիչ եկեղեցի",
      drinks: "Ողջույնի խմիչքներ",
      drinksDesc: "Մի փոքր կենաց՝ ընթրիքից առաջ",
      dinner: "Ընթրիք և պար",
      hotelDesc: "Grand Hotel Yerevan",
      lastDance: "Վերջին պարը",
      lastDanceDesc: "Մինչև գիշերը դառնա հիշողություն"
    },
    gallery: { eyebrow: "ՄԻ ՔԱՆԻ ՀԻՇՈՂՈՒԹՅՈՒՆ", title: "Սերը՝ պահված կադրում։" },
    rsvp: {
      eyebrow: "ԽՆԴՐՈՒՄ ԵՆՔ ՊԱՏԱՍԽԱՆԵԼ",
      title: "Կմիանա՞ք մեզ",
      intro: "Խնդրում ենք նշել, թե ում կողմից եք գալիս, որպեսզի կարողանանք տեղ պատրաստել բոլոր սիրելի հյուրերի համար։",
      sideLabel: "Ո՞ւմ կողմից եք գալիս",
      familyName: "Ընտանիքի անուն",
      surname: "Ազգանուն",
      guests: "Հյուրերի քանակ",
      messageLabel: "Կա՞ որևէ բան, որ պետք է իմանանք",
      optional: "(ըստ ցանկության)",
      submit: "Հաստատել մասնակցությունը",
      familyNamePlaceholder: "Ընտանիքի անուն",
      surnamePlaceholder: "Ազգանուն",
      messagePlaceholder: "Սննդային նախընտրություններ, մաղթանքներ և այլն",
      options: {
        select: "Ընտրեք կողմը",
        bride: "Հարսի կողմից",
        groom: "Փեսայի կողմից",
        friends: "Ընկերներ",
        other: "Այլ"
      },
      sending: "Ուղարկվում է…",
      notConfigured: "Formspree-ը դեռ կարգավորված չէ։ index.html-ում փոխարինեք YOUR_FORM_ID-ը։",
      genericError: "Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք կրկին փորձել։",
      success: "Շնորհակալություն, {surname}։ Ձեր պատասխանը {count} {guestWord}-ի համար հաջողությամբ ուղարկվեց։",
      guestSingular: "հյուր",
      guestPlural: "հյուր"
    },
    footer: {
      withLove: "Սիրով՝ Anna & David",
      date: "14 · 06 · 2025 · Երևան, Հայաստան"
    },
    emailSubject: "Նոր հարսանեկան RSVP"
  },

  ru: {
    nav: { story: "Наша история", ceremony: "Церемония", reception: "Банкет", rsvp: "Ответ" },
    hero: {
      eyebrow: "ВМЕСТЕ С НАШИМИ СЕМЬЯМИ",
      subtitle: "приглашаем вас разделить радость нашей свадьбы",
      cta: "Начать наше путешествие",
      scroll: "ЛИСТАЙТЕ"
    },
    common: {
      yerevanArmenia: "ЕРЕВАН, АРМЕНИЯ",
      yerevanArmeniaTitle: "Ереван, Армения",
      dateTime: "ДАТА И ВРЕМЯ",
      location: "МЕСТО",
      viewMap: "Открыть карту ↗"
    },
    story: {
      eyebrow: "НАША ИСТОРИЯ",
      title: "Два сердца,<br><em>один путь.</em>",
      p1: "Некоторые истории начинаются с большого события. Наша началась просто — с улыбки, разговора и двух людей, которые снова и снова выбирали друг друга.",
      p2: "Теперь мы начинаем нашу любимую главу и будем счастливы видеть вас рядом.",
      note: "наша любимая<br>глава ♡"
    },
    ceremony: {
      eyebrow: "ЦЕРЕМОНИЯ",
      title: "Собор Святого Григория<br><em>Просветителя</em>",
      datetime: "Суббота, 14 июня 2025 · 16:00",
      arrives: "ПАРА ПРИБЫВАЕТ"
    },
    transition: { quote: "И наше приключение продолжается…" },
    reception: {
      eyebrow: "БАНКЕТ",
      title: "Grand Hotel<br><em>Yerevan</em>",
      datetime: "Суббота, 14 июня 2025 · 19:00",
      dance: "ТАНЦУЕМ"
    },
    schedule: {
      eyebrow: "ВЕЧЕР",
      title: "День, который запомнится",
      subtitle: "От первого благословения до последнего танца.",
      ceremony: "Венчание",
      churchDesc: "Собор Святого Григория Просветителя",
      drinks: "Приветственные напитки",
      drinksDesc: "Небольшой тост перед ужином",
      dinner: "Ужин и танцы",
      hotelDesc: "Grand Hotel Yerevan",
      lastDance: "Последний танец",
      lastDanceDesc: "Пока ночь не станет воспоминанием"
    },
    gallery: { eyebrow: "НЕСКОЛЬКО ВОСПОМИНАНИЙ", title: "Любовь в кадре." },
    rsvp: {
      eyebrow: "ПРОСИМ ОТВЕТИТЬ",
      title: "Вы будете с нами?",
      intro: "Пожалуйста, укажите, с чьей стороны вы приглашены, чтобы мы могли подготовить место для каждого дорогого гостя.",
      sideLabel: "С чьей стороны вы приходите?",
      familyName: "Имя семьи",
      surname: "Фамилия",
      guests: "Количество гостей",
      messageLabel: "Есть ли что-то, что нам нужно знать?",
      optional: "(необязательно)",
      submit: "Подтвердить участие",
      familyNamePlaceholder: "Имя семьи",
      surnamePlaceholder: "Фамилия",
      messagePlaceholder: "Пожелания, питание и т. д.",
      options: {
        select: "Выберите сторону",
        bride: "Со стороны невесты",
        groom: "Со стороны жениха",
        friends: "Друзья",
        other: "Другое"
      },
      sending: "Отправка…",
      notConfigured: "Formspree еще не настроен. Замените YOUR_FORM_ID в index.html.",
      genericError: "Не удалось отправить ответ. Попробуйте еще раз.",
      success: "Спасибо, {surname}! Ваш ответ на {count} {guestWord} успешно отправлен.",
      guestSingular: "гостя",
      guestPlural: "гостей"
    },
    footer: {
      withLove: "С любовью, Anna & David",
      date: "14 · 06 · 2025 · Ереван, Армения"
    },
    emailSubject: "Новый свадебный RSVP"
  }
};

let currentLanguage = localStorage.getItem("weddingLanguage") || "en";

function getTranslation(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], translations[currentLanguage]);
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getTranslation(el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = getTranslation(el.dataset.i18nHtml);
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = getTranslation(el.dataset.i18nPlaceholder);
    if (value !== undefined) el.placeholder = value;
  });

  const subjectInput = document.getElementById("emailSubject");
  if (subjectInput) subjectInput.value = translations[currentLanguage].emailSubject;

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLanguage = btn.dataset.lang;
    localStorage.setItem("weddingLanguage", currentLanguage);
    applyTranslations();
  });
});

applyTranslations();

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const cursorGlow = document.querySelector(".cursor-glow");

menuToggle?.addEventListener("click", () => {
  const open = header.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-header nav a").forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

/* Reveal sections */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* Subtle desktop cursor glow */
if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", e => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

/*
  CEREMONY STORY:
  0%   -> couple are separated
  35%  -> they move toward one another
  65%  -> they walk toward the church
  100% -> they disappear through the door
*/
const ceremony = document.querySelector(".journey-ceremony");
const ceremonyCouple = document.querySelector(".ceremony-couple");
const bride = document.querySelector(".ceremony-couple .bride");
const groom = document.querySelector(".ceremony-couple .groom");
const churchDoor = document.querySelector(".church-door");
const ceremonyImage = document.querySelector(".ceremony-image");

function clamp(n, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

function progressFor(section) {
  const rect = section.getBoundingClientRect();
  const scrollable = section.offsetHeight - window.innerHeight;
  return clamp(-rect.top / scrollable);
}

function updateCeremony() {
  if (!ceremony) return;
  const p = progressFor(ceremony);

  // Background slowly moves as the visitor progresses.
  ceremonyImage.style.transform = `scale(${1.1 - p * .07})`;

  // Couple begins apart, comes together, then walks into the church.
  const approach = clamp(p / .45);
  const enter = clamp((p - .45) / .55);

  bride.style.left = `${20 + approach * 72 - enter * 42}px`;
  groom.style.left = `${165 - approach * 72 - enter * 42}px`;

  ceremonyCouple.style.transform =
    `translateX(calc(-50% + ${enter * 25}px)) translateY(${enter * 75}px) scale(${1 - enter * .23})`;

  churchDoor.style.opacity = String(.2 + enter * .8);
}

/*
  RECEPTION STORY:
  0%   -> couple arrives
  30%  -> moves together
  50%+ -> dancing begins
*/
const reception = document.querySelector(".journey-reception");
const danceCouple = document.querySelector(".dance-couple");
const receptionImage = document.querySelector(".reception-image");

function updateReception() {
  if (!reception) return;
  const p = progressFor(reception);

  receptionImage.style.transform = `scale(${1.1 - p * .08})`;

  const arrive = clamp(p / .35);
  const dance = clamp((p - .28) / .72);

  danceCouple.style.transform =
    `translateX(calc(-50% + ${(1 - arrive) * 150}px)) rotate(${Math.sin(dance * Math.PI * 6) * 3}deg) scale(${.9 + dance * .1})`;

  // A little alternating dance movement.
  const sway = Math.sin(dance * Math.PI * 8);
  document.querySelector(".dance-bride").style.transform =
    `rotate(${sway * 7}deg) translateY(${Math.abs(sway) * -4}px)`;
  document.querySelector(".dance-groom").style.transform =
    `rotate(${-sway * 5}deg) translateY(${Math.abs(sway) * -3}px)`;
}

let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateCeremony();
      updateReception();
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

/* RSVP guest counter */
const countOutput = document.getElementById("guestCount");
const countInput = document.getElementById("guestCountInput");
let guestCount = 1;

function syncGuestCount() {
  countOutput.textContent = String(guestCount);
  countInput.value = String(guestCount);
}

document.querySelectorAll(".counter button").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "plus") {
      guestCount = Math.min(20, guestCount + 1);
    }

    if (button.dataset.action === "minus") {
      guestCount = Math.max(1, guestCount - 1);
    }

    syncGuestCount();
  });
});

/*
  REAL RSVP EMAIL SUBMISSION WITH FORMSPREE

  1. Create a Formspree account.
  2. Create a new form.
  3. Copy the endpoint, for example:
     https://formspree.io/f/abcdwxyz
  4. Replace YOUR_FORM_ID in index.html with your actual form ID.

  Formspree sends the submission to the email address configured
  for your Formspree form.
*/
const rsvpForm = document.getElementById("rsvpForm");
const formStatus = document.getElementById("formStatus");
const submitButton = rsvpForm?.querySelector('button[type="submit"]');

rsvpForm?.addEventListener("submit", async event => {
  event.preventDefault();

  if (!rsvpForm.checkValidity()) {
    rsvpForm.reportValidity();
    return;
  }

  const endpoint = rsvpForm.action;

  if (endpoint.includes("YOUR_FORM_ID")) {
    formStatus.textContent =
      translations[currentLanguage].rsvp.notConfigured;
    return;
  }

  const originalButtonText = submitButton.innerHTML;

  try {
    submitButton.disabled = true;
    submitButton.textContent = translations[currentLanguage].rsvp.sending;
    formStatus.textContent = "";

    syncGuestCount();

    const formData = new FormData(rsvpForm);

    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      let message = translations[currentLanguage].rsvp.genericError;

      try {
        const result = await response.json();

        if (result?.errors?.length) {
          message = result.errors.map(error => error.message).join(" ");
        }
      } catch (_) {
        // Keep the generic message if Formspree returns a non-JSON error.
      }

      throw new Error(message);
    }

    const submittedSurname =
      document.getElementById("surname").value.trim();

    const guestWord =
      guestCount === 1
        ? translations[currentLanguage].rsvp.guestSingular
        : translations[currentLanguage].rsvp.guestPlural;

    formStatus.textContent = translations[currentLanguage].rsvp.success
      .replace("{surname}", submittedSurname || "")
      .replace("{count}", String(guestCount))
      .replace("{guestWord}", guestWord);

    rsvpForm.reset();
    guestCount = 1;
    syncGuestCount();
  } catch (error) {
    console.error("RSVP submission failed:", error);
    formStatus.textContent =
      error.message || translations[currentLanguage].rsvp.genericError;
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  }
});
