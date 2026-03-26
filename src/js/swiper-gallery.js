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

    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
        type:'bullets'
    },

<<<<<<< HEAD
  slidesPerView: 1.2,
  scrollbar: {
    el: ".swiper-scrollbar-galerie-slider",
  },
  spaceBetween: 200,
  loop: true,
  speed: 600,
=======
    slidesPerView: 1.2,
    //centeredSlides: 'auto',
    spaceBetween: 200,
    loop: true,
    speed: 600,
>>>>>>> d4c7333 (finetuning 26-03)
});
