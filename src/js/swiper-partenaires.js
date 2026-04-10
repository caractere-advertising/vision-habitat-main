import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperPart = new Swiper(".swiper-partenaire",{
    modules:[Navigation],

    navigation:{
        nextEl:".gallery-next",
        prevEl:".gallery-prev",

    },
    slidesPerView:5,
    spaceBetween:20,
    loop:true,
    speed:600
})