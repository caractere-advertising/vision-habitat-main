import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperPart = new Swiper(".swiper-partenaire",{
    modules:[Navigation, Autoplay],

    navigation:{
        nextEl:".gallery-next",
        prevEl:".gallery-prev",

    },
    slidesPerView:5,
    spaceBetween:20,
    loop:true,
    speed:600,
    autoplay: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView:5,
            spaceBetween:20,
        }
    }
})