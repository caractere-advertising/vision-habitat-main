document.addEventListener("DOMContentLoaded", function () {
  function initAccordions() {
    const accordions = document.getElementsByClassName("accordion");

    for (let i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function () {
        const panel = this.nextElementSibling;
        const isOpen = this.classList.contains("active");

        // Ferme tous les autres
        for (let j = 0; j < accordions.length; j++) {
          const otherAccordion = accordions[j];
          const otherPanel = otherAccordion.nextElementSibling;

          otherAccordion.classList.remove("active");
          otherPanel.style.maxHeight = null;
        }

        // Si celui-ci n'était pas déjà ouvert, ouvre-le
        if (!isOpen) {
          this.classList.add("active");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }

        panel.addEventListener(
          "transitionend",
          () => {
            if (typeof ScrollTrigger !== "undefined") {
              ScrollTrigger.refresh();
            }
          },
          { once: true },
        );

        if (getComputedStyle(panel).transitionDuration === "0s") {
          if (typeof ScrollTrigger !== "undefined") {
            ScrollTrigger.refresh();
          }
        }
      };
    }
  }

  initAccordions();
});
