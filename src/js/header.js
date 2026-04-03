const burgerBtn = document.querySelector(".hamburger--emphatic");
const mobileMenu = document.querySelector("#megamenu");

const headerNav = document.querySelector(".header-nav");
const headerActions = document.querySelector(".header-actions");

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("is-open");

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
    burgerBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-open");
    headerNav.style.opacity = isOpen ? 1 : 0;
    headerActions.classList.toggle("is-open");
    document.body.style.overflow = isOpen ? "" : "hidden";
  });
<<<<<<< HEAD
}

// if (burgerBtnClose && mobileMenu) {
//   burgerBtn.addEventListener("click", () => {
//     burgerBtn.classList.remove("is-active");
//     mobileMenu.classList.remove("is-open");
//     document.body.style.overflow = "";
//   });
// }
=======
        burgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });
=======
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
}

<<<<<<< HEAD
if (burgerBtnClose && mobileMenu) {
<<<<<<< HEAD
    burgerBtnClose.addEventListener('click', () => {
        burgerBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
    });
}
>>>>>>> 69c6bb2 (burger-menu finetuning)
=======
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  });
}
>>>>>>> 6bdd130 (Quick fix : Ajout flêche .svg pour cta + menu burger)
=======
// if (burgerBtnClose && mobileMenu) {
//   burgerBtn.addEventListener("click", () => {
//     burgerBtn.classList.remove("is-active");
//     mobileMenu.classList.remove("is-open");
//     document.body.style.overflow = "";
//   });
// }
>>>>>>> 534bcab (ajout filtre page actualités + debut animations.css)
