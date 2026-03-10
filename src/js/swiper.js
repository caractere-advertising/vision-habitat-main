import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperFullwidth = new Swiper('.swiper-fullwidth',{
    modules : [Navigation, Pagination, Scrollbar],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    speed: 400,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    spaceBetween: 100,
});
