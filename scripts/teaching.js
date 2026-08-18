(() => {
  const track = document.getElementById("caseTrack");
  if (!track) return;

  const slides = [...track.querySelectorAll(".case-slide")];
  const total = slides.length;
  const prevBtn = document.getElementById("casePrev");
  const nextBtn = document.getElementById("caseNext");
  const currentEl = document.getElementById("caseCurrent");
  const totalEl = document.getElementById("caseTotal");
  const dotsWrap = document.getElementById("caseDots");

  let index = 0;
  if (totalEl) totalEl.textContent = String(total);

  // 사례가 하나뿐이면 네비게이션을 숨긴다
  if (total < 2) {
    document.querySelector(".cases-nav")?.remove();
    dotsWrap?.remove();
    return;
  }

  // 점 네비게이션 생성
  const dots = slides.map((slide, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "case-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `${i + 1}번째 사례`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap?.appendChild(dot);
    return dot;
  });

  function sync() {
    if (currentEl) currentEl.textContent = String(index + 1);
    dots.forEach((dot, i) => {
      dot.classList.toggle("is-on", i === index);
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === total - 1;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let animId = null;

  // UA의 smooth 스크롤에 기대지 않고 직접 보간한다 (스냅 컨테이너에서 무시되는 경우가 있음)
  function slideTo(left) {
    if (animId) cancelAnimationFrame(animId);
    const from = track.scrollLeft;
    const delta = left - from;
    // 탭이 백그라운드면 rAF가 멈추므로 즉시 이동시킨다
    if (reduceMotion || document.hidden || Math.abs(delta) < 2) {
      track.scrollLeft = left;
      return;
    }
    const duration = 420;
    let startTime = null;
    const step = (now) => {
      if (startTime === null) startTime = now;
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      track.scrollLeft = from + delta * eased;
      if (t < 1) animId = requestAnimationFrame(step);
      else animId = null;
    };
    animId = requestAnimationFrame(step);
  }

  function goTo(next) {
    index = Math.min(total - 1, Math.max(0, next));
    slideTo(index * track.clientWidth);
    sync();
  }

  prevBtn?.addEventListener("click", () => goTo(index - 1));
  nextBtn?.addEventListener("click", () => goTo(index + 1));

  // 스크롤·스와이프로 옮겼을 때 현재 위치 동기화
  let scrollTimer = null;
  track.addEventListener(
    "scroll",
    () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const width = track.clientWidth || 1;
        const nearest = Math.min(total - 1, Math.max(0, Math.round(track.scrollLeft / width)));
        if (nearest !== index) {
          index = nearest;
          sync();
        }
      }, 90);
    },
    { passive: true }
  );

  // 개요 표에서 특정 사례로 이동
  document.querySelectorAll("[data-goto]").forEach((link) => {
    link.addEventListener("click", () => {
      const target = Number(link.dataset.goto);
      if (Number.isNaN(target)) return;
      window.setTimeout(() => goTo(target), 420);
    });
  });

  // 캐러셀에 포커스가 있을 때만 좌우 키 사용
  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  });

  sync();
})();
