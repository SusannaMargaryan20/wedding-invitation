/*
  Change wedding information only in this file.
  IMPORTANT:
  - Keep RSVP recipient Gmail addresses ONLY in Code.gs, not here.
  - After deploying Google Apps Script, paste the deployment URL into rsvp.endpoint.
*/
window.WEDDING_CONFIG = {
  defaultLanguage: "hy",

  couple: {
    bride: "Անի",
    groom: "Դավիթ",
    monogram: "Ա & Դ"
  },

  weddingDate: "2026-10-18",
  weddingDateDisplay: "18 · 10 · 2026",
  rsvpDeadline: "01.10.2026",

  ceremony: {
    name: "Սուրբ Սարգիս եկեղեցի",
    time: "14:00",
    mapUrl: "https://maps.google.com/?q=Saint+Sarkis+Cathedral+Yerevan"
  },

  reception: {
    name: "Dvin Music Hall",
    time: "17:30",
    mapUrl: "https://maps.google.com/?q=Dvin+Music+Hall+Yerevan"
  },

  music: {
    src: "assets/wedding-tango.mp3",
    volume: 0.45
  },

  animation: {
    churchReplayOnReenter: false,
    petalCount: 44
  },

  rsvp: {
    endpoint: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL",
    maxGuests: 10
  },

  translations: {
    hy: {
      "hero.eyebrow": "ՄԵՐ ՀԱՐՍԱՆԻՔԸ",
      "hero.copy": "Երկու պատմություն դառնում են մեկ՝ ձեր ներկայությամբ։",
      "hero.scroll": "Բացեք մեր պատմությունը",

      "church.eyebrow": "ԱՐԱՐՈՂՈՒԹՅՈՒՆ",
      "church.title": "Երբ երկու ճանապարհ հանդիպում են",
      "church.copy": "Սիրով հրավիրում ենք ձեզ կիսելու մեր օրհնության պահը։",

      "restaurant.eyebrow": "ՏՈՆԱԿԱՏԱՐՈՒԹՅՈՒՆ",
      "restaurant.title": "Հետո՝ երաժշտություն, լույսեր և մեր առաջին պարը",
      "restaurant.copy": "Երեկոն շարունակվում է մի վայրում, որտեղ ժամանակը մի պահ կանգ է առնում։",

      "details.eyebrow": "ՕՐՎԱ ՊԱՏՄՈՒԹՅՈՒՆԸ",
      "details.title": "Մենք սպասում ենք ձեզ",
      "details.churchLabel": "Պսակադրություն",
      "details.restaurantLabel": "Հարսանյաց երեկո",
      "details.map": "Բացել քարտեզը ↗",

      "rsvp.eyebrow": "RSVP",
      "rsvp.title": "Կմիանա՞ք մեզ նշելու այս օրը",
      "rsvp.copy": "Խնդրում ենք հաստատել ձեր ներկայությունը՝ լրացնելով այս փոքրիկ ձևը։",
      "rsvp.deadline": "Խնդրում ենք պատասխանել մինչև",

      "form.firstName": "Անուն",
      "form.lastName": "Ազգանուն",
      "form.guests": "Հյուրերի քանակ",
      "form.side": "Ո՞ր կողմից եք",
      "form.sidePlaceholder": "Ընտրել",
      "form.brideSide": "Հարսի կողմից",
      "form.groomSide": "Փեսայի կողմից",
      "form.submit": "Հաստատել ներկայությունը",
      "form.required": "Խնդրում ենք լրացնել դաշտը։",
      "form.success": "Շնորհակալություն։ Ձեր պատասխանը հաջողությամբ ուղարկվեց։",
      "form.error": "Չհաջողվեց ուղարկել։ Խնդրում ենք փորձել կրկին։",
      "form.endpointMissing": "RSVP ծառայությունը դեռ չի միացվել։ Ավելացրեք Google Apps Script URL-ը config.js-ում։",

      "music.play": "Երաժշտություն",
      "music.pause": "Դադարեցնել",

      "closing.kicker": "Սիրով՝",
      "closing.copy": "Այս օրը ամբողջական կլինի ձեր ներկայությամբ։"
    },

    en: {
      "hero.eyebrow": "OUR WEDDING",
      "hero.copy": "Two stories become one — with you there to witness it.",
      "hero.scroll": "Enter our story",

      "church.eyebrow": "THE CEREMONY",
      "church.title": "When two paths meet",
      "church.copy": "With love, we invite you to share the moment of our blessing.",

      "restaurant.eyebrow": "THE CELEBRATION",
      "restaurant.title": "Then come the music, the lights, and our first dance",
      "restaurant.copy": "The evening continues in a place where time seems to pause for a moment.",

      "details.eyebrow": "THE DAY",
      "details.title": "We will be waiting for you",
      "details.churchLabel": "Wedding ceremony",
      "details.restaurantLabel": "Wedding reception",
      "details.map": "Open map ↗",

      "rsvp.eyebrow": "RSVP",
      "rsvp.title": "Will you join us to celebrate?",
      "rsvp.copy": "Please confirm your attendance by completing this short form.",
      "rsvp.deadline": "Kindly reply by",

      "form.firstName": "First name",
      "form.lastName": "Last name",
      "form.guests": "Number of guests",
      "form.side": "Whose side are you joining from?",
      "form.sidePlaceholder": "Choose",
      "form.brideSide": "Bride's side",
      "form.groomSide": "Groom's side",
      "form.submit": "Confirm attendance",
      "form.required": "Please complete this field.",
      "form.success": "Thank you. Your response has been sent successfully.",
      "form.error": "We could not send your response. Please try again.",
      "form.endpointMissing": "The RSVP service is not connected yet. Add your Google Apps Script URL in config.js.",

      "music.play": "Music",
      "music.pause": "Pause music",

      "closing.kicker": "With love,",
      "closing.copy": "This day will feel complete with you there."
    },

    ru: {
      "hero.eyebrow": "НАША СВАДЬБА",
      "hero.copy": "Две истории становятся одной — в вашем присутствии.",
      "hero.scroll": "Открыть нашу историю",

      "church.eyebrow": "ЦЕРЕМОНИЯ",
      "church.title": "Когда встречаются две дороги",
      "church.copy": "С любовью приглашаем вас разделить с нами момент благословения.",

      "restaurant.eyebrow": "ПРАЗДНИК",
      "restaurant.title": "А затем — музыка, огни и наш первый танец",
      "restaurant.copy": "Вечер продолжится в месте, где время словно остановится на мгновение.",

      "details.eyebrow": "ПЛАН ДНЯ",
      "details.title": "Мы будем ждать вас",
      "details.churchLabel": "Венчание",
      "details.restaurantLabel": "Свадебный вечер",
      "details.map": "Открыть карту ↗",

      "rsvp.eyebrow": "RSVP",
      "rsvp.title": "Вы будете с нами в этот день?",
      "rsvp.copy": "Пожалуйста, подтвердите ваше присутствие, заполнив короткую форму.",
      "rsvp.deadline": "Просим ответить до",

      "form.firstName": "Имя",
      "form.lastName": "Фамилия",
      "form.guests": "Количество гостей",
      "form.side": "С чьей стороны вы приглашены?",
      "form.sidePlaceholder": "Выбрать",
      "form.brideSide": "Со стороны невесты",
      "form.groomSide": "Со стороны жениха",
      "form.submit": "Подтвердить присутствие",
      "form.required": "Пожалуйста, заполните это поле.",
      "form.success": "Спасибо. Ваш ответ успешно отправлен.",
      "form.error": "Не удалось отправить ответ. Пожалуйста, попробуйте ещё раз.",
      "form.endpointMissing": "RSVP ещё не подключён. Добавьте URL Google Apps Script в config.js.",

      "music.play": "Музыка",
      "music.pause": "Остановить",

      "closing.kicker": "С любовью,",
      "closing.copy": "Этот день будет полным, если вы будете рядом."
    }
  }
};
