var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 60,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        965:{
            slidesPerView: 2,
            
        },
        1550:{
            slidesPerView: 3,
            
        }
    },
    loop: true,
  });

  