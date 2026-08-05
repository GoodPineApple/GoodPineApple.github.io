(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Mobile nav ----------
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  function closeNav() {
    nav?.classList.remove("nav-open");
    document.body.style.overflow = "";
    toggle?.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    nav?.classList.add("nav-open");
    document.body.style.overflow = "hidden";
    toggle?.setAttribute("aria-expanded", "true");
  }

  toggle?.addEventListener("click", () => {
    if (nav?.classList.contains("nav-open")) closeNav();
    else openNav();
  });

  navLinks.forEach((link) => link.addEventListener("click", closeNav));

  // ---------- Lenis smooth scroll (소풍 사이트와 동일) ----------
  if (prefersReducedMotion || typeof Lenis === "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
    return;
  }

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.4,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Anchor links → Lenis scrollTo (nav offset 보정)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      closeNav();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h"), 10) || 72;
      lenis.scrollTo(target, { offset: -navHeight - 8, duration: 1.25 });
      history.replaceState(null, "", hash);
    });
  });

  // Mobile menu open 시 Lenis 정지
  const observer = new MutationObserver(() => {
    if (nav?.classList.contains("nav-open")) lenis.stop();
    else lenis.start();
  });
  if (nav) observer.observe(nav, { attributes: true, attributeFilter: ["class"] });
})();
