import Swiper from "swiper";
import {
  Pagination,
  Scrollbar,
  Navigation,
  Autoplay,
  Parallax,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const sliderFullwidthSection = document.querySelector(".slider-fullwidth");
const numberCurrent = document.querySelector(".number-current");

const swiperFullwidth = new Swiper(".swiper-fullwidth", {
  modules: [Pagination, Scrollbar, Autoplay, Parallax],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  parallax: true,
  autoplay: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  loop: true,
  speed: 1200,
  spaceBetween: 0,

  on: {
    init(swiper) {
      if (sliderFullwidthSection) {
        sliderFullwidthSection.classList.remove("is-loading");
        sliderFullwidthSection.classList.add("is-loaded");
      }

      if (numberCurrent) {
        const i = swiper.realIndex + 1;
        numberCurrent.textContent = i < 10 ? "0" + i : String(i);
      }
    },

    slideChange(swiper) {
      if (numberCurrent) {
        const i = swiper.realIndex + 1;
        numberCurrent.textContent = i < 10 ? "0" + i : String(i);
      }
    },
  },
});

const swiperReference = new Swiper(".swiper-reference", {
  modules: [Navigation, Autoplay],
  autoplay: true,
  speed: 600,
});

const swiperVertical = new Swiper(".swiper-vertical", {
  modules: [Autoplay, Pagination, Parallax],
  autoplay: true,
  direction: "vertical",
  parallax: true,
  speed: 1200,
  pagination: {
    el: ".swiper-pagination-vertical",
    clickable: true,
  },
});

const swiperEtapesEl = document.querySelector(".swiper-etapes");

if (swiperEtapesEl) {
  const swiperEtapes = new Swiper(".swiper-etapes", {
    modules: [Navigation, Scrollbar],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: false,
    allowTouchMove: true,

    navigation: {
      prevEl: ".swiper-step-prev",
      nextEl: ".swiper-step-next",
    },

    scrollbar: {
      el: ".swiper-step-scrollbar",
      draggable: true,
      dragSize: "auto",
    },

    on: {
      init: function () {
        animateStepContent(this);
      },
      slideChangeTransitionStart: function () {
        resetStepContent(this);
      },
      slideChangeTransitionEnd: function () {
        animateStepContent(this);
      },
    },
  });

  function resetStepContent(swiper) {
    swiper.slides.forEach((slide) => {
      const img = slide.querySelector(".block-img");
      const text = slide.querySelector(".cold");

      if (img) img.classList.remove("is-visible");
      if (text) text.classList.remove("is-visible");
    });
  }

  function animateStepContent(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const img = activeSlide.querySelector(".block-img");
    const text = activeSlide.querySelector(".cold");

    if (img) img.classList.add("is-visible");
    if (text) text.classList.add("is-visible");
  }
}

const swiperSurMesure = new Swiper(".swiper-partenaire-sur-mesure", {
  modules: [Pagination, Autoplay],
  pagination: {
    el: ".swiper-pagination-sur-mesure",
    clickable: true,
  },
  loop: true,
  autoplay: true,
  speed: 600,
});

const swiperPart = new Swiper(".swiper-partenaire", {
  modules: [Navigation, Autoplay],

  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  speed: 600,
  autoplay: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

/* Swiper Projects */

const numberEl = document.querySelector(".projects-number");

const swiperProjects = new Swiper(".swiper-projects", {
  modules: [Navigation, Scrollbar],

  navigation: {
    prevEl: ".projects-prev",
    nextEl: ".projects-next",
  },

  scrollbar: {
    el: ".swiper-scrollbar-projects",
    draggable: true,
  },

  loop: false,
  speed: 600,

  on: {
    slideChange(swiper) {
      if (numberEl) {
        const i = swiper.realIndex + 1;
        numberEl.textContent = i < 10 ? "0" + i : String(i);
      }
    },
  },
});

/* Swiper gallery two columns */

const swiperPhoto = new Swiper(".swiper-photo", {
  modules: [Navigation, Scrollbar, Pagination],

  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },

  pagination: {
    el: ".swiper-pag-photo",
    clickable: true,
    type: "bullets",
  },

  slidesPerView: 1,
  scrollbar: {
    el: ".swiper-scroll-gallery-photo",
  },
  loop: true,
  speed: 600,
});

/* Swiper gallery */

const swiperGallery = new Swiper(".swiper-gallery", {
  modules: [Navigation, Pagination, Scrollbar],

  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },

  pagination: {
    el: ".swiper-pagination-gallery",
    clickable: true,
    type: "bullets",
  },

  slidesPerView: 1.2,
  scrollbar: {
    el: ".swiper-scrollbar-galerie-slider",
  },
  spaceBetween: 200,
  loop: true,
  speed: 600,
});
