import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperPhoto = new Swiper (".swiper-photo",{
    modules: [Navigation, Scrollbar, Pagination],

    navigation:{
        nextEl:".gallery-next",
        prevEl:".gallery-prev"
    },

    pagination:{
        el:".swiper-pag-photo",
        clickable:true,
        type:"bullets",
    },

    slidesPerView:1,
    scrollbar:{
        el:".swiper-scroll-gallery-photo",

    },
    loop:true,
    speed:600,
});