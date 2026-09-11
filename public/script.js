const CONFIG = {
  musicUrl: "/assets/music/ti-amo.mp3",
  musicVolume: 0.75,
  churchMapQuery: "Saint Gayane Church, Vagharshapat, Armenia",
  restaurantMapQuery: "Royal Garden, Yerevan, Armenia"
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

/* --------------------------------------------------
   TRANSLATION
   -------------------------------------------------- */

let currentLanguage = "hy";
const ORIGINAL_DOCUMENT_TITLE = document.title;

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
  document.title = translateText(ORIGINAL_DOCUMENT_TITLE);

  const dynamicIds = new Set(["storyStatusText", "mapTitle", "mapSubtitle", "formStatus"]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while(walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const parent = node.parentElement;
    if(!parent || parent.closest("script, style, noscript")) return;
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

if (weddingMusic) {
  // Use a root-relative URL so the file resolves correctly on Netlify,
  // regardless of the current page URL.
  weddingMusic.src = CONFIG.musicUrl;
  weddingMusic.volume = CONFIG.musicVolume;
  weddingMusic.loop = true;
  weddingMusic.preload = "auto";
  weddingMusic.load();
}

async function startMusic(){
  if(!weddingMusic) return false;

  try {
    weddingMusic.muted = false;
    weddingMusic.volume = CONFIG.musicVolume;

    // play() is called from a real user interaction (Open invitation / music button).
    // This keeps playback compatible with browser autoplay policies.
    const playPromise = weddingMusic.play();
    if(playPromise) await playPromise;

    musicStarted = true;
    musicMuted = false;
    updateMusicUI();
    return true;
  } catch(error) {
    musicStarted = false;
    console.warn("Music could not start:", error);
    return false;
  }
}

function updateMusicUI(){
  [musicControl, danceMusic].forEach(button => {
    if(button) button.classList.toggle("muted", musicMuted);
  });

  const icon = $(".music-icon", musicControl);
  if(icon) icon.textContent = musicMuted ? "♩" : "♫";
}

async function toggleMusic(){
  if(!weddingMusic) return;

  if(!musicStarted || weddingMusic.paused){
    await startMusic();
    return;
  }

  musicMuted = !musicMuted;
  weddingMusic.muted = musicMuted;
  updateMusicUI();
}

openInvitation.addEventListener("click", () => {
  // Start audio immediately inside the click event. This is important on mobile
  // browsers and deployed HTTPS sites with strict autoplay policies.
  void startMusic();

  document.body.classList.add("opened");
  document.body.classList.remove("locked");

  setTimeout(() => {
    inviteGate.setAttribute("aria-hidden", "true");
  }, 900);
});

musicControl.addEventListener("click", toggleMusic);
danceMusic.addEventListener("click", toggleMusic);

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
let storyFirstCycleCompleted = false;
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

function lockScrollForStory(){
  if(storyScrollLocked || storyFirstCycleCompleted) return;

  // The first cinematic pass is kept in view so the guest sees the whole story.
  storyLockedY = storySection.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({top: storyLockedY, behavior: "auto"});

  storyScrollLocked = true;
  document.documentElement.classList.add("story-scroll-locked");
  document.body.classList.add("story-scroll-locked");

  document.body.style.position = "fixed";
  document.body.style.top = `-${storyLockedY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockScrollAfterFirstCycle(){
  if(!storyScrollLocked) return;

  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";

  document.documentElement.classList.remove("story-scroll-locked");
  document.body.classList.remove("story-scroll-locked");

  storyScrollLocked = false;
  window.scrollTo({top: storyLockedY, behavior: "auto"});
  updatePageUI();
}

function stopStory(){
  clearTimeout(storyTimer);
  storyTimer = null;
  storyRunning = false;
}

function finishStoryCycle(){
  const isFirstCycle = !storyFirstCycleCompleted;

  if(isFirstCycle){
    storyFirstCycleCompleted = true;
    storyLive?.classList.add("free-to-scroll");

    // Release scrolling after the first full pass. The animation itself keeps looping.
    window.setTimeout(unlockScrollAfterFirstCycle, 260);
  }

  clearTimeout(storyTimer);
  storyTimer = window.setTimeout(() => {
    if(!storyVisible){
      storyRunning = false;
      return;
    }

    showScene(0);
    scheduleNextScene();
  }, isFirstCycle ? 650 : loopPause);
}

function scheduleNextScene(){
  clearTimeout(storyTimer);

  storyTimer = window.setTimeout(() => {
    if(!storyVisible && storyFirstCycleCompleted){
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

function startStory({lockFirstPass = false} = {}){
  if(storyRunning) return;

  if(lockFirstPass && !storyFirstCycleCompleted){
    lockScrollForStory();
  }

  storyRunning = true;
  if(petalField) petalField.innerHTML = "";
  showScene(0);
  scheduleNextScene();
}

/*
  First visit: start when 55% of the story is visible and hold the first pass.
  After that: the story loops forever while the section is on screen, but scrolling is free.
*/
const storyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const ratio = entry.intersectionRatio;
    storyVisible = entry.isIntersecting && ratio >= .16;

    if(!storyFirstCycleCompleted && entry.isIntersecting && ratio >= .55 && !storyRunning){
      startStory({lockFirstPass:true});
      return;
    }

    if(storyFirstCycleCompleted && storyVisible && !storyRunning){
      startStory();
      return;
    }

    if(storyFirstCycleCompleted && !storyVisible && storyRunning){
      stopStory();
    }
  });
}, {
  threshold:[0,.08,.16,.3,.55,.75,.95]
});

storyObserver.observe(storySection);
showScene(0);

/*
  During only the first cinematic pass, block accidental wheel/touch/key scrolling.
  The live indicator and moving progress bar make it clear the site is actively playing.
*/
function preventStoryScrollInput(event){
  if(!storyScrollLocked) return;

  if(
    event.type === "wheel" ||
    event.type === "touchmove" ||
    ["ArrowDown","ArrowUp","PageDown","PageUp","Home","End"," "].includes(event.key)
  ){
    event.preventDefault();
  }
}

window.addEventListener("wheel", preventStoryScrollInput, {passive:false});
window.addEventListener("touchmove", preventStoryScrollInput, {passive:false});
window.addEventListener("keydown", preventStoryScrollInput, {passive:false});

/* --------------------------------------------------
   CALENDAR
   -------------------------------------------------- */

const calendarDays = $("#calendarDays");

function renderCalendar(){
  const year = 2025;
  const month = 4; // May
  const weddingDay = 17;

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
    title: "Սուրբ Գայանե եկեղեցի",
    subtitle: "Էջմիածին · 16:00"
  },
  restaurant: {
    query: CONFIG.restaurantMapQuery,
    title: "Royal Garden",
    subtitle: "Երևան · 19:00"
  }
};

function selectPlace(key){
  const place = places[key];

  map.src = `https://www.google.com/maps?q=${encodeURIComponent(place.query)}&output=embed`;
  mapTitle.textContent = translateText(place.title);
  mapSubtitle.textContent = translateText(place.subtitle);

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
  const data = Object.fromEntries(new FormData(rsvpForm).entries());

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
