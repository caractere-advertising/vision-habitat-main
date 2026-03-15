import Swiper from 'swiper';
import { Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const numberCurrent = document.querySelector('.number-current');

const swiperFullwidth = new Swiper('.swiper-fullwidth', {
    modules: [Pagination, Scrollbar],

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    loop: true,
    speed: 700,
    spaceBetween: 0,

    on: {
        slideChange(swiper) {
            if (numberCurrent) {
                const i = swiper.realIndex + 1;
                numberCurrent.textContent = i < 10 ? '0' + i : String(i);
            }
        },
    },
});
