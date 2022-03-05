import Swiper from "swiper";

const trendsSlider = () => {
  const trendsEl = document.getElementById("js-trends-list");

  if (trendsEl) {
    const trendsSwiper = new Swiper(trendsEl, {
      slidesPerView: "auto",
      grabCursor: true,
    });
  }
};

export { trendsSlider };
