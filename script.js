/* =========================================================
   GENERAL WEBSITE SETTINGS
   Change names, initials, dates, venues, images and Formspree here.
   ========================================================= */

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
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Saint+Gregory+the+Illuminator+Cathedral+Yerevan"
  },

  reception: {
    titleHtml: "Grand Hotel Yerevan",
    date: "SAT, JUN 14, 2025",
    time: "19:00",
    location: "Yerevan, Armenia",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Yerevan"
  },

  images: {
    hero:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",

    story:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90",

    ceremony:
      "https://images.unsplash.com/photo-1548625361-1f2a9a7e1d6b?auto=format&fit=crop&w=2200&q=90",

    reception:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2200&q=90"
  },

  // Create a Formspree form and replace YOUR_FORM_ID.
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
};

/* =========================================================
   ALL TRANSLATABLE WEBSITE TEXT
   ========================================================= */

const translations = {
  en: {
    nav: {
      story: "Our Story",
      ceremony: "The Ceremony",
      reception: "The Reception",
      rsvp: "RSVP"
    },

    hero: {
      kicker: "TOGETHER WITH THEIR FAMILIES",
      invite: "INVITE YOU TO CELEBRATE THEIR WEDDING",
      day: "SAT",
      noteLine1: "Two hearts.",
      noteLine2: "One journey.",
      scroll: "SCROLL"
    },

    story: {
      eyebrow: "OUR STORY",
      title: "How It All<br>Began",
      text:
        "From a chance meeting to a lifetime together, our story is one of love, laughter and endless adventures. We can’t wait to continue it with you by our side.",
      button: "Our Story",
      note1: "Same",
      note2: "love,",
      note3: "new",
      note4: "chapter."
    },

    ceremony: {
      kicker: "THE CEREMONY",
      progressTitle: "SCROLL TO<br>SEE THE JOURNEY",
      progressChurch: "Church",
      progressReception: "Reception"
    },

    reception: {
      kicker: "THE RECEPTION"
    },

    common: {
      map: "View on Map"
    },

    rsvp: {
      title: "RSVP",
      subtitle: "Please let us know if you will be joining us",
      sideLabel: "From which part are you coming?",
      selectPart: "Select part",
      brideSide: "Bride's side",
      groomSide: "Groom's side",
      friends: "Friends",
      other: "Other",
      familyName: "Family Name",
      familyNamePlaceholder: "Enter family name",
      surname: "Surname",
      surnamePlaceholder: "Enter surname",
      count: "Count",
      confirm: "Confirm",
      note1: "We can't wait",
      note2: "to celebrate with you!",
      sending: "Sending...",
      formNotConfigured:
        "Formspree is not configured yet. Replace YOUR_FORM_ID in script.js.",
      error: "We couldn't send your RSVP. Please try again.",
      success:
        "Thank you, {surname}! Your RSVP for {count} {guestWord} was sent successfully.",
      guest: "guest",
      guests: "guests"
    },

    emailSubject: "New Wedding RSVP"
  },

  hy: {
    nav: {
      story: "Մեր պատմությունը",
      ceremony: "Պսակադրություն",
      reception: "Հանդիսություն",
      rsvp: "Մասնակցություն"
    },

    hero: {
      kicker: "ՄԵՐ ԸՆՏԱՆԻՔՆԵՐԻ ՀԵՏ ՄԻԱՍԻՆ",
      invite: "ՍԻՐՈՎ ՀՐԱՎԻՐՈՒՄ ԵՆՔ ՁԵԶ ՄԵՐ ՀԱՐՍԱՆԻՔԻՆ",
      day: "ՇԲԹ",
      noteLine1: "Երկու սիրտ։",
      noteLine2: "Մեկ ճանապարհ։",
      scroll: "ՈԼՈՐԵԼ"
    },

    story: {
      eyebrow: "ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ",
      title: "Ինչպես ամեն ինչ<br>սկսվեց",
      text:
        "Պատահական հանդիպումից մինչև միասին անցկացվող մի ամբողջ կյանք՝ մեր պատմությունը սիրո, ծիծաղի և անվերջ արկածների մասին է։ Մենք անհամբեր սպասում ենք այն շարունակել ձեզ հետ միասին։",
      button: "Մեր պատմությունը",
      note1: "Նույն",
      note2: "սերը,",
      note3: "նոր",
      note4: "գլուխը։"
    },

    ceremony: {
      kicker: "ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ",
      progressTitle: "ՈԼՈՐԵՔ՝<br>ՃԱՆԱՊԱՐՀԸ ՏԵՍՆԵԼՈՒ ՀԱՄԱՐ",
      progressChurch: "Եկեղեցի",
      progressReception: "Հանդիսություն"
    },

    reception: {
      kicker: "ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
    },

    common: {
      map: "Դիտել քարտեզում"
    },

    rsvp: {
      title: "ՄԱՍՆԱԿՑՈՒԹՅՈՒՆ",
      subtitle: "Խնդրում ենք տեղեկացնել՝ կմիանա՞ք մեզ",
      sideLabel: "Ո՞ւմ կողմից եք գալիս",
      selectPart: "Ընտրեք կողմը",
      brideSide: "Հարսի կողմից",
      groomSide: "Փեսայի կողմից",
      friends: "Ընկերներ",
      other: "Այլ",
      familyName: "Ընտանիքի անուն",
      familyNamePlaceholder: "Մուտքագրեք ընտանիքի անունը",
      surname: "Ազգանուն",
      surnamePlaceholder: "Մուտքագրեք ազգանունը",
      count: "Քանակ",
      confirm: "Հաստատել",
      note1: "Անհամբեր սպասում ենք",
      note2: "ձեզ հետ տոնելուն։",
      sending: "Ուղարկվում է...",
      formNotConfigured:
        "Formspree-ը դեռ կարգավորված չէ։ script.js-ում փոխարինեք YOUR_FORM_ID-ը։",
      error: "Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք կրկին փորձել։",
      success:
        "Շնորհակալություն, {surname}։ Ձեր պատասխանը {count} {guestWord}-ի համար հաջողությամբ ուղարկվեց։",
      guest: "հյուր",
      guests: "հյուր"
    },

    emailSubject: "Նոր հարսանեկան RSVP"
  },

  ru: {
    nav: {
      story: "Наша история",
      ceremony: "Церемония",
      reception: "Банкет",
      rsvp: "Ответ"
    },

    hero: {
      kicker: "ВМЕСТЕ С НАШИМИ СЕМЬЯМИ",
      invite: "ПРИГЛАШАЕМ ВАС РАЗДЕЛИТЬ РАДОСТЬ НАШЕЙ СВАДЬБЫ",
      day: "СБ",
      noteLine1: "Два сердца.",
      noteLine2: "Один путь.",
      scroll: "ЛИСТАЙТЕ"
    },

    story: {
      eyebrow: "НАША ИСТОРИЯ",
      title: "Как всё<br>началось",
      text:
        "От случайной встречи до целой жизни вместе — наша история наполнена любовью, смехом и бесконечными приключениями. Мы будем счастливы продолжить её рядом с вами.",
      button: "Наша история",
      note1: "Та же",
      note2: "любовь,",
      note3: "новая",
      note4: "глава."
    },

    ceremony: {
      kicker: "ЦЕРЕМОНИЯ",
      progressTitle: "ЛИСТАЙТЕ,<br>ЧТОБЫ УВИДЕТЬ ПУТЬ",
      progressChurch: "Церковь",
      progressReception: "Банкет"
    },

    reception: {
      kicker: "БАНКЕТ"
    },

    common: {
      map: "Открыть карту"
    },

    rsvp: {
      title: "ОТВЕТ",
      subtitle: "Пожалуйста, сообщите нам, будете ли вы с нами",
      sideLabel: "С чьей стороны вы приходите?",
      selectPart: "Выберите сторону",
      brideSide: "Со стороны невесты",
      groomSide: "Со стороны жениха",
      friends: "Друзья",
      other: "Другое",
      familyName: "Имя семьи",
      familyNamePlaceholder: "Введите имя семьи",
      surname: "Фамилия",
      surnamePlaceholder: "Введите фамилию",
      count: "Количество",
      confirm: "Подтвердить",
      note1: "Не можем дождаться,",
      note2: "чтобы отпраздновать с вами!",
      sending: "Отправка...",
      formNotConfigured:
        "Formspree еще не настроен. Замените YOUR_FORM_ID в script.js.",
      error: "Не удалось отправить ответ. Пожалуйста, попробуйте еще раз.",
      success:
        "Спасибо, {surname}! Ваш ответ для {count} {guestWord} успешно отправлен.",
      guest: "гостя",
      guests: "гостей"
    },

    emailSubject: "Новый свадебный RSVP"
  }
};

/* =========================================================
   CONFIG BINDING
   ========================================================= */

function applyGeneralConfig() {
  const config = weddingConfig;

  document.title = `${config.couple.brideName} & ${config.couple.groomName} — Wedding Invitation`;

  document.getElementById("logoInitialOne").textContent =
    config.couple.brideInitial;

  document.getElementById("logoInitialTwo").textContent =
    config.couple.groomInitial;

  document.getElementById("heroBrideName").textContent =
    config.couple.brideName;

  document.getElementById("heroGroomName").textContent =
    config.couple.groomName;

  document.getElementById("heroDateNumber").textContent =
    config.wedding.dayNumber;

  document.getElementById("heroMonthYear").textContent =
    config.wedding.monthYear;

  document.getElementById("heroLocation").textContent =
    config.wedding.city;

  document.getElementById("ceremonyTitle").innerHTML =
    config.ceremony.titleHtml;

  document.getElementById("ceremonyDate").textContent =
    config.ceremony.date;

  document.getElementById("ceremonyTime").textContent =
    config.ceremony.time;

  document.getElementById("ceremonyLocation").textContent =
    config.ceremony.location;

  document.getElementById("ceremonyMap").href =
    config.ceremony.mapUrl;

  document.getElementById("receptionTitle").innerHTML =
    config.reception.titleHtml;

  document.getElementById("receptionDate").textContent =
    config.reception.date;

  document.getElementById("receptionTime").textContent =
    config.reception.time;

  document.getElementById("receptionLocation").textContent =
    config.reception.location;

  document.getElementById("receptionMap").href =
    config.reception.mapUrl;

  document.getElementById("heroBackground").style.backgroundImage =
    `url("${config.images.hero}")`;

  document.getElementById("storyImage").src =
    config.images.story;

  document.getElementById("ceremonyBackground").style.backgroundImage =
    `url("${config.images.ceremony}")`;

  document.getElementById("receptionBackground").style.backgroundImage =
    `url("${config.images.reception}")`;

  document.getElementById("rsvpForm").action =
    config.formspreeEndpoint;
}

/* =========================================================
   TRANSLATIONS
   ========================================================= */

let currentLanguage =
  localStorage.getItem("wedding-language") || "en";

function translationValue(path) {
  return path
    .split(".")
    .reduce(
      (current, key) => current?.[key],
      translations[currentLanguage]
    );
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translationValue(element.dataset.i18n);

    if (value !== undefined) {
      element.textContent = value;
    }
  });

  document
    .querySelectorAll("[data-i18n-html]")
    .forEach((element) => {
      const value = translationValue(element.dataset.i18nHtml);

      if (value !== undefined) {
        element.innerHTML = value;
      }
    });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach((element) => {
      const value =
        translationValue(
          element.dataset.i18nPlaceholder
        );

      if (value !== undefined) {
        element.placeholder = value;
      }
    });

  document.getElementById("languageCurrent").textContent =
    currentLanguage.toUpperCase();

  document.getElementById("emailSubject").value =
    translations[currentLanguage].emailSubject;
}

/* =========================================================
   HEADER / MENUS
   ========================================================= */

const siteHeader =
  document.getElementById("siteHeader");

const language =
  document.querySelector(".language");

const languageCurrent =
  document.getElementById("languageCurrent");

const mobileMenuButton =
  document.getElementById("mobileMenuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

window.addEventListener(
  "scroll",
  () => {
    siteHeader.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );
  },
  { passive: true }
);

languageCurrent.addEventListener("click", () => {
  language.classList.toggle("open");
});

document
  .querySelectorAll("[data-lang]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage =
        button.dataset.lang;

      localStorage.setItem(
        "wedding-language",
        currentLanguage
      );

      applyTranslations();
      language.classList.remove("open");
    });
  });

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document
  .querySelectorAll(".mobile-menu a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

document.addEventListener("click", (event) => {
  if (!language.contains(event.target)) {
    language.classList.remove("open");
  }
});

/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

const revealObserver =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.16
    }
  );

document
  .querySelectorAll(".reveal")
  .forEach((element) => {
    revealObserver.observe(element);
  });

/* =========================================================
   CEREMONY SCROLL ANIMATION
   Couple comes closer and enters the church.
   ========================================================= */

const ceremonySection =
  document.getElementById("ceremony");

const walkingCouple =
  document.getElementById("walkingCouple");

function sectionProgress(section) {
  const rect =
    section.getBoundingClientRect();

  const viewportHeight =
    window.innerHeight;

  return Math.min(
    1,
    Math.max(
      0,
      (viewportHeight - rect.top) /
        (viewportHeight + rect.height)
    )
  );
}

function animateCeremony() {
  const progress =
    sectionProgress(ceremonySection);

  const entrance =
    Math.min(
      1,
      Math.max(
        0,
        (progress - .18) / .68
      )
    );

  const scale =
    1 - entrance * .48;

  const translateY =
    entrance * 112;

  walkingCouple.style.transform =
    `translateX(-50%) translateY(${translateY}px) scale(${scale})`;

  walkingCouple.style.opacity =
    String(
      1 - Math.max(0, entrance - .75) * 3.7
    );
}

/* =========================================================
   RECEPTION DANCE ANIMATION
   Couple gently dances based on scroll position.
   ========================================================= */

const receptionSection =
  document.getElementById("reception");

const danceCouple =
  document.getElementById("danceCouple");

function animateReception() {
  const progress =
    sectionProgress(receptionSection);

  const angle =
    Math.sin(progress * Math.PI * 6) * 4;

  const moveX =
    Math.sin(progress * Math.PI * 3) * 8;

  const moveY =
    Math.abs(
      Math.sin(progress * Math.PI * 5)
    ) * -4;

  danceCouple.style.transform =
    `translateX(calc(-50% + ${moveX}px)) translateY(${moveY}px) rotate(${angle}deg)`;
}

let scrollTicking = false;

function handleScrollAnimations() {
  if (scrollTicking) {
    return;
  }

  scrollTicking = true;

  requestAnimationFrame(() => {
    animateCeremony();
    animateReception();

    scrollTicking = false;
  });
}

window.addEventListener(
  "scroll",
  handleScrollAnimations,
  { passive: true }
);

window.addEventListener(
  "resize",
  handleScrollAnimations
);

/* =========================================================
   RSVP COUNTER
   ========================================================= */

let guestCount = 1;

const guestCountOutput =
  document.getElementById("guestCount");

const guestCountInput =
  document.getElementById("guestCountInput");

function updateGuestCount() {
  guestCountOutput.textContent =
    String(guestCount);

  guestCountInput.value =
    String(guestCount);
}

document
  .getElementById("guestMinus")
  .addEventListener("click", () => {
    guestCount =
      Math.max(1, guestCount - 1);

    updateGuestCount();
  });

document
  .getElementById("guestPlus")
  .addEventListener("click", () => {
    guestCount =
      Math.min(20, guestCount + 1);

    updateGuestCount();
  });

/* =========================================================
   FORMSPREE RSVP
   ========================================================= */

const rsvpForm =
  document.getElementById("rsvpForm");

const rsvpSubmit =
  document.getElementById("rsvpSubmit");

const rsvpStatus =
  document.getElementById("rsvpStatus");

rsvpForm.addEventListener(
  "submit",
  async (event) => {
    event.preventDefault();

    if (!rsvpForm.checkValidity()) {
      rsvpForm.reportValidity();
      return;
    }

    if (
      weddingConfig.formspreeEndpoint.includes(
        "YOUR_FORM_ID"
      )
    ) {
      rsvpStatus.textContent =
        translations[
          currentLanguage
        ].rsvp.formNotConfigured;

      return;
    }

    const originalButton =
      rsvpSubmit.innerHTML;

    const surname =
      document
        .getElementById("surname")
        .value
        .trim();

    try {
      rsvpSubmit.disabled = true;

      rsvpSubmit.textContent =
        translations[
          currentLanguage
        ].rsvp.sending;

      rsvpStatus.textContent = "";

      updateGuestCount();

      const response =
        await fetch(
          weddingConfig.formspreeEndpoint,
          {
            method: "POST",
            body: new FormData(rsvpForm),
            headers: {
              Accept: "application/json"
            }
          }
        );

      if (!response.ok) {
        throw new Error(
          translations[
            currentLanguage
          ].rsvp.error
        );
      }

      const rsvpText =
        translations[
          currentLanguage
        ].rsvp;

      const guestWord =
        guestCount === 1
          ? rsvpText.guest
          : rsvpText.guests;

      rsvpStatus.textContent =
        rsvpText.success
          .replace(
            "{surname}",
            surname
          )
          .replace(
            "{count}",
            String(guestCount)
          )
          .replace(
            "{guestWord}",
            guestWord
          );

      rsvpForm.reset();

      guestCount = 1;
      updateGuestCount();
    } catch (error) {
      rsvpStatus.textContent =
        error.message ||
        translations[
          currentLanguage
        ].rsvp.error;
    } finally {
      rsvpSubmit.disabled = false;
      rsvpSubmit.innerHTML =
        originalButton;
    }
  }
);

/* =========================================================
   INITIALIZE
   ========================================================= */

applyGeneralConfig();
applyTranslations();
updateGuestCount();
handleScrollAnimations();
