window.addEventListener("scroll", () => {
  const btn = document.querySelector(".scroll-top");
  btn.classList.toggle("visible", window.scrollY > 300);
});
