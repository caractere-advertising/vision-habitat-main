import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperFullwidth = new Swiper('.swiper-fullwidth',{
    modules : [Navigation, Pagination],
    navigation: {
        nextEl: '.btn-next-full',
        prevEl: '.btn-prev-full',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    speed: 400,
    spaceBetween: 100,
});
