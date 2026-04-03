import Swiper from "swiper";
import { Pagination, Scrollbar, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const numberCurrent = document.querySelector(".number-current");

const swiperFullwidth = new Swiper(".swiper-fullwidth", {
  modules: [Pagination, Scrollbar, Autoplay],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  loop: true,
  speed: 700,
  spaceBetween: 0,

  on: {
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
  modules: [Autoplay, Pagination],
  autoplay: true,
  direction: "vertical",
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

const swiperSurMesure = new Swiper(".swiper-partenaire", {
  modules: [Pagination, Autoplay],
  pagination: {
    el: ".swiper-pagination-sur-mesure",
    clickable: true,
  },
  loop: true,
  autoplay: true,
  speed: 600,
});
