/* =========================================================
   ARMENIAN WEDDING — script.js
   Everything important is configurable in CONFIG below.
   ========================================================= */

const CONFIG = {
  couple: {
    bride: { hy: "Արփինե", en: "Arpine", ru: "Арпине" },
    groom: { hy: "Տիգրան", en: "Tigran", ru: "Тигран" }
  },
  date: "17.05.2025",

  // Put your deployed Google Apps Script Web App URL here.
  // Example:
  // rsvpEndpoint: "https://script.google.com/macros/s/XXXXX/exec"
  rsvpEndpoint: "",

  // Map route animation length is tied to scroll through journey section.
  journey: {
    brideFrom: "Yerevan",
    groomFrom: "Dilijan",
    church: "Saint Gayane Church",
    restaurant: "Royal Garden"
  }
};

const translations = {
  hy: {
    "nav.story":"Մեր մասին","nav.journey":"Ճանապարհը","nav.day":"Մեր օրը","nav.rsvp":"RSVP",
    "hero.eyebrow":"ՄԵՐ ՍԻՐՈ ՊԱՏՄՈՒԹՅՈՒՆԸ","couple.bride":"Արփինե","couple.groom":"Տիգրան",
    "hero.date":"17 ՄԱՅԻՍ 2025","hero.quote":"«Երկու ճանապարհ, մեկ ճակատագիր…»","hero.scroll":"SCROLL",
    "journey.kicker":"ԵՐԿՈՒ ՊԱՏՄՈՒԹՅՈՒՆ","journey.title":"Մեր ճանապարհը դեպի «մենք»",
    "journey.subtitle":"Մենք սկսեցինք տարբեր կետերից, բայց ճանապարհը մեզ բերեց նույն վայր։",
    "journey.brideStart":"Հարսի ճանապարհը","journey.groomStart":"Փեսայի ճանապարհը",
    "journey.city1":"Երևան","journey.city2":"Դիլիջան","journey.church":"Սուրբ Գայանե եկեղեցի","journey.churchTime":"16:00",
    "journey.restaurant":"Royal Garden","journey.restaurantTime":"19:00",
    "ceremony.kicker":"ՀԱՐՍԱՆԵԿԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ","ceremony.title":"Այն պահը, երբ երկու ճանապարհ դարձավ մեկը",
    "ceremony.text":"Մեր պատմության ամենակարևոր «այո»-ն՝ հայկական եկեղեցու կամարների ներքո։",
    "ceremony.time":"16:00","ceremony.place":"Սուրբ Գայանե եկեղեցի","ceremony.animationCaption":"Մոտենում ենք եկեղեցուն…",
    "day.kicker":"ՄԵՐ ՕՐԸ","day.title":"17 մայիս 2025",
    "day.gathering.title":"Հավաք","day.gathering.text":"Հյուրերի հանդիպում և առաջին ողջույնները։",
    "day.ceremony.title":"Պսակադրություն","day.ceremony.text":"Սուրբ Գայանե եկեղեցի, Էջմիածին։",
    "day.reception.title":"Հանդիսություն","day.reception.text":"Royal Garden — ընթրիք, պար և անմոռանալի երեկո։",
    "common.map":"Բացել քարտեզը",
    "reception.kicker":"ԵՎ ՀԵՏՈ՝ ԵՐԱԺՇՏՈՒԹՅՈՒՆ","reception.title":"Մեր առաջին պարը",
    "reception.text":"Երբ բառերն այլևս պետք չեն, սկսվում է պարը։","reception.music":"Միացնել երաժշտությունը",
    "rsvp.kicker":"ՍՊԱՍՈՒՄ ԵՆՔ ՁԵԶ","rsvp.title":"Կլինե՞ք մեզ հետ այս անմոռանալի օրը",
    "rsvp.subtitle":"Խնդրում ենք հաստատել մասնակցությունը մինչև 1 մայիս։",
    "form.firstName":"Անուն *","form.lastName":"Ազգանուն *","form.guests":"Հյուրերի քանակ *",
    "form.side":"Ո՞ր կողմից եք գալիս *","form.brideSide":"Հարսի կողմից","form.groomSide":"Փեսայի կողմից",
    "form.attendance":"Կկարողանա՞ք ներկա լինել *","form.yes":"Այո, սիրով","form.no":"Ցավոք, ոչ",
    "form.message":"Հաղորդագրություն / մաղթանք","form.submit":"Ուղարկել պատասխանը",
    "form.sending":"Ուղարկվում է…","form.success":"Շնորհակալ ենք։ Ձեր պատասխանը պահպանվեց ♡",
    "form.error":"Չհաջողվեց ուղարկել։ Խնդրում ենք փորձել կրկին։",
    "footer.quote":"«Երկու սրտեր, մեկ ճանապարհ…»"
  },
  en: {
    "nav.story":"Our story","nav.journey":"Journey","nav.day":"Our day","nav.rsvp":"RSVP",
    "hero.eyebrow":"OUR LOVE STORY","couple.bride":"Arpine","couple.groom":"Tigran",
    "hero.date":"17 MAY 2025","hero.quote":"“Two journeys, one destiny…”","hero.scroll":"SCROLL",
    "journey.kicker":"TWO STORIES","journey.title":"Our journey to “us”",
    "journey.subtitle":"We started from different places, but the road brought us to the same destination.",
    "journey.brideStart":"Bride's journey","journey.groomStart":"Groom's journey",
    "journey.city1":"Yerevan","journey.city2":"Dilijan","journey.church":"Saint Gayane Church","journey.churchTime":"16:00",
    "journey.restaurant":"Royal Garden","journey.restaurantTime":"19:00",
    "ceremony.kicker":"WEDDING CEREMONY","ceremony.title":"The moment two paths became one",
    "ceremony.text":"Our most important “yes”, beneath the arches of an Armenian church.",
    "ceremony.time":"16:00","ceremony.place":"Saint Gayane Church","ceremony.animationCaption":"Walking toward the church…",
    "day.kicker":"OUR DAY","day.title":"17 May 2025",
    "day.gathering.title":"Gathering","day.gathering.text":"Welcoming our guests and sharing the first smiles.",
    "day.ceremony.title":"Ceremony","day.ceremony.text":"Saint Gayane Church, Vagharshapat.",
    "day.reception.title":"Reception","day.reception.text":"Royal Garden — dinner, dancing and a night to remember.",
    "common.map":"Open map",
    "reception.kicker":"AND THEN, MUSIC","reception.title":"Our first dance",
    "reception.text":"When words are no longer needed, the dance begins.","reception.music":"Play the music",
    "rsvp.kicker":"WE ARE WAITING FOR YOU","rsvp.title":"Will you join us for this unforgettable day?",
    "rsvp.subtitle":"Please confirm your attendance by May 1.",
    "form.firstName":"First name *","form.lastName":"Last name *","form.guests":"Guest count *",
    "form.side":"Which side are you joining from? *","form.brideSide":"Bride's side","form.groomSide":"Groom's side",
    "form.attendance":"Will you attend? *","form.yes":"Yes, with pleasure","form.no":"Sadly, no",
    "form.message":"Message / wishes","form.submit":"Send RSVP",
    "form.sending":"Sending…","form.success":"Thank you. Your RSVP has been saved ♡",
    "form.error":"Could not send. Please try again.",
    "footer.quote":"“Two hearts, one road…”"
  },
  ru: {
    "nav.story":"Наша история","nav.journey":"Путь","nav.day":"Наш день","nav.rsvp":"RSVP",
    "hero.eyebrow":"НАША ИСТОРИЯ ЛЮБВИ","couple.bride":"Арпине","couple.groom":"Тигран",
    "hero.date":"17 МАЯ 2025","hero.quote":"«Два пути, одна судьба…»","hero.scroll":"SCROLL",
    "journey.kicker":"ДВЕ ИСТОРИИ","journey.title":"Наш путь к «мы»",
    "journey.subtitle":"Мы начали путь из разных мест, но дорога привела нас к одной точке.",
    "journey.brideStart":"Путь невесты","journey.groomStart":"Путь жениха",
    "journey.city1":"Ереван","journey.city2":"Дилижан","journey.church":"Церковь Святой Гаяне","journey.churchTime":"16:00",
    "journey.restaurant":"Royal Garden","journey.restaurantTime":"19:00",
    "ceremony.kicker":"СВАДЕБНАЯ ЦЕРЕМОНИЯ","ceremony.title":"Момент, когда два пути стали одним",
    "ceremony.text":"Наше самое важное «да» под сводами армянской церкви.",
    "ceremony.time":"16:00","ceremony.place":"Церковь Святой Гаяне","ceremony.animationCaption":"Идём к церкви…",
    "day.kicker":"НАШ ДЕНЬ","day.title":"17 мая 2025",
    "day.gathering.title":"Сбор гостей","day.gathering.text":"Встречаем гостей и делимся первыми улыбками.",
    "day.ceremony.title":"Венчание","day.ceremony.text":"Церковь Святой Гаяне, Вагаршапат.",
    "day.reception.title":"Торжество","day.reception.text":"Royal Garden — ужин, танцы и незабываемый вечер.",
    "common.map":"Открыть карту",
    "reception.kicker":"А ЗАТЕМ — МУЗЫКА","reception.title":"Наш первый танец",
    "reception.text":"Когда слова уже не нужны, начинается танец.","reception.music":"Включить музыку",
    "rsvp.kicker":"МЫ ЖДЁМ ВАС","rsvp.title":"Вы будете с нами в этот незабываемый день?",
    "rsvp.subtitle":"Пожалуйста, подтвердите участие до 1 мая.",
    "form.firstName":"Имя *","form.lastName":"Фамилия *","form.guests":"Количество гостей *",
    "form.side":"Со стороны кого вы будете? *","form.brideSide":"Со стороны невесты","form.groomSide":"Со стороны жениха",
    "form.attendance":"Сможете присутствовать? *","form.yes":"Да, с удовольствием","form.no":"К сожалению, нет",
    "form.message":"Сообщение / пожелание","form.submit":"Отправить ответ",
    "form.sending":"Отправка…","form.success":"Спасибо. Ваш ответ сохранён ♡",
    "form.error":"Не удалось отправить. Попробуйте ещё раз.",
    "footer.quote":"«Два сердца, один путь…»"
  }
};

let currentLang = localStorage.getItem("weddingLang") || "hy";
let ceremonyHasPlayed = false;
let musicOn = false;
let audioCtx = null;
let musicTimer = null;

const qsa = (s, root=document) => [...root.querySelectorAll(s)];
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));

function setLanguage(lang){
  currentLang = translations[lang] ? lang : "hy";
  localStorage.setItem("weddingLang", currentLang);
  document.documentElement.lang = currentLang;

  qsa("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    const val = translations[currentLang][key];
    if(val != null) el.textContent = val;
  });

  qsa(".lang-btn").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===currentLang));
}

qsa(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));
setLanguage(currentLang);

/* Header */
const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

function closeMenu(){
  menuBtn.classList.remove("active");
  menuBtn.setAttribute("aria-expanded","false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden","true");
}
menuBtn.addEventListener("click",()=>{
  const open = !mobileMenu.classList.contains("open");
  menuBtn.classList.toggle("active",open);
  menuBtn.setAttribute("aria-expanded",String(open));
  mobileMenu.classList.toggle("open",open);
  mobileMenu.setAttribute("aria-hidden",String(!open));
});
qsa(".mobile-menu a").forEach(a=>a.addEventListener("click",closeMenu));

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>20);
  animateJourney();
},{passive:true});

/* Reveal animation */
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
      revealObserver.unobserve(e.target);
    }
  });
},{threshold:.14});
qsa(".reveal").forEach(el=>revealObserver.observe(el));

/* Journey animation */
const journeySection = document.querySelector(".journey-section");
const journeyMap = document.getElementById("journeyMap");
const brideTraveler = document.querySelector(".traveler-bride");
const groomTraveler = document.querySelector(".traveler-groom");

function animateJourney(){
  if(!journeySection || !journeyMap) return;
  const rect = journeySection.getBoundingClientRect();
  const vh = window.innerHeight;
  const progress = clamp((vh - rect.top) / (rect.height + vh*.35),0,1);
  const approach = clamp(progress / .66,0,1);
  const united = clamp((progress-.66)/.34,0,1);

  brideTraveler.style.offsetDistance = `${approach*100}%`;
  groomTraveler.style.offsetDistance = `${approach*100}%`;

  journeyMap.classList.toggle("joined",approach>.97);

  const restaurant = document.querySelector(".restaurant-stop");
  if(restaurant){
    restaurant.style.transform = `translate(-50%,-50%) scale(${.92 + united*.08})`;
    restaurant.style.opacity = `${.68 + united*.32}`;
  }
}
animateJourney();

/* Ceremony sequence */
const ceremonyStage = document.getElementById("ceremonyStage");
const caption = ceremonyStage.querySelector(".ceremony-caption span");

const ceremonyObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting && !ceremonyHasPlayed){
      ceremonyHasPlayed = true;
      playCeremonySequence();
    }
  });
},{threshold:.45});
ceremonyObserver.observe(ceremonyStage);

function wait(ms){ return new Promise(resolve=>setTimeout(resolve,ms)); }

async function playCeremonySequence(){
  caption.textContent = translations[currentLang]["ceremony.animationCaption"];
  await wait(600);

  // Couple walks toward the church and doors open.
  ceremonyStage.classList.add("phase-enter");
  await wait(3800);

  // Small pause inside.
  caption.textContent =
    currentLang==="hy" ? "Մեր «այո»-ն…" :
    currentLang==="ru" ? "Наше «да»…" :
    "Our “yes”…";
  await wait(1800);

  // Couple comes out, guests appear, petals fall.
  ceremonyStage.classList.add("phase-exit");
  caption.textContent =
    currentLang==="hy" ? "Եվ սկսվում է մեր նոր ճանապարհը ♡" :
    currentLang==="ru" ? "И начинается наш новый путь ♡" :
    "And our new journey begins ♡";
  createPetals(58);
}

function createPetals(count=45){
  const field = document.getElementById("petalField");
  field.innerHTML = "";
  for(let i=0;i<count;i++){
    const p = document.createElement("i");
    p.className="petal";
    p.style.left = `${Math.random()*100}%`;
    p.style.setProperty("--drift",`${-100 + Math.random()*200}px`);
    p.style.animationDuration = `${4 + Math.random()*4}s`;
    p.style.animationDelay = `${Math.random()*2.5}s`;
    p.style.opacity = `${.55 + Math.random()*.45}`;
    p.style.transform = `scale(${.65 + Math.random()*.8})`;
    field.appendChild(p);
  }
}

/* Tiny WebAudio waltz — no external audio file required */
const musicBtn = document.getElementById("musicBtn");

function ensureAudio(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if(audioCtx.state === "suspended") audioCtx.resume();
}
function playTone(freq, when, duration, gain=.03, type="sine"){
  const osc = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001,when);
  g.gain.exponentialRampToValueAtTime(gain,when+.02);
  g.gain.exponentialRampToValueAtTime(0.0001,when+duration);
  osc.connect(g).connect(audioCtx.destination);
  osc.start(when);
  osc.stop(when+duration+.04);
}
function scheduleWaltz(){
  if(!musicOn) return;
  ensureAudio();
  const now = audioCtx.currentTime + .05;
  const chords = [
    [261.63,329.63,392.00], // C
    [220.00,261.63,329.63], // Am
    [174.61,220.00,261.63], // F
    [196.00,246.94,293.66], // G
  ];
  const melody = [523.25,493.88,440,392,440,493.88,523.25,587.33];
  const beat=.42;
  for(let bar=0;bar<4;bar++){
    const t=now+bar*beat*3;
    const c=chords[bar];
    playTone(c[0]/2,t,beat*.8,.035,"triangle");
    playTone(c[1],t+beat,beat*.72,.018,"sine");
    playTone(c[2],t+beat,beat*.72,.016,"sine");
    playTone(c[1],t+beat*2,beat*.72,.018,"sine");
    playTone(c[2],t+beat*2,beat*.72,.016,"sine");
    playTone(melody[bar*2],t+.1,beat*.68,.018,"sine");
    playTone(melody[bar*2+1],t+beat*1.55,beat*.68,.015,"sine");
  }
  musicTimer = setTimeout(scheduleWaltz, beat*3*4*1000 - 120);
}

musicBtn.addEventListener("click",()=>{
  musicOn = !musicOn;
  const icon = musicBtn.querySelector(".play-icon");
  if(musicOn){
    ensureAudio();
    icon.textContent="❚❚";
    scheduleWaltz();
  }else{
    icon.textContent="▶";
    clearTimeout(musicTimer);
  }
});

/* RSVP */
const form = document.getElementById("rsvpForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit",async e=>{
  e.preventDefault();
  if(!form.reportValidity()) return;

  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.disabled = true;
  statusEl.textContent = translations[currentLang]["form.sending"];

  const data = Object.fromEntries(new FormData(form).entries());
  data.submittedAt = new Date().toISOString();
  data.language = currentLang;

  try{
    if(CONFIG.rsvpEndpoint){
      const res = await fetch(CONFIG.rsvpEndpoint,{
        method:"POST",
        headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify(data)
      });
      if(!res.ok) throw new Error("Request failed");
    }else{
      // Demo fallback: keep submissions in this browser so the form still works.
      const saved = JSON.parse(localStorage.getItem("weddingRsvps") || "[]");
      saved.push(data);
      localStorage.setItem("weddingRsvps",JSON.stringify(saved));
      await wait(650);
    }

    form.reset();
    statusEl.textContent = translations[currentLang]["form.success"];
  }catch(err){
    console.error(err);
    statusEl.textContent = translations[currentLang]["form.error"];
  }finally{
    submitBtn.disabled = false;
  }
});

/* Initial state */
window.addEventListener("load",()=>{
  document.body.classList.add("loaded");
  animateJourney();
});
