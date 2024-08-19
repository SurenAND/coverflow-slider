import { EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";

export const swiperConfig = {
  modules: [EffectCoverflow, Pagination, Mousewheel],
  grabCursor: true,
  centeredSlides: true,
  speed: 900,
  initialSlide: 2,
  spaceBetween: 600,
  slidesPerView: "auto",
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    clickable: true,
  },
  mousewheel: {
    invert: true,
    thresholdDelta: 50,
    sensitivity: 1,
  },
};
