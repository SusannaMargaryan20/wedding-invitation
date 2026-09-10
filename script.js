const CONFIG = {
  musicUrl: "assets/music/ti-amo.mp3",
  musicVolume: 0.75,
  churchMapQuery: "Saint Gayane Church, Vagharshapat, Armenia",
  restaurantMapQuery: "Royal Garden, Yerevan, Armenia"
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

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
  weddingMusic.src = CONFIG.musicUrl;
  weddingMusic.volume = CONFIG.musicVolume;
  weddingMusic.loop = true;
}

async function startMusic(){
  if(!weddingMusic) return;

  try {
    if(!musicStarted){
      weddingMusic.currentTime = 0;
    }

    weddingMusic.muted = false;
    await weddingMusic.play();

    musicStarted = true;
    musicMuted = false;
    updateMusicUI();
  } catch(error) {
    console.warn("Music could not start automatically:", error);
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

openInvitation.addEventListener("click", async () => {
  document.body.classList.add("opened");
  document.body.classList.remove("locked");

  // The click is a real user interaction, so browsers allow audio playback here.
  await startMusic();

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
    storyStatusText.textContent = storySceneLabels[index] || "Պատմությունը շարունակվում է";
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
  mapTitle.textContent = place.title;
  mapSubtitle.textContent = place.subtitle;

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

rsvpForm.addEventListener("submit", e => {
  e.preventDefault();

  if(!rsvpForm.reportValidity()) return;

  const data = Object.fromEntries(new FormData(rsvpForm).entries());

  const saved = JSON.parse(localStorage.getItem("wedding-rsvps") || "[]");
  saved.push({...data, submittedAt:new Date().toISOString()});
  localStorage.setItem("wedding-rsvps", JSON.stringify(saved));

  rsvpForm.reset();
  formStatus.innerHTML = "Շնորհակալ ենք։ Սիրով սպասում ենք Ձեզ ♡";
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
