(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const total = slides.length;
  const currentEl = document.getElementById("current");
  const totalEl = document.getElementById("total");
  const bar = document.getElementById("bar");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let index = 0;
  totalEl.textContent = String(total);

  // deep link: #product / #speed / ?p=7
  const params = new URLSearchParams(location.search);
  const p = Number(params.get("p"));
  if (p >= 1 && p <= total) index = p - 1;
  else if (location.hash === "#product") index = slides.findIndex((s) => s.id === "product");
  else if (location.hash === "#speed") index = slides.findIndex((s) => s.id === "speed");
  if (index < 0) index = 0;

  function render() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });
    currentEl.textContent = String(index + 1);
    bar.style.width = `${((index + 1) / total) * 100}%`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === total - 1;
    history.replaceState(null, "", `?p=${index + 1}`);
  }

  function go(delta) {
    const next = Math.min(total - 1, Math.max(0, index + delta));
    if (next === index) return;
    index = next;
    render();
  }

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "Home") {
      index = 0;
      render();
    } else if (e.key === "End") {
      index = total - 1;
      render();
    }
  });

  // click right/left half of slide to navigate (except links/buttons)
  document.querySelector(".slides").addEventListener("click", (e) => {
    if (e.target.closest("a, button")) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x > rect.width * 0.55) go(1);
    else if (x < rect.width * 0.45) go(-1);
  });

  let touchX = null;
  document.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].clientX;
    },
    { passive: true }
  );
  document.addEventListener(
    "touchend",
    (e) => {
      if (touchX == null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) < 40) return;
      go(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );

  render();
})();
