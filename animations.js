// ==========================================================================
// ANIMATIONS
// ==========================================================================
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------------
     Hero load sequence
  --------------------------------------------------------------------- */
  window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
      document.body.classList.add("hero-loaded");
    });
  });

  /* ---------------------------------------------------------------------
     Generic IntersectionObserver reveals
  --------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          if (entry.target.classList.contains("day-icon")) {
            entry.target.classList.add("drawn");
          }
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------------------------------------------------------------------
     Cinematic church story — scroll-progress driven crossfade + parallax
  --------------------------------------------------------------------- */
  const cinema = document.querySelector(".cinema");
  if (cinema) {
    const layers = Array.from(cinema.querySelectorAll(".cinema-layer"));
    const texts = Array.from(cinema.querySelectorAll(".cinema-text"));
    const progressFill = cinema.querySelector(".cinema-progress .fill");
    const petalLayer = cinema.querySelector(".petal-layer");
    let petalsSpawned = false;

    // Each layer/text declares the scroll-progress window (0-1) in which
    // it should be visible, via data-in / data-out attributes.
    function setOpacityByWindow(el, progress, inStart, inEnd, outStart, outEnd) {
      let o = 0;
      if (progress >= inStart && progress <= outEnd) {
        if (progress < inEnd) {
          o = (progress - inStart) / Math.max(inEnd - inStart, 0.0001);
        } else if (progress > outStart) {
          o = 1 - (progress - outStart) / Math.max(outEnd - outStart, 0.0001);
        } else {
          o = 1;
        }
      }
      return Math.max(0, Math.min(1, o));
    }

    function spawnPetals() {
      if (petalsSpawned || !petalLayer) return;
      petalsSpawned = true;
      const count = 34;
      for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "petal";
        const size = 6 + Math.random() * 12;
        p.style.width = size + "px";
        p.style.height = size * 0.8 + "px";
        p.style.left = Math.random() * 100 + "%";
        const dur = 4 + Math.random() * 4;
        const delay = Math.random() * 3;
        const drift = (Math.random() * 2 - 1) * 120;
        p.style.setProperty("--drift", drift + "px");
        p.style.setProperty("--dur", dur + "s");
        p.style.setProperty("--delay", delay + "s");
        p.style.opacity = 0.55 + Math.random() * 0.4;
        p.style.filter = Math.random() > 0.6 ? "blur(1.5px)" : "none";
        p.style.animation = `petalFall var(--dur) linear var(--delay) infinite`;
        petalLayer.appendChild(p);
      }
      if (!document.getElementById("petal-keyframes")) {
        const style = document.createElement("style");
        style.id = "petal-keyframes";
        style.textContent = `
          @keyframes petalFall {
            0% { transform: translate(0, -10vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translate(var(--drift), 110vh) rotate(340deg); opacity: 0.15; }
          }`;
        document.head.appendChild(style);
      }
    }

    function updateCinema() {
      const rect = cinema.getBoundingClientRect();
      const total = cinema.offsetHeight - window.innerHeight;
      let progress = -rect.top / total;
      progress = Math.max(0, Math.min(1, progress));

      if (progressFill) progressFill.style.width = progress * 100 + "%";

      layers.forEach((layer) => {
        const inStart = parseFloat(layer.dataset.inStart || 0);
        const inEnd = parseFloat(layer.dataset.inEnd || 0.1);
        const outStart = parseFloat(layer.dataset.outStart || 0.9);
        const outEnd = parseFloat(layer.dataset.outEnd || 1);
        const o = setOpacityByWindow(layer, progress, inStart, inEnd, outStart, outEnd);
        layer.style.opacity = o;

        const speed = parseFloat(layer.dataset.speed || 0);
        const scaleFrom = parseFloat(layer.dataset.scaleFrom || 1);
        const scaleTo = parseFloat(layer.dataset.scaleTo || 1);
        const localP = Math.max(0, Math.min(1, (progress - inStart) / Math.max(outEnd - inStart, 0.0001)));
        const scale = scaleFrom + (scaleTo - scaleFrom) * localP;
        const translateY = speed * (progress - 0.5) * 100;
        layer.style.transform = `translateY(${translateY}px) scale(${scale})`;
      });

      texts.forEach((t) => {
        const inStart = parseFloat(t.dataset.inStart || 0);
        const inEnd = parseFloat(t.dataset.inEnd || 0.1);
        const outStart = parseFloat(t.dataset.outStart || 0.9);
        const outEnd = parseFloat(t.dataset.outEnd || 1);
        const o = setOpacityByWindow(t, progress, inStart, inEnd, outStart, outEnd);
        t.style.opacity = o;
        t.style.transform = `translateY(${(1 - o) * 16}px)`;
      });

      if (progress > 0.72) spawnPetals();
    }

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateCinema();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
    updateCinema();
  }

  /* ---------------------------------------------------------------------
     Ballroom bokeh particles + slow camera drift
  --------------------------------------------------------------------- */
  const danceSection = document.querySelector(".dance-section");
  if (danceSection) {
    const bokehLayer = danceSection.querySelector(".dance-bokeh");
    if (bokehLayer && !reduceMotion) {
      const n = 16;
      for (let i = 0; i < n; i++) {
        const dot = document.createElement("div");
        dot.className = "bokeh-dot";
        const size = 6 + Math.random() * 20;
        dot.style.width = size + "px";
        dot.style.height = size + "px";
        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";
        dot.style.animation = `bokehFloat ${8 + Math.random() * 8}s ease-in-out ${-Math.random() * 8}s infinite`;
        bokehLayer.appendChild(dot);
      }
      if (!document.getElementById("bokeh-keyframes")) {
        const style = document.createElement("style");
        style.id = "bokeh-keyframes";
        style.textContent = `
          @keyframes bokehFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
            50% { transform: translateY(-24px) scale(1.15); opacity: 0.5; }
          }`;
        document.head.appendChild(style);
      }
    }

    if (!reduceMotion) {
      const bg = danceSection.querySelector(".dance-bg img");
      const io2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) bg.style.transform = "scale(1)";
          });
        },
        { threshold: 0.2 }
      );
      if (bg) {
        bg.style.transition = "transform 6s linear";
        io2.observe(danceSection);
      }
    }
  }
})();
