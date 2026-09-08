// ==========================================================================
// RSVP FORM
// ==========================================================================
(function () {
  const form = document.getElementById("rsvp-form");
  if (!form) return;

  const feedback = document.getElementById("rsvp-feedback");
  const submitBtn = form.querySelector(".rsvp-submit");

  function currentLang() {
    return (window.getCurrentLang && window.getCurrentLang()) || "hy";
  }

  function showFeedback(key, isError) {
    const t = translations[currentLang()];
    feedback.textContent = t[key];
    feedback.classList.toggle("show", true);
    feedback.style.color = isError ? "#b3554a" : "";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      guestsCount: Number(form.guestsCount.value || 1),
      side: form.side.value,
      attendance: form.attendance.value,
      message: form.message.value.trim(),
      submittedAt: new Date().toISOString(),
    };

    if (!data.firstName || !data.lastName || !data.side || !data.attendance) {
      showFeedback("f_error", true);
      return;
    }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = translations[currentLang()].f_sending;

    try {
      if (CONFIG.rsvpEndpoint) {
        await fetch(CONFIG.rsvpEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } else {
        // No endpoint configured yet — keep the response locally so the
        // designer can verify the flow before wiring up Google Apps Script.
        console.info("RSVP (no endpoint configured):", data);
        await new Promise((r) => setTimeout(r, 500));
      }
      form.reset();
      showFeedback("f_success", false);
    } catch (err) {
      showFeedback("f_error", true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
})();
