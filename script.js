const CONFIG = {
  bride: { hy:"Արփինե", en:"Arpine", ru:"Арпине" },
  groom: { hy:"Տիգրան", en:"Tigran", ru:"Тигран" },
  date: "17.05.2025",

  // Google Apps Script Web App URL.
  // Leave empty while designing; submissions will be stored in localStorage.
  rsvpEndpoint: "",

  // Optional MP3 URL. If empty, a soft generated waltz is used.
  musicUrl: ""
};

const T = {
  hy:{
    "nav.story":"Մեր մասին","nav.day":"Օրակարգ","nav.details":"Վայրերը",
    "hero.overline":"ՄԵՐ ՍԻՐՈ ՕՐԸ","names.bride":"Արփինե","hero.and":"և","names.groom":"Տիգրան",
    "hero.date":"17 ՄԱՅԻՍ 2025","hero.quote":"«Այն, որ սկսվում է սիրուց, դառնում է հավերժություն…»",
    "hero.sideQuote":"Երկու սրտեր։ Մեկ ուղի։ Հավերժ…",
    "story.approach.title":"Ճանապարհ դեպի եկեղեցի","story.approach.text":"Քայլ առ քայլ՝ դեպի այն վայրը, որտեղ մեր երկու պատմությունները դառնում են մեկը։",
    "story.enter.title":"Մեր «Այո»-ն","story.enter.text":"Հայկական եկեղեցու քարե կամարների ներքո՝ ամենակարևոր խոստումը։",
    "story.exit.title":"Եվ սկսվում է մեր նոր ճանապարհը","story.exit.text":"Եկեղեցուց դուրս՝ մեր սիրելիների ժպիտների և վարդի թերթիկների միջով։",
    "details.overline":"ՄԵՐ ՕՐԸ","details.title":"Սպասում ենք Ձեզ մեր ամենագեղեցիկ օրը կիսելու",
    "details.ceremony.label":"ՀԱՐՍԱՆԵԿԱՆ ԱՐԱՐՈՂՈՒԹՅՈՒՆ","details.ceremony.date":"17 ՄԱՅԻՍ 2025",
    "details.ceremony.location":"Սուրբ Գայանե եկեղեցի\nԷջմիածին, Հայաստան",
    "details.reception.label":"ՀԱՆԴԻՍՈՒԹՅՈՒՆ","details.reception.date":"17 ՄԱՅԻՍ 2025",
    "details.reception.location":"Royal Garden\nԵրևան, Հայաստան","common.map":"ԴԻՏԵԼ ՔԱՐՏԵԶԸ",
    "dance.overline":"ԵՐԲ ՍԿՍՎՈՒՄ Է ԵՐԱԺՇՏՈՒԹՅՈՒՆԸ","dance.title":"Մեր առաջին պարը",
    "dance.text":"Մի պահ, որտեղ մնացած աշխարհը լռում է։","dance.play":"Միացնել երաժշտությունը",
    "rsvp.invite":"Կլինե՞ք մեզ հետ մեր ամենագեղեցիկ օրը նշելու…","rsvp.sub":"Խնդրում ենք հաստատել Ձեր մասնակցությունը",
    "form.firstName":"Անուն *","form.lastName":"Ազգանուն *","form.guests":"Հյուրերի քանակ *","form.side":"Կողմը *",
    "form.brideSide":"Հարսի կողմը","form.groomSide":"Փեսայի կողմը","form.attendance":"Մասնակցություն *",
    "form.yes":"Այո","form.no":"Ոչ","form.message":"Մաղթանք կամ հաղորդագրություն","form.submit":"Ուղարկել պատասխանը",
    "form.sending":"Ուղարկվում է…","form.success":"Շնորհակալ ենք։ Ձեր պատասխանը ստացվեց ♡","form.error":"Չհաջողվեց ուղարկել։ Փորձեք կրկին։",
    "footer.line":"Մեր սիրո պատմությունը շարունակվում է…"
  },
  en:{
    "nav.story":"Our story","nav.day":"Schedule","nav.details":"Locations",
    "hero.overline":"OUR LOVE DAY","names.bride":"Arpine","hero.and":"&","names.groom":"Tigran",
    "hero.date":"17 MAY 2025","hero.quote":"“What begins with love becomes forever…”",
    "hero.sideQuote":"Two hearts. One path. Forever…",
    "story.approach.title":"The walk to the church","story.approach.text":"Step by step, toward the place where our two stories become one.",
    "story.enter.title":"Our “Yes”","story.enter.text":"Beneath the stone arches of an Armenian church, our most important promise.",
    "story.exit.title":"And our new journey begins","story.exit.text":"Leaving the church through the smiles of those we love and a shower of rose petals.",
    "details.overline":"OUR DAY","details.title":"We are waiting for you to share our most beautiful day",
    "details.ceremony.label":"WEDDING CEREMONY","details.ceremony.date":"17 MAY 2025",
    "details.ceremony.location":"Saint Gayane Church\nVagharshapat, Armenia",
    "details.reception.label":"RECEPTION","details.reception.date":"17 MAY 2025",
    "details.reception.location":"Royal Garden\nYerevan, Armenia","common.map":"VIEW MAP",
    "dance.overline":"WHEN THE MUSIC BEGINS","dance.title":"Our first dance",
    "dance.text":"A moment when the rest of the world goes quiet.","dance.play":"Play the music",
    "rsvp.invite":"Will you join us to celebrate our most beautiful day?","rsvp.sub":"Please confirm your attendance",
    "form.firstName":"First name *","form.lastName":"Last name *","form.guests":"Guest count *","form.side":"Side *",
    "form.brideSide":"Bride's side","form.groomSide":"Groom's side","form.attendance":"Attendance *",
    "form.yes":"Yes","form.no":"No","form.message":"Message or wishes","form.submit":"Send RSVP",
    "form.sending":"Sending…","form.success":"Thank you. We received your RSVP ♡","form.error":"Could not send. Please try again.",
    "footer.line":"Our love story continues…"
  },
  ru:{
    "nav.story":"Наша история","nav.day":"Программа","nav.details":"Локации",
    "hero.overline":"ДЕНЬ НАШЕЙ ЛЮБВИ","names.bride":"Арпине","hero.and":"и","names.groom":"Тигран",
    "hero.date":"17 МАЯ 2025","hero.quote":"«То, что начинается с любви, становится вечностью…»",
    "hero.sideQuote":"Два сердца. Один путь. Навсегда…",
    "story.approach.title":"Дорога к церкви","story.approach.text":"Шаг за шагом — к месту, где две наши истории становятся одной.",
    "story.enter.title":"Наше «Да»","story.enter.text":"Под каменными сводами армянской церкви — наше самое важное обещание.",
    "story.exit.title":"И начинается наш новый путь","story.exit.text":"Выходим из церкви сквозь улыбки близких и лепестки роз.",
    "details.overline":"НАШ ДЕНЬ","details.title":"Ждём вас, чтобы разделить с нами этот прекрасный день",
    "details.ceremony.label":"СВАДЕБНАЯ ЦЕРЕМОНИЯ","details.ceremony.date":"17 МАЯ 2025",
    "details.ceremony.location":"Церковь Святой Гаяне\nВагаршапат, Армения",
    "details.reception.label":"ТОРЖЕСТВО","details.reception.date":"17 МАЯ 2025",
    "details.reception.location":"Royal Garden\nЕреван, Армения","common.map":"ОТКРЫТЬ КАРТУ",
    "dance.overline":"КОГДА НАЧИНАЕТСЯ МУЗЫКА","dance.title":"Наш первый танец",
    "dance.text":"Мгновение, когда весь остальной мир затихает.","dance.play":"Включить музыку",
    "rsvp.invite":"Будете с нами в этот самый красивый день?","rsvp.sub":"Пожалуйста, подтвердите участие",
    "form.firstName":"Имя *","form.lastName":"Фамилия *","form.guests":"Количество гостей *","form.side":"Сторона *",
    "form.brideSide":"Со стороны невесты","form.groomSide":"Со стороны жениха","form.attendance":"Участие *",
    "form.yes":"Да","form.no":"Нет","form.message":"Пожелание или сообщение","form.submit":"Отправить ответ",
    "form.sending":"Отправка…","form.success":"Спасибо. Мы получили ваш ответ ♡","form.error":"Не удалось отправить. Попробуйте ещё раз.",
    "footer.line":"Наша история любви продолжается…"
  }
};

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const wait=ms=>new Promise(r=>setTimeout(r,ms));

let language=localStorage.getItem("wedding-language")||"hy";
let petalsCreated=false;
let audio=null, audioContext=null, musicTimer=null, musicPlaying=false;

function setLanguage(lang){
  language=T[lang]?lang:"hy";
  document.documentElement.lang=language;
  localStorage.setItem("wedding-language",language);
  $$("[data-i18n]").forEach(el=>{
    const v=T[language][el.dataset.i18n];
    if(v!==undefined){
      if(v.includes("\n")) el.innerHTML=v.replaceAll("\n","<br>");
      else el.textContent=v;
    }
  });
  $$(".languages button").forEach(b=>b.classList.toggle("active",b.dataset.lang===language));
}
$$(".languages button").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
setLanguage(language);

/* Header */
const header=$("#header");
const menu=$("#menuButton");
const mobileNav=$("#mobileNav");
menu.addEventListener("click",()=>{
  const open=!mobileNav.classList.contains("open");
  mobileNav.classList.toggle("open",open);
  menu.classList.toggle("open",open);
  menu.setAttribute("aria-expanded",String(open));
  mobileNav.setAttribute("aria-hidden",String(!open));
});
$$(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>{
  mobileNav.classList.remove("open");menu.classList.remove("open");
}));

/* Reveal */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}
  });
},{threshold:.12});
$$(".reveal").forEach(el=>io.observe(el));

/* Cinematic church scroll */
const story=$(".church-story");
const scenes=$$(".story-scene");
const progressBars=$$(".story-progress .p");

function createPetals(){
  if(petalsCreated)return;
  petalsCreated=true;
  const field=$("#petals");
  for(let i=0;i<70;i++){
    const p=document.createElement("i");
    p.className="petal";
    p.style.left=`${Math.random()*100}%`;
    p.style.setProperty("--drift",`${-140+Math.random()*280}px`);
    p.style.animationDuration=`${4.5+Math.random()*4}s`;
    p.style.animationDelay=`${Math.random()*2.2}s`;
    p.style.transform=`scale(${.6+Math.random()*.8})`;
    field.appendChild(p);
  }
}
function updateStory(){
  header.classList.toggle("scrolled",scrollY>15);
  if(!story)return;
  const rect=story.getBoundingClientRect();
  const max=rect.height-innerHeight;
  const p=clamp((-rect.top)/max,0,1);
  const idx=p<.33?0:p<.66?1:2;

  scenes.forEach((s,i)=>{
    s.classList.toggle("active",i===idx);
    const img=$("img",s);
    const local=clamp((p-i/3)*3,0,1);
    if(img){
      const scale=1.04+local*.055;
      const y=(local-.5)*-2.2;
      img.style.transform=`scale(${scale}) translateY(${y}%)`;
    }
  });
  progressBars.forEach((b,i)=>b.classList.toggle("active",i===idx));
  if(idx===2)createPetals();
}
addEventListener("scroll",updateStory,{passive:true});
addEventListener("resize",updateStory);
updateStory();

/* Music: optional MP3 or subtle generated waltz */
const musicButton=$("#musicButton");
function generatedTone(freq,when,dur,gain=.02,type="sine"){
  const o=audioContext.createOscillator(),g=audioContext.createGain();
  o.type=type;o.frequency.value=freq;
  g.gain.setValueAtTime(.0001,when);
  g.gain.exponentialRampToValueAtTime(gain,when+.03);
  g.gain.exponentialRampToValueAtTime(.0001,when+dur);
  o.connect(g).connect(audioContext.destination);o.start(when);o.stop(when+dur+.04);
}
function scheduleWaltz(){
  if(!musicPlaying||CONFIG.musicUrl)return;
  if(!audioContext)audioContext=new (AudioContext||webkitAudioContext)();
  const n=audioContext.currentTime+.04, beat=.48;
  const chords=[[220,261.63,329.63],[174.61,220,261.63],[196,246.94,293.66],[220,261.63,329.63]];
  const melody=[440,493.88,523.25,493.88,440,392,440,493.88];
  chords.forEach((c,bar)=>{
    const t=n+bar*beat*3;
    generatedTone(c[0],t,beat*.85,.024,"triangle");
    generatedTone(c[1],t+beat,beat*.75,.012);
    generatedTone(c[2],t+beat*2,beat*.75,.012);
    generatedTone(melody[bar*2],t+.12,beat*.65,.014);
    generatedTone(melody[bar*2+1],t+beat*1.55,beat*.65,.012);
  });
  musicTimer=setTimeout(scheduleWaltz,beat*3*4*1000-100);
}
musicButton.addEventListener("click",()=>{
  musicPlaying=!musicPlaying;
  const icon=$(".music-circle i",musicButton);
  if(CONFIG.musicUrl){
    if(!audio)audio=new Audio(CONFIG.musicUrl);
    if(musicPlaying){audio.play();icon.textContent="❚❚"}else{audio.pause();icon.textContent="▶"}
  }else{
    if(musicPlaying){
      if(!audioContext)audioContext=new (window.AudioContext||window.webkitAudioContext)();
      audioContext.resume();icon.textContent="❚❚";scheduleWaltz();
    }else{clearTimeout(musicTimer);icon.textContent="▶"}
  }
});

/* RSVP */
const form=$("#rsvpForm"), status=$("#formStatus");
form.addEventListener("submit",async e=>{
  e.preventDefault();
  if(!form.reportValidity())return;
  const btn=$(".submit",form);btn.disabled=true;
  status.textContent=T[language]["form.sending"];
  const data=Object.fromEntries(new FormData(form).entries());
  data.submittedAt=new Date().toISOString();
  data.language=language;

  try{
    if(CONFIG.rsvpEndpoint){
      const res=await fetch(CONFIG.rsvpEndpoint,{
        method:"POST",
        headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify(data)
      });
      if(!res.ok)throw new Error("RSVP request failed");
    }else{
      const arr=JSON.parse(localStorage.getItem("wedding-rsvps")||"[]");
      arr.push(data);localStorage.setItem("wedding-rsvps",JSON.stringify(arr));
      await wait(550);
    }
    form.reset();status.textContent=T[language]["form.success"];
  }catch(err){
    console.error(err);status.textContent=T[language]["form.error"];
  }finally{btn.disabled=false}
});
