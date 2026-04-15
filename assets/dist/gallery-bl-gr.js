import Swiper from "swiper";

import {Navigation, scrollbar} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const swiperGalBlGr = new Swiper(".swiper-gal-bl-gr",{
    modules:[Navigation],

    navigation:{
        nextEl:".gallery-next",
        prevEl:".gallery-prev",
    },

    slidesPerView:1,
    
});

