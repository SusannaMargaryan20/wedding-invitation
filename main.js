// ==========================================================================
// MAIN — language switching, header state, mobile menu, music toggle
// ==========================================================================
(function () {
  /* ---------------------------------------------------------------------
     Language
  --------------------------------------------------------------------- */
  let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "hy";

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    const dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }

  window.getCurrentLang = () => currentLang;

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  applyLang(currentLang);

  /* ---------------------------------------------------------------------
     Header scroll state
  --------------------------------------------------------------------- */
  const header = document.querySelector(".site-header");
  function onScrollHeader() {
    if (window.scrollY > 60) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------------------------------------------------------------------
     Mobile menu
  --------------------------------------------------------------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------------------------------------------------------------------
     Music toggle — never autoplay
  --------------------------------------------------------------------- */
  const musicBtn = document.querySelector(".music-btn");
  if (musicBtn) {
    let audio = null;
    if (CONFIG.musicUrl) {
      audio = new Audio(CONFIG.musicUrl);
      audio.loop = true;
    }
    musicBtn.addEventListener("click", () => {
      const playing = musicBtn.classList.toggle("playing");
      if (!audio) return;
      if (playing) audio.play().catch(() => {});
      else audio.pause();
    });
  }

  /* ---------------------------------------------------------------------
     Fill config-driven fields (dates, venues) that stay language-neutral
  --------------------------------------------------------------------- */
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    if (CONFIG[key] !== undefined) el.innerHTML = CONFIG[key];
  });
  document.querySelectorAll("[data-href-config]").forEach((el) => {
    const key = el.getAttribute("data-href-config");
    if (CONFIG[key] !== undefined) el.setAttribute("href", CONFIG[key]);
  });
})();
