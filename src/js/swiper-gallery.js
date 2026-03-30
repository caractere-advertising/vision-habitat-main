

import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperGallery = new Swiper(".swiper-gallery", {
  modules: [Navigation, Pagination, Scrollbar],

  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },

<<<<<<< HEAD
    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
        type:'bullets'
    },

    slidesPerView: 1.2,
    //centeredSlides: 'auto',
    spaceBetween: 200,
    loop: true,
    speed: 600,
=======
  pagination: {
    el: ".swiper-pagination-gallery",
    clickable: true,
    type: "bullets",
  },

  slidesPerView: 1.2,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  spaceBetween: 200,
  loop: true,
  speed: 600,
>>>>>>> bf87089 (Optimisation section.php + css + ajout nouvelle section page "construire")
});
