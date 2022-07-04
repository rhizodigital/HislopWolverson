// import Swiper JS
import Swiper, { Navigation, Autoplay } from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('#testimonials', {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    autoplay: {
        delay: 9000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true
});

