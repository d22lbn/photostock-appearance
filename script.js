new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  keyboard: {
    enable: true,
    onlyInViewport: true,
  },
  autoHeight: true,
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  // // freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  speed: 500,

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  //    1280: {
  //     slidesPerView: 4,
  //    }
  // }

});