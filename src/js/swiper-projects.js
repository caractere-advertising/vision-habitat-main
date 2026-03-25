import Swiper from "swiper";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const numberEl = document.querySelector(".projects-number");

const swiperProjects = new Swiper(".swiper-projects", {
  modules: [Navigation, Scrollbar],

  navigation: {
    prevEl: ".projects-prev",
    nextEl: ".projects-next",
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
