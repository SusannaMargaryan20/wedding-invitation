(() => {
  "use strict";

  const config = window.WEDDING_CONFIG;
  if (!config) {
    console.error("WEDDING_CONFIG is missing.");
    return;
  }

  const state = {
    language: config.defaultLanguage || "hy",
    churchPlayed: false,
    musicPlaying: false,
    startedAt: Date.now()
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const elements = {
    monogram: $("#monogramText"),
    brideName: $("#brideName"),
    groomName: $("#groomName"),
    closingBride: $("#closingBride"),
    closingGroom: $("#closingGroom"),
    weddingDate: $("#weddingDateText"),
    churchName: $("#churchName"),
    churchTime: $("#churchTime"),
    restaurantName: $("#restaurantName"),
    restaurantTime: $("#restaurantTime"),
    timelineChurchName: $("#timelineChurchName"),
    timelineChurchTime: $("#timelineChurchTime"),
    timelineRestaurantName: $("#timelineRestaurantName"),
    timelineRestaurantTime: $("#timelineRestaurantTime"),
    churchMapLink: $("#churchMapLink"),
    restaurantMapLink: $("#restaurantMapLink"),
    deadline: $("#rsvpDeadline"),
    churchScene: $("#churchScene"),
    ballroomScene: $("#ballroomScene"),
    petals: $("#petals"),
    music: $("#weddingMusic"),
    musicToggle: $("#musicToggle"),
    rsvpForm: $("#rsvpForm"),
    formStatus: $("#formStatus"),
    guestsSelect: $("#guestsSelect")
  };

  function getTranslation(key) {
    return config.translations?.[state.language]?.[key]
      ?? config.translations?.hy?.[key]
      ?? key;
  }

  function applyStaticConfig() {
    document.documentElement.lang = state.language;

    elements.monogram.textContent = config.couple.monogram;
    elements.brideName.textContent = config.couple.bride;
    elements.groomName.textContent = config.couple.groom;
    elements.closingBride.textContent = config.couple.bride;
    elements.closingGroom.textContent = config.couple.groom;

    elements.weddingDate.textContent = config.weddingDateDisplay;
    elements.weddingDate.setAttribute("datetime", config.weddingDate);

    elements.churchName.textContent = config.ceremony.name;
    elements.churchTime.textContent = config.ceremony.time;
    elements.restaurantName.textContent = config.reception.name;
    elements.restaurantTime.textContent = config.reception.time;

    elements.timelineChurchName.textContent = config.ceremony.name;
    elements.timelineChurchTime.textContent = config.ceremony.time;
    elements.timelineRestaurantName.textContent = config.reception.name;
    elements.timelineRestaurantTime.textContent = config.reception.time;

    elements.churchMapLink.href = config.ceremony.mapUrl;
    elements.restaurantMapLink.href = config.reception.mapUrl;
    elements.deadline.textContent = config.rsvpDeadline;

    if (config.music?.src) {
      elements.music.src = config.music.src;
      elements.music.volume = Number(config.music.volume ?? 0.45);
    }

    populateGuestOptions();
  }

  function applyTranslations() {
    document.documentElement.lang = state.language;

    $$("[data-i18n]").forEach((node) => {
      node.textContent = getTranslation(node.dataset.i18n);
    });

    $$(".language-switcher button").forEach((button) => {
      const isActive = button.dataset.lang === state.language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    updateMusicButton();
    populateGuestOptions();
  }

  function populateGuestOptions() {
    const selected = elements.guestsSelect.value;
    const max = Math.max(1, Number(config.rsvp.maxGuests || 10));

    elements.guestsSelect.replaceChildren();

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "—";
    elements.guestsSelect.appendChild(placeholder);

    for (let i = 1; i <= max; i += 1) {
      const option = document.createElement("option");
      option.value = String(i);
      option.textContent = String(i);
      elements.guestsSelect.appendChild(option);
    }

    if (selected && Number(selected) <= max) {
      elements.guestsSelect.value = selected;
    }
  }

  function setLanguage(lang) {
    if (!config.translations?.[lang]) return;
    state.language = lang;
    localStorage.setItem("wedding-language", lang);
    applyTranslations();
  }

  function createPetals() {
    elements.petals.replaceChildren();

    const count = Math.max(16, Number(config.animation?.petalCount || 44));
    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement("i");
      const side = i % 2 === 0 ? "left" : "right";
      petal.className = `petal petal-${side}`;

      const top = 48 + Math.random() * 25;
      const delay = Math.random() * 1.8;
      const duration = 1.8 + Math.random() * 2.2;
      const distanceX = 18 + Math.random() * 38;
      const distanceY = -12 - Math.random() * 36;
      const rotate = 160 + Math.random() * 420;
      const scale = 0.55 + Math.random() * 0.9;

      petal.style.setProperty("--petal-top", `${top}%`);
      petal.style.setProperty("--petal-delay", `${delay}s`);
      petal.style.setProperty("--petal-duration", `${duration}s`);
      petal.style.setProperty("--petal-x", `${distanceX}vw`);
      petal.style.setProperty("--petal-x-neg", `${-distanceX}vw`);
      petal.style.setProperty("--petal-y", `${distanceY}vh`);
      petal.style.setProperty("--petal-rotate", `${rotate}deg`);
      petal.style.setProperty("--petal-rotate-neg", `${-rotate}deg`);
      petal.style.setProperty("--petal-scale", scale.toFixed(2));

      elements.petals.appendChild(petal);
    }
  }

  function replayChurchScene() {
    elements.churchScene.classList.remove("is-active");
    void elements.churchScene.offsetWidth;
    elements.churchScene.classList.add("is-active");
  }

  function setupObservers() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    $$(".reveal").forEach((node) => revealObserver.observe(node));

    const churchObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.48) return;

        if (!state.churchPlayed || config.animation?.churchReplayOnReenter) {
          createPetals();
          replayChurchScene();
          state.churchPlayed = true;
        }
      });
    }, { threshold: [0.48, 0.7] });

    churchObserver.observe(elements.churchScene);

    const danceObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        elements.ballroomScene.classList.toggle("is-active", entry.isIntersecting && entry.intersectionRatio > 0.35);
      });
    }, { threshold: [0.35, 0.6] });

    danceObserver.observe(elements.ballroomScene);
  }

  function updateMusicButton() {
    const label = $("[data-i18n^='music.']", elements.musicToggle);
    const key = state.musicPlaying ? "music.pause" : "music.play";

    if (label) {
      label.dataset.i18n = key;
      label.textContent = getTranslation(key);
    }

    elements.musicToggle.classList.toggle("is-playing", state.musicPlaying);
    elements.musicToggle.setAttribute("aria-pressed", String(state.musicPlaying));
  }

  async function toggleMusic() {
    try {
      if (elements.music.paused) {
        await elements.music.play();
        state.musicPlaying = true;
      } else {
        elements.music.pause();
        state.musicPlaying = false;
      }
    } catch (error) {
      state.musicPlaying = false;
      console.warn("Music could not start. Verify the audio file and browser autoplay rules.", error);
    }

    updateMusicButton();
  }

  function clearErrors() {
    $$(".field", elements.rsvpForm).forEach((field) => field.classList.remove("has-error"));
    $$(".field-error", elements.rsvpForm).forEach((message) => {
      message.textContent = "";
    });
  }

  function validateForm(formData) {
    clearErrors();

    const requiredFields = ["firstName", "lastName", "guests", "side"];
    let valid = true;

    requiredFields.forEach((name) => {
      const value = String(formData.get(name) || "").trim();
      if (value) return;

      valid = false;
      const input = elements.rsvpForm.elements[name];
      const field = input?.closest(".field");
      const error = $(`[data-error-for="${name}"]`, elements.rsvpForm);

      field?.classList.add("has-error");
      if (error) error.textContent = getTranslation("form.required");
    });

    return valid;
  }

  function setSubmitting(isSubmitting) {
    const button = $(".submit-button", elements.rsvpForm);
    button.disabled = isSubmitting;
    button.classList.toggle("is-loading", isSubmitting);
  }

  async function submitRsvp(event) {
    event.preventDefault();

    const formData = new FormData(elements.rsvpForm);

    // Honeypot for simple bot filtering.
    if (String(formData.get("website") || "").trim()) return;

    if (!validateForm(formData)) {
      elements.formStatus.textContent = "";
      return;
    }

    if (!config.rsvp.endpoint || config.rsvp.endpoint.includes("YOUR_GOOGLE_APPS_SCRIPT")) {
      elements.formStatus.className = "form-status is-error";
      elements.formStatus.textContent = getTranslation("form.endpointMissing");
      return;
    }

    const payload = {
      firstName: String(formData.get("firstName")).trim(),
      lastName: String(formData.get("lastName")).trim(),
      guests: Number(formData.get("guests")),
      side: String(formData.get("side")),
      language: state.language,
      submittedAt: new Date().toISOString(),
      formStartedAt: state.startedAt
    };

    setSubmitting(true);
    elements.formStatus.className = "form-status";
    elements.formStatus.textContent = "";

    try {
      // Google Apps Script web apps do not reliably expose a readable
      // cross-origin response in every mobile browser. no-cors makes this
      // a reliable one-way RSVP submission from a static website.
      await fetch(config.rsvp.endpoint, {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      elements.rsvpForm.reset();
      populateGuestOptions();
      elements.formStatus.className = "form-status is-success";
      elements.formStatus.textContent = getTranslation("form.success");
    } catch (error) {
      console.error("RSVP submission failed:", error);
      elements.formStatus.className = "form-status is-error";
      elements.formStatus.textContent = getTranslation("form.error");
    } finally {
      setSubmitting(false);
    }
  }

  function setupEvents() {
    $$(".language-switcher button").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    elements.musicToggle.addEventListener("click", toggleMusic);
    elements.rsvpForm.addEventListener("submit", submitRsvp);

    elements.music.addEventListener("ended", () => {
      state.musicPlaying = false;
      updateMusicButton();
    });
  }

  function init() {
    const savedLanguage = localStorage.getItem("wedding-language");
    if (savedLanguage && config.translations?.[savedLanguage]) {
      state.language = savedLanguage;
    }

    applyStaticConfig();
    applyTranslations();
    createPetals();
    setupObservers();
    setupEvents();
  }

  init();
})();
