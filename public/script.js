const DEFAULT_WEDDING_ID = "hrant-anna";
const requestedWeddingId = new URLSearchParams(window.location.search).get("wedding");
const ACTIVE_WEDDING_ID = window.WEDDING_CONFIGS?.[requestedWeddingId]
  ? requestedWeddingId
  : DEFAULT_WEDDING_ID;
const ACTIVE_WEDDING = window.WEDDING_CONFIGS?.[ACTIVE_WEDDING_ID];

if(!ACTIVE_WEDDING){
  throw new Error("Wedding configuration is missing.");
}

const CONFIG = {
  musicUrl: ACTIVE_WEDDING.music.url,
  musicVolume: 0.75,
  churchMapQuery: ACTIVE_WEDDING.ceremony.mapQuery,
  restaurantMapQuery: ACTIVE_WEDDING.reception.mapQuery
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

/* --------------------------------------------------
   TRANSLATION
   -------------------------------------------------- */

let currentLanguage = "hy";
const ORIGINAL_DOCUMENT_TITLE = document.title;

const MONTHS = {
  hy: [
    { upper: "ՀՈՒՆՎԱՐ", title: "Հունվար", date: "ՀՈՒՆՎԱՐ" },
    { upper: "ՓԵՏՐՎԱՐ", title: "Փետրվար", date: "ՓԵՏՐՎԱՐ" },
    { upper: "ՄԱՐՏ", title: "Մարտ", date: "ՄԱՐՏ" },
    { upper: "ԱՊՐԻԼ", title: "Ապրիլ", date: "ԱՊՐԻԼ" },
    { upper: "ՄԱՅԻՍ", title: "Մայիս", date: "ՄԱՅԻՍ" },
    { upper: "ՀՈՒՆԻՍ", title: "Հունիս", date: "ՀՈՒՆԻՍ" },
    { upper: "ՀՈՒԼԻՍ", title: "Հուլիս", date: "ՀՈՒԼԻՍ" },
    { upper: "ՕԳՈՍՏՈՍ", title: "Օգոստոս", date: "ՕԳՈՍՏՈՍ" },
    { upper: "ՍԵՊՏԵՄԲԵՐ", title: "Սեպտեմբեր", date: "ՍԵՊՏԵՄԲԵՐ" },
    { upper: "ՀՈԿՏԵՄԲԵՐ", title: "Հոկտեմբեր", date: "ՀՈԿՏԵՄԲԵՐ" },
    { upper: "ՆՈՅԵՄԲԵՐ", title: "Նոյեմբեր", date: "ՆՈՅԵՄԲԵՐ" },
    { upper: "ԴԵԿՏԵՄԲԵՐ", title: "Դեկտեմբեր", date: "ԴԵԿՏԵՄԲԵՐ" }
  ],
  en: [
    { upper: "JANUARY", title: "January", date: "JANUARY" },
    { upper: "FEBRUARY", title: "February", date: "FEBRUARY" },
    { upper: "MARCH", title: "March", date: "MARCH" },
    { upper: "APRIL", title: "April", date: "APRIL" },
    { upper: "MAY", title: "May", date: "MAY" },
    { upper: "JUNE", title: "June", date: "JUNE" },
    { upper: "JULY", title: "July", date: "JULY" },
    { upper: "AUGUST", title: "August", date: "AUGUST" },
    { upper: "SEPTEMBER", title: "September", date: "SEPTEMBER" },
    { upper: "OCTOBER", title: "October", date: "OCTOBER" },
    { upper: "NOVEMBER", title: "November", date: "NOVEMBER" },
    { upper: "DECEMBER", title: "December", date: "DECEMBER" }
  ],
  ru: [
    { upper: "ЯНВАРЬ", title: "Январь", date: "ЯНВАРЯ" },
    { upper: "ФЕВРАЛЬ", title: "Февраль", date: "ФЕВРАЛЯ" },
    { upper: "МАРТ", title: "Март", date: "МАРТА" },
    { upper: "АПРЕЛЬ", title: "Апрель", date: "АПРЕЛЯ" },
    { upper: "МАЙ", title: "Май", date: "МАЯ" },
    { upper: "ИЮНЬ", title: "Июнь", date: "ИЮНЯ" },
    { upper: "ИЮЛЬ", title: "Июль", date: "ИЮЛЯ" },
    { upper: "АВГУСТ", title: "Август", date: "АВГУСТА" },
    { upper: "СЕНТЯБРЬ", title: "Сентябрь", date: "СЕНТЯБРЯ" },
    { upper: "ОКТЯБРЬ", title: "Октябрь", date: "ОКТЯБРЯ" },
    { upper: "НОЯБРЬ", title: "Ноябрь", date: "НОЯБРЯ" },
    { upper: "ДЕКАБРЬ", title: "Декабрь", date: "ДЕКАБРЯ" }
  ]
};

function localized(value){
  if(typeof value === "string") return value;
  return value?.[currentLanguage] || value?.hy || value?.en || "";
}

function setText(selector, value){
  const element = $(selector);
  if(element) element.textContent = value;
}

function timeLabel(time){
  if(currentLanguage === "en") return `at ${time}`;
  if(currentLanguage === "ru") return `в ${time}`;
  return `ժամը ${time}`;
}

function formatWeddingDate(){
  const { day, month, year } = ACTIVE_WEDDING.date;
  const monthData = MONTHS[currentLanguage][month - 1];
  return `${day} ${monthData.date} ${year}`;
}

function applyWeddingConfig(){
  const { names, date, ceremony, reception, music } = ACTIVE_WEDDING;
  const name1 = localized(names.first);
  const name2 = localized(names.second);
  const joiner = currentLanguage === "hy" ? "և" : currentLanguage === "ru" ? "и" : "and";
  const monthData = MONTHS[currentLanguage][date.month - 1];
  const dd = String(date.day).padStart(2, "0");
  const mm = String(date.month).padStart(2, "0");
  const firstInitial = names.first.en.charAt(0).toUpperCase();
  const secondInitial = names.second.en.charAt(0).toUpperCase();
  const monogram = `${firstInitial}<i>&</i>${secondInitial}`;

  document.title = currentLanguage === "hy"
    ? `${name1} & ${name2} — Հարսանեկան հրավեր`
    : currentLanguage === "ru"
      ? `${name1} & ${name2} — Свадебное приглашение`
      : `${name1} & ${name2} — Wedding Invitation`;

  ["#gateMonogram", "#headerMonogram", "#footerMonogram"].forEach(selector => {
    const element = $(selector);
    if(element) element.innerHTML = monogram;
  });

  setText("#gateName1", name1);
  setText("#gateName2", name2);
  setText("#gateAnd", joiner);
  setText("#heroName1", name1);
  setText("#heroName2", name2);
  setText("#heroAnd", joiner);

  setText("#gateDate", `${dd} · ${mm} · ${date.year}`);
  setText("#heroDate", formatWeddingDate());
  setText("#ceremonyDate", formatWeddingDate());
  setText("#receptionDate", formatWeddingDate());
  setText("#ceremonyTime", timeLabel(ceremony.time));
  setText("#receptionTime", timeLabel(reception.time));

  const ceremonyPlace = $("#ceremonyPlace");
  if(ceremonyPlace) ceremonyPlace.innerHTML = `${localized(ceremony.name)}<br>${localized(ceremony.location)}`;
  const receptionPlace = $("#receptionPlace");
  if(receptionPlace) receptionPlace.innerHTML = `${localized(reception.name)}<br>${localized(reception.location)}`;

  const ceremonyMapLink = $("#ceremonyMapLink");
  if(ceremonyMapLink) ceremonyMapLink.href = `https://maps.google.com/?q=${encodeURIComponent(ceremony.mapQuery)}`;
  const receptionMapLink = $("#receptionMapLink");
  if(receptionMapLink) receptionMapLink.href = `https://maps.google.com/?q=${encodeURIComponent(reception.mapQuery)}`;

  setText("#calendarDateTitle", `${date.day} ${monthData.title}`);
  setText("#calendarMonth", monthData.upper);
  setText("#calendarYear", date.year);
  setText("#footerDate", `${dd}.${mm}.${date.year}`);
  setText("#musicTitle", music.title);
  setText("#danceMusicTitle", music.title);

  const audio = $("#weddingMusic");
  if(audio && audio.getAttribute("src") !== music.url) audio.src = music.url;

  if(typeof renderCalendar === "function") renderCalendar();
  const activeMapTab = $(".map-tab.active");
  if(activeMapTab && typeof selectPlace === "function") selectPlace(activeMapTab.dataset.place);
}


const TRANSLATIONS = {
  en: {
    "Արփինե & Տիգրան — Հարսանեկան հրավեր": "Arpine & Tigran — Wedding Invitation",
    "ՀԱՐՍԱՆԵԿԱՆ ՀՐԱՎԵՐ": "WEDDING INVITATION",
    "Արփինե": "Arpine",
    "և": "and",
    "Տիգրան": "Tigran",
    "ԲԱՑԵԼ ՀՐԱՎԵՐԸ": "OPEN INVITATION",
    "Հրավերը բացվում է երաժշտությամբ": "The invitation opens with music",
    "Հնչում է": "Now playing",
    "ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ": "OUR STORY",
    "ՄԵՐ ՕՐԸ": "OUR DAY",
    "ՎԱՅՐԵՐԸ": "LOCATIONS",
    "ՄԵՐ ՍԻՐՈ ՕՐԸ": "OUR DAY OF LOVE",
    "17 ՄԱՅԻՍ 2025": "17 MAY 2025",
    "«Այն, ինչ սկսվում է սիրուց, դառնում է հավերժություն…»": "“What begins with love becomes forever…”",
    "ՊԱՏՄՈՒԹՅՈՒՆԸ ՇԱՐՈՒՆԱԿՎՈՒՄ Է": "THE STORY CONTINUES",
    "Մոտենում են": "Coming closer",
    "Երկու ճանապարհ,": "Two paths,",
    "մեկ հանդիպում": "one meeting",
    "Նրանք գալիս են միմյանց ընդառաջ՝ դեպի իրենց կյանքի ամենակարևոր օրը։": "They move toward each other and toward the most important day of their lives.",
    "Միասին՝ դեպի եկեղեցի": "Together, toward the church",
    "Նրանք քայլում են դեպի հայկական եկեղեցու դռները՝ ձեռք ձեռքի։": "Hand in hand, they walk toward the doors of the Armenian church.",
    "«Ես ընտրում եմ քեզ՝": "“I choose you—",
    "այսօր և ամեն օր…»": "today and every day…”",
    "Եվ սկսվում է": "And so begins",
    "մեր նոր ճանապարհը": "our new journey",
    "Եկեղեցուց դուրս՝ մեր սիրելիների ժպիտների և վարդի թերթիկների միջով։": "Outside the church, they step into smiles from loved ones and a shower of rose petals.",
    "Սպասում ենք Ձեզ մեր ամենագեղեցիկ օրը կիսելու": "We look forward to sharing our most beautiful day with you",
    "ՀԱՐՍԱՆԵԿԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ": "WEDDING CEREMONY",
    "ժամը 16:00": "at 16:00",
    "Սուրբ Գայանե եկեղեցի": "Saint Gayane Church",
    "Էջմիածին, Հայաստան": "Etchmiadzin, Armenia",
    "⌖ ԴԻՏԵԼ ՔԱՐՏԵԶԸ": "⌖ VIEW MAP",
    "ՀԱՆԴԻՍՈՒԹՅՈՒՆ": "RECEPTION",
    "ժամը 19:00": "at 19:00",
    "Երևան, Հայաստան": "Yerevan, Armenia",
    "ՊԱՀԵՔ ԱՄՍԱԹԻՎԸ": "SAVE THE DATE",
    "17 Մայիս": "17 May",
    "Մեր պատմության նոր էջի առաջին օրը։": "The first day of a new chapter in our story.",
    "ՄԱՅԻՍ": "MAY",
    "ԵՐԿ": "MON",
    "ԵՐՔ": "TUE",
    "ՉՐՔ": "WED",
    "ՀՆԳ": "THU",
    "ՈՒՐ": "FRI",
    "ՇԲԹ": "SAT",
    "ԿԻՐ": "SUN",
    "ՄԵՐ ՎԱՅՐԵՐԸ": "OUR LOCATIONS",
    "Գտեք մեզ քարտեզի վրա": "Find us on the map",
    "ԵԿԵՂԵՑԻ": "CHURCH",
    "ՌԵՍՏՈՐԱՆ": "RESTAURANT",
    "Էջմիածին · 16:00": "Etchmiadzin · 16:00",
    "Երևան · 19:00": "Yerevan · 19:00",
    "ԵՐԲ ՍԿՍՎՈՒՄ Է ԵՐԱԺՇՏՈՒԹՅՈՒՆԸ": "WHEN THE MUSIC BEGINS",
    "Մեր առաջին պարը": "Our first dance",
    "Մի պահ, որտեղ մնացած աշխարհը լռում է։": "A moment when the rest of the world falls silent.",
    "Կլինե՞ք մեզ հետ": "Will you join us",
    "մեր ամենագեղեցիկ օրը նշելու…": "to celebrate our most beautiful day…",
    "Անուն *": "First name *",
    "Ազգանուն *": "Last name *",
    "Հյուրերի քանակ *": "Number of guests *",
    "Կողմը *": "Side *",
    "Հարսի կողմը": "Bride's side",
    "Փեսայի կողմը": "Groom's side",
    "Մասնակցություն *": "Attendance *",
    "Այո": "Yes",
    "Ոչ": "No",
    "Մաղթանք / հաղորդագրություն": "Wish / message",
    "ՈՒՂԱՐԿԵԼ ՊԱՏԱՍԽԱՆԸ": "SEND RESPONSE",
    "«Մեր սիրո պատմությունը": "“Our love story",
    "շարունակվում է…»": "continues…”",
    "Խոստումների պահը": "The moment of vows",
    "Վարդերի ճանապարհը": "The path of roses",
    "Պատմությունը շարունակվում է": "The story continues",
    "Ուղարկվում է…": "Sending…",
    "Չհաջողվեց ուղարկել։ Փորձեք կրկին։": "Could not send. Please try again.",
    "Շնորհակալ ենք։ Սիրով սպասում ենք Ձեզ ♡": "Thank you. We look forward to celebrating with you ♡"
  },
  ru: {
    "Արփինե & Տիգրան — Հարսանեկան հրավեր": "Арпине & Тигран — Свадебное приглашение",
    "ՀԱՐՍԱՆԵԿԱՆ ՀՐԱՎԵՐ": "СВАДЕБНОЕ ПРИГЛАШЕНИЕ",
    "Արփինե": "Арпине",
    "և": "и",
    "Տիգրան": "Тигран",
    "ԲԱՑԵԼ ՀՐԱՎԵՐԸ": "ОТКРЫТЬ ПРИГЛАШЕНИЕ",
    "Հրավերը բացվում է երաժշտությամբ": "Приглашение откроется с музыкой",
    "Հնչում է": "Сейчас играет",
    "ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ": "НАША ИСТОРИЯ",
    "ՄԵՐ ՕՐԸ": "НАШ ДЕНЬ",
    "ՎԱՅՐԵՐԸ": "МЕСТА",
    "ՄԵՐ ՍԻՐՈ ՕՐԸ": "ДЕНЬ НАШЕЙ ЛЮБВИ",
    "17 ՄԱՅԻՍ 2025": "17 МАЯ 2025",
    "«Այն, ինչ սկսվում է սիրուց, դառնում է հավերժություն…»": "«То, что начинается с любви, становится вечностью…»",
    "ՊԱՏՄՈՒԹՅՈՒՆԸ ՇԱՐՈՒՆԱԿՎՈՒՄ Է": "ИСТОРИЯ ПРОДОЛЖАЕТСЯ",
    "Մոտենում են": "Идут навстречу друг другу",
    "Երկու ճանապարհ,": "Два пути,",
    "մեկ հանդիպում": "одна встреча",
    "Նրանք գալիս են միմյանց ընդառաջ՝ դեպի իրենց կյանքի ամենակարևոր օրը։": "Они идут навстречу друг другу — к самому важному дню своей жизни.",
    "Միասին՝ դեպի եկեղեցի": "Вместе — к церкви",
    "Նրանք քայլում են դեպի հայկական եկեղեցու դռները՝ ձեռք ձեռքի։": "Держась за руки, они идут к дверям армянской церкви.",
    "«Ես ընտրում եմ քեզ՝": "«Я выбираю тебя —",
    "այսօր և ամեն օր…»": "сегодня и каждый день…»",
    "Եվ սկսվում է": "И начинается",
    "մեր նոր ճանապարհը": "наш новый путь",
    "Եկեղեցուց դուրս՝ մեր սիրելիների ժպիտների և վարդի թերթիկների միջով։": "Из церкви они выходят под улыбки близких и лепестки роз.",
    "Սպասում ենք Ձեզ մեր ամենագեղեցիկ օրը կիսելու": "Будем рады разделить с вами наш самый прекрасный день",
    "ՀԱՐՍԱՆԵԿԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ": "СВАДЕБНАЯ ЦЕРЕМОНИЯ",
    "ժամը 16:00": "в 16:00",
    "Սուրբ Գայանե եկեղեցի": "Церковь Святой Гаянэ",
    "Էջմիածին, Հայաստան": "Эчмиадзин, Армения",
    "⌖ ԴԻՏԵԼ ՔԱՐՏԵԶԸ": "⌖ ПОКАЗАТЬ НА КАРТЕ",
    "ՀԱՆԴԻՍՈՒԹՅՈՒՆ": "ТОРЖЕСТВО",
    "ժամը 19:00": "в 19:00",
    "Երևան, Հայաստան": "Ереван, Армения",
    "ՊԱՀԵՔ ԱՄՍԱԹԻՎԸ": "СОХРАНИТЕ ДАТУ",
    "17 Մայիս": "17 мая",
    "Մեր պատմության նոր էջի առաջին օրը։": "Первый день новой главы нашей истории.",
    "ՄԱՅԻՍ": "МАЙ",
    "ԵՐԿ": "ПН",
    "ԵՐՔ": "ВТ",
    "ՉՐՔ": "СР",
    "ՀՆԳ": "ЧТ",
    "ՈՒՐ": "ПТ",
    "ՇԲԹ": "СБ",
    "ԿԻՐ": "ВС",
    "ՄԵՐ ՎԱՅՐԵՐԸ": "НАШИ МЕСТА",
    "Գտեք մեզ քարտեզի վրա": "Найдите нас на карте",
    "ԵԿԵՂԵՑԻ": "ЦЕРКОВЬ",
    "ՌԵՍՏՈՐԱՆ": "РЕСТОРАН",
    "Էջմիածին · 16:00": "Эчмиадзин · 16:00",
    "Երևան · 19:00": "Ереван · 19:00",
    "ԵՐԲ ՍԿՍՎՈՒՄ Է ԵՐԱԺՇՏՈՒԹՅՈՒՆԸ": "КОГДА НАЧИНАЕТСЯ МУЗЫКА",
    "Մեր առաջին պարը": "Наш первый танец",
    "Մի պահ, որտեղ մնացած աշխարհը լռում է։": "Мгновение, когда весь остальной мир затихает.",
    "Կլինե՞ք մեզ հետ": "Будете ли вы с нами",
    "մեր ամենագեղեցիկ օրը նշելու…": "чтобы отпраздновать наш самый прекрасный день…",
    "Անուն *": "Имя *",
    "Ազգանուն *": "Фамилия *",
    "Հյուրերի քանակ *": "Количество гостей *",
    "Կողմը *": "Сторона *",
    "Հարսի կողմը": "Со стороны невесты",
    "Փեսայի կողմը": "Со стороны жениха",
    "Մասնակցություն *": "Участие *",
    "Այո": "Да",
    "Ոչ": "Нет",
    "Մաղթանք / հաղորդագրություն": "Пожелание / сообщение",
    "ՈՒՂԱՐԿԵԼ ՊԱՏԱՍԽԱՆԸ": "ОТПРАВИТЬ ОТВЕТ",
    "«Մեր սիրո պատմությունը": "«История нашей любви",
    "շարունակվում է…»": "продолжается…»",
    "Խոստումների պահը": "Момент клятв",
    "Վարդերի ճանապարհը": "Дорога из роз",
    "Պատմությունը շարունակվում է": "История продолжается",
    "Ուղարկվում է…": "Отправляется…",
    "Չհաջողվեց ուղարկել։ Փորձեք կրկին։": "Не удалось отправить. Попробуйте ещё раз.",
    "Շնորհակալ ենք։ Սիրով սպասում ենք Ձեզ ♡": "Спасибо. Будем рады отпраздновать этот день вместе с вами ♡"
  }
};

function translateText(source){
  if(currentLanguage === "hy") return source;
  return TRANSLATIONS[currentLanguage]?.[source] || source;
}

function translatePage(language){
  currentLanguage = ["hy", "en", "ru"].includes(language) ? language : "hy";
  document.documentElement.lang = currentLanguage;

  const dynamicIds = new Set(["storyStatusText", "mapTitle", "mapSubtitle", "formStatus"]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while(walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const parent = node.parentElement;
    if(!parent || parent.closest("script, style, noscript")) return;
    if(parent.closest("[data-wedding-dynamic]")) return;
    if(dynamicIds.has(parent.id)) return;

    if(node.__translationSource === undefined){
      node.__translationSource = node.nodeValue;
    }

    const sourceValue = node.__translationSource;
    const trimmed = sourceValue.trim();
    if(!trimmed) return;

    const translated = translateText(trimmed);
    const leading = sourceValue.match(/^\s*/)?.[0] || "";
    const trailing = sourceValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${translated}${trailing}`;
  });

  $$(".lang").forEach(button => {
    button.classList.toggle("active", button.textContent.trim().toLowerCase() === currentLanguage);
  });

  if(typeof updateStoryActivity === "function") updateStoryActivity(storyIndex);

  const activeMapTab = $(".map-tab.active");
  if(activeMapTab && typeof selectPlace === "function"){
    selectPlace(activeMapTab.dataset.place);
  }

  if(formStatus?.dataset.statusKey){
    formStatus.textContent = translateText(formStatus.dataset.statusKey);
  }

  applyWeddingConfig();
}

/* --------------------------------------------------
   MUSIC
   -------------------------------------------------- */

const inviteGate = $("#inviteGate");
const openInvitation = $("#openInvitation");
const weddingMusic = $("#weddingMusic");
const musicControl = $("#musicControl");
const danceMusic = $("#danceMusic");

let musicStarted = false;
let musicMuted = false;
let musicPlayPromise = null;

if (weddingMusic) {
  weddingMusic.src = CONFIG.musicUrl;
  weddingMusic.volume = CONFIG.musicVolume;
  weddingMusic.loop = true;
  weddingMusic.preload = "metadata";
}

function updateMusicUI(){
  [musicControl, danceMusic].forEach(button => {
    if(button) button.classList.toggle("muted", musicMuted);
  });

  const icon = $(".music-icon", musicControl);
  if(icon) icon.textContent = musicMuted ? "♩" : "♫";
}

function startMusicFromGesture(){
  if(!weddingMusic) return;

  weddingMusic.muted = false;
  weddingMusic.volume = CONFIG.musicVolume;

  // IMPORTANT: call play() synchronously from the user's real gesture.
  // This is the most reliable pattern for Chrome/Safari autoplay policies.
  if (!musicPlayPromise || weddingMusic.paused) {
    musicPlayPromise = weddingMusic.play();

    if (musicPlayPromise?.then) {
      musicPlayPromise
        .then(() => {
          musicStarted = true;
          musicMuted = false;
          updateMusicUI();
        })
        .catch(error => {
          musicStarted = false;
          musicPlayPromise = null;
          console.warn("Wedding music could not start:", error);
        });
    } else {
      musicStarted = true;
      musicMuted = false;
      updateMusicUI();
    }
  }
}

function toggleMusic(){
  if(!weddingMusic) return;

  if(!musicStarted || weddingMusic.paused){
    startMusicFromGesture();
    return;
  }

  musicMuted = !musicMuted;
  weddingMusic.muted = musicMuted;
  updateMusicUI();
}

// Start on pointerdown so play() runs at the earliest possible point in the
// user's gesture. The click handler below is kept as a keyboard/fallback path.
openInvitation.addEventListener("pointerdown", startMusicFromGesture);

openInvitation.addEventListener("click", () => {
  if(!musicStarted && weddingMusic?.paused){
    startMusicFromGesture();
  }

  document.body.classList.add("opened");
  document.body.classList.remove("locked");

  setTimeout(() => {
    inviteGate.setAttribute("aria-hidden", "true");
  }, 900);
});

musicControl.addEventListener("click", toggleMusic);
danceMusic.addEventListener("click", toggleMusic);

weddingMusic?.addEventListener("error", () => {
  console.error("Wedding music failed to load:", weddingMusic.error);
});

/* --------------------------------------------------
   HEADER + PAGE PROGRESS
   -------------------------------------------------- */

const header = $("#header");
const pageProgress = $("#pageProgress");

function updatePageUI(){
  header.classList.toggle("scrolled", window.scrollY > 20);

  const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  pageProgress.style.width = `${(window.scrollY / max) * 100}%`;
}

window.addEventListener("scroll", updatePageUI, {passive:true});
updatePageUI();

/* --------------------------------------------------
   REVEAL
   -------------------------------------------------- */

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:.13});

$$(".reveal").forEach(el => revealObserver.observe(el));

/* --------------------------------------------------
   AUTOMATIC STORY — FASTER + INFINITE LOOP
   -------------------------------------------------- */

const storySection = $("#story");
const storyScenes = $$(".story-scene");
const storyBars = $$(".story-progress span");
const petalField = $("#petalField");
const storyStatusText = $("#storyStatusText");
const storySceneCounter = $("#storySceneCounter");
const storyLive = $("#storyLive");

let storyTimer = null;
let storyRunning = false;
let storyIndex = 0;
// Never lock the page while the cinematic story is playing.
// Treat the first cycle as already completed so the story simply loops
// whenever it is visible and the user can scroll normally at all times.
let storyFirstCycleCompleted = true;
let storyScrollLocked = false;
let storyLockedY = 0;
let storyVisible = false;

// A little faster than the previous version. Total first pass is about 12.6 seconds.
const sceneDurations = [3200, 2900, 2400, 4100];
const loopPause = 420;
const storySceneLabels = [
  "Մոտենում են",
  "Միասին՝ դեպի եկեղեցի",
  "Խոստումների պահը",
  "Վարդերի ճանապարհը"
];

function createPetals(){
  if(!petalField) return;

  petalField.innerHTML = "";

  for(let i=0; i<52; i++){
    const p = document.createElement("i");
    p.className = "petal" + (i % 9 === 0 ? " near" : "");

    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--drift", `${-170 + Math.random() * 340}px`);
    p.style.setProperty("--spin", `${360 + Math.random() * 500}deg`);
    p.style.setProperty("--scale", `${.65 + Math.random() * .8}`);
    p.style.animationDuration = `${3.1 + Math.random() * 3.2}s`;
    p.style.animationDelay = `${Math.random() * 1.2}s`;

    petalField.appendChild(p);
  }
}

function restartSceneAnimation(scene){
  const animated = [
    ...$$(":scope > img", scene),
    ...$$(".approach-base,.approach-person", scene)
  ];

  animated.forEach(el => {
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
}

function updateStoryActivity(index){
  if(storySceneCounter){
    storySceneCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(storyScenes.length).padStart(2, "0")}`;
  }

  if(storyStatusText){
    storyStatusText.textContent = translateText(storySceneLabels[index] || "Պատմությունը շարունակվում է");
  }

  if(storyLive){
    storyLive.classList.remove("scene-change");
    void storyLive.offsetWidth;
    storyLive.classList.add("scene-change");
  }
}

function showScene(index){
  storyIndex = index;
  const duration = sceneDurations[index];

  storyScenes.forEach((scene, i) => {
    scene.classList.toggle("active", i === index);

    if(i === index){
      scene.style.setProperty("--scene-duration", `${duration}ms`);
      restartSceneAnimation(scene);
    }
  });

  storyBars.forEach((bar, i) => {
    bar.classList.toggle("active", i === index);
    if(i === index){
      bar.style.setProperty("--duration", `${duration}ms`);
    }
  });

  updateStoryActivity(index);

  if(index === storyScenes.length - 1){
    createPetals();
  }
}

function stopStory(){
  clearTimeout(storyTimer);
  storyTimer = null;
  storyRunning = false;
}

function finishStoryCycle(){
  clearTimeout(storyTimer);
  storyTimer = window.setTimeout(() => {
    if(!storyVisible){
      storyRunning = false;
      return;
    }

    showScene(0);
    scheduleNextScene();
  }, loopPause);
}

function scheduleNextScene(){
  clearTimeout(storyTimer);

  storyTimer = window.setTimeout(() => {
    if(!storyVisible){
      storyRunning = false;
      return;
    }

    if(storyIndex < storyScenes.length - 1){
      showScene(storyIndex + 1);
      scheduleNextScene();
    }else{
      finishStoryCycle();
    }
  }, sceneDurations[storyIndex]);
}

function startStory(){
  if(storyRunning) return;

  storyRunning = true;
  if(petalField) petalField.innerHTML = "";
  showScene(0);
  scheduleNextScene();
}

/*
  The story loops forever while the section is visible.
  It never locks wheel, touch, keyboard, or page scrolling.
*/
const storyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    storyVisible = entry.isIntersecting && entry.intersectionRatio >= .16;

    if(storyVisible && !storyRunning){
      startStory();
    } else if(!storyVisible && storyRunning){
      stopStory();
    }
  });
}, {
  threshold:[0,.08,.16,.3,.55,.75,.95]
});

storyObserver.observe(storySection);
showScene(0);

/* --------------------------------------------------
   CALENDAR
   -------------------------------------------------- */

const calendarDays = $("#calendarDays");

function renderCalendar(){
  const year = ACTIVE_WEDDING.date.year;
  const month = ACTIVE_WEDDING.date.month - 1;
  const weddingDay = ACTIVE_WEDDING.date.day;

  const firstDay = new Date(year, month, 1).getDay();
  const mondayIndex = (firstDay + 6) % 7;
  const count = new Date(year, month + 1, 0).getDate();

  calendarDays.innerHTML = "";

  for(let i=0; i<mondayIndex; i++){
    const empty = document.createElement("span");
    empty.className = "day empty";
    calendarDays.appendChild(empty);
  }

  for(let day=1; day<=count; day++){
    const cell = document.createElement("span");
    cell.className = "day";
    cell.textContent = day;

    if(day === weddingDay){
      cell.classList.add("wedding");
    }

    calendarDays.appendChild(cell);
  }
}

renderCalendar();

/* --------------------------------------------------
   MAP
   -------------------------------------------------- */

const map = $("#weddingMap");
const mapTabs = $$(".map-tab");
const mapTitle = $("#mapTitle");
const mapSubtitle = $("#mapSubtitle");

const places = {
  church: {
    query: CONFIG.churchMapQuery,
    title: ACTIVE_WEDDING.ceremony.name,
    location: ACTIVE_WEDDING.ceremony.location,
    time: ACTIVE_WEDDING.ceremony.time
  },
  restaurant: {
    query: CONFIG.restaurantMapQuery,
    title: ACTIVE_WEDDING.reception.name,
    location: ACTIVE_WEDDING.reception.location,
    time: ACTIVE_WEDDING.reception.time
  }
};

function selectPlace(key){
  const place = places[key];

  map.src = `https://www.google.com/maps?q=${encodeURIComponent(place.query)}&output=embed`;
  mapTitle.textContent = localized(place.title);
  mapSubtitle.textContent = `${localized(place.location)} · ${place.time}`;

  mapTabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.place === key);
  });
}

mapTabs.forEach(tab => {
  tab.addEventListener("click", () => selectPlace(tab.dataset.place));
});

selectPlace("church");

/* --------------------------------------------------
   RSVP DEMO
   -------------------------------------------------- */

const rsvpForm = $("#rsvpForm");
const formStatus = $("#formStatus");
const RSVP_API_URL = "/api/rsvp"; // Netlify routes this to the RSVP serverless function.

rsvpForm.addEventListener("submit", async e => {
  e.preventDefault();

  if(!rsvpForm.reportValidity()) return;

  const submitButton = rsvpForm.querySelector('button[type="submit"]');
  const data = {
    ...Object.fromEntries(new FormData(rsvpForm).entries()),
    weddingId: ACTIVE_WEDDING_ID
  };

  submitButton.disabled = true;
  formStatus.dataset.statusKey = "Ուղարկվում է…";
  formStatus.textContent = translateText(formStatus.dataset.statusKey);

  try {
    const response = await fetch(RSVP_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if(!response.ok) throw new Error("RSVP request failed");

    rsvpForm.reset();
    formStatus.dataset.statusKey = "Շնորհակալ ենք։ Սիրով սպասում ենք Ձեզ ♡";
  } catch(error) {
    console.error(error);
    formStatus.dataset.statusKey = "Չհաջողվեց ուղարկել։ Փորձեք կրկին։";
  } finally {
    formStatus.textContent = translateText(formStatus.dataset.statusKey);
    submitButton.disabled = false;
  }
});

/* Start with the invitation gate locked. */
document.body.classList.add("locked");

/* --------------------------------------------------
   FIRST DANCE — 8 FRAME INFINITE ANIMATION
   -------------------------------------------------- */
const danceSection = $("#danceSection");
const danceFrameA = $("#danceFrameA");
const danceFrameB = $("#danceFrameB");

const danceFrames = [
  "assets/images/dance/frame-01.webp",
  "assets/images/dance/frame-02.webp",
  "assets/images/dance/frame-03.webp",
  "assets/images/dance/frame-04.webp",
  "assets/images/dance/frame-05.webp",
  "assets/images/dance/frame-06.webp",
  "assets/images/dance/frame-07.webp",
  "assets/images/dance/frame-08.webp"
];

// A little faster than a slideshow, but slow enough to read as a graceful dance.
const DANCE_FRAME_MS = 620;
let danceFrameIndex = 0;
let danceFront = danceFrameA;
let danceBack = danceFrameB;
let danceTimer = null;
let danceFramesReady = false;

function preloadDanceFrames(){
  if(danceFramesReady) return;
  danceFramesReady = true;

  danceFrames.forEach(src => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  });
}

function showNextDanceFrame(){
  danceFrameIndex = (danceFrameIndex + 1) % danceFrames.length;
  danceBack.src = danceFrames[danceFrameIndex];

  // Decode before swapping when supported; avoids a blank flash on slower phones.
  const reveal = () => {
    danceBack.classList.add("active");
    danceFront.classList.remove("active");

    const oldFront = danceFront;
    danceFront = danceBack;
    danceBack = oldFront;
  };

  if(typeof danceBack.decode === "function"){
    danceBack.decode().then(reveal).catch(reveal);
  } else {
    reveal();
  }
}

function startDanceAnimation(){
  if(danceTimer || !danceFrameA || !danceFrameB) return;
  preloadDanceFrames();
  danceTimer = window.setInterval(showNextDanceFrame, DANCE_FRAME_MS);
}

function stopDanceAnimation(){
  if(!danceTimer) return;
  window.clearInterval(danceTimer);
  danceTimer = null;
}

if(danceSection && danceFrameA && danceFrameB){
  const danceObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        startDanceAnimation();
      } else {
        stopDanceAnimation();
      }
    });
  }, {threshold:.08});

  danceObserver.observe(danceSection);
}


/* --------------------------------------------------
   LANGUAGE SWITCHER
   -------------------------------------------------- */

$$(".lang").forEach(button => {
  button.addEventListener("click", () => {
    translatePage(button.textContent.trim().toLowerCase());
  });
});

translatePage("hy");
