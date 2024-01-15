let slideIndex = 1;

  function showSlides() {
    let slides = document.querySelector('.slider');
    let slidesArray = document.querySelectorAll('.slide');

    if (slideIndex > slidesArray.length) {
      slideIndex = 1;
    }

    if (slideIndex < 1) {
      slideIndex = slidesArray.length;
    }

    slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
  }

  function changeSlide(n) {
    slideIndex += n;
    showSlides();
  }

  // 이미지 자동 슬라이드 설정 (5초 간격)
  setInterval(function() {
    changeSlide(1);
  }, 5000);

  // 초기 슬라이드 표시
  showSlides();

/*-------------------------------------------------------------------------------------- */