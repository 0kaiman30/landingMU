const secondSwiperCreator = () => {
  const urlImage = [
    "https://e0.365dm.com/22/04/2048x1152/skysports-erik-ten-hag_5731082.png?20220406191355",
    "https://www.shutterstock.com/editorial/image-editorial/M2T0Q3x7O1DfIe55ODk1NjU=/manchester-united-fans-display-banners-ahead-game-1500w-14054428br.jpg",
  ];

  const addSlideBackground = (urlImage) => {
    urlImage.forEach((url) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.style.backgroundImage = `url(${url})`;
      document.querySelector(".swiper-2 .swiper-wrapper").append(swiperSlide);
      console.log(`Added slide: ${url}`);
    });
  };

  addSlideBackground(urlImage);

  const swiper2 = new Swiper(".swiper-2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
};

secondSwiperCreator();
