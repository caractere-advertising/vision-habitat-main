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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5f5b7df (finetuning 26-03)
=======
>>>>>>> b7891fd (Optimisation section.php + css + ajout nouvelle section page "construire")
    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
        type:'bullets'
    },
<<<<<<< HEAD

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
<<<<<<< HEAD
>>>>>>> d4c7333 (finetuning 26-03)
=======
=======
=======
>>>>>>> 02d2601 (fin 30-3)
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
<<<<<<< HEAD
>>>>>>> bf87089 (Optimisation section.php + css + ajout nouvelle section page "construire")
>>>>>>> f8c007c (Optimisation section.php + css + ajout nouvelle section page "construire")
=======
>>>>>>> 02d2601 (fin 30-3)
=======

    slidesPerView: 1.2,
    //centeredSlides: 'auto',
    spaceBetween: 200,
    loop: true,
    speed: 600,
<<<<<<< HEAD
>>>>>>> 5f5b7df (finetuning 26-03)
=======
=======
=======
>>>>>>> 50d5368 (fin 30-3)
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
<<<<<<< HEAD
>>>>>>> bf87089 (Optimisation section.php + css + ajout nouvelle section page "construire")
>>>>>>> b7891fd (Optimisation section.php + css + ajout nouvelle section page "construire")
=======
>>>>>>> 50d5368 (fin 30-3)
});
