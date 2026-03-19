// Slider gallery — non importé dans index.js pour l'instant


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperGallery = new Swiper('.swiper-gallery', {
    modules: [Navigation, Pagination],

    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },

    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
    },

    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 600,
});