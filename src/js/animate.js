document.addEventListener("DOMContentLoaded", () => {
  const selectors = [
    { selector: ".from-left", class: "fade-in-left" },
    { selector: ".from-right", class: "fade-in-right" },
    { selector: ".from-top", class: "fade-in-top" },
    { selector: ".from-bottom", class: "fade-in-bottom" },
  ];

  // Ajout de la classe invisible sur tous les éléments concernés
  selectors.forEach(({ selector }) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("invisible");
    });
  });

  // Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          // Trouver la bonne animation
          selectors.forEach(({ selector, class: animClass }) => {
            if (el.matches(selector)) {
              el.classList.remove("invisible");
              el.classList.add(animClass);
            }
          });
        }
      });
    },
    {
      root: null,
      rootMargin: "-200px", // équivalent de inView.offset(150)
      threshold: 0,
    },
  );

  // Observer tous les éléments
  selectors.forEach(({ selector }) => {
    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });
  });
});
