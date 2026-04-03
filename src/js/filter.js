document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const articles = document.querySelectorAll(".actu-card");

  if (!filterButtons.length || !articles.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      articles.forEach((article) => {
        const shouldShow =
          filterValue === "all" ||
          article.classList.contains(`item-${filterValue}`);

        if (shouldShow) {
          article.classList.remove("is-gone");

          // petit délai pour relancer l'animation
          requestAnimationFrame(() => {
            article.classList.remove("is-hidden");
          });
        } else {
          article.classList.add("is-hidden");

          setTimeout(() => {
            article.classList.add("is-gone");
          }, 200); // durée = transition CSS
        }
      });
    });
  });
});
