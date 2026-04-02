const burgerBtn = document.querySelector(".hamburger--emphatic");
const mobileMenu = document.querySelector("#megamenu");

const headerNav = document.querySelector(".header-nav");
const headerActions = document.querySelector(".header-actions");

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("is-open");

    burgerBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-open");
    headerNav.style.opacity = isOpen ? 1 : 0;
    headerActions.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? "" : "hidden";
  });
}

if (burgerBtnClose && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  });
}
