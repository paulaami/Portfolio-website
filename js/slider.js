document.addEventListener('DOMContentLoaded', function () {
  //SLIDER

  const slider = document.querySelector('.slider-wrapper')
  const leftBtn = document.querySelector('.btn-left');
  const rightBtn = document.querySelector('.btn-right');
  const sliderImg = slider.querySelectorAll('.slider-img');

  let index = 0
  let timer = setInterval(autoPlay, 3000);

  function changeSlide() {
    for (let i = 0; i < sliderImg.length; i++) {
      sliderImg[i].classList.remove("active");
    }

    sliderImg[index].classList.add("active");
  }


  const prevSlide = () => {
    if (index == 0) {
      index = sliderImg.length - 1;
    } else {
      index--;
    }
    changeSlide();
  }

  function nextSlide() {
    if (index == sliderImg.length - 1) {
      index = 0;
    } else {
      index++;
    }
    changeSlide();
  }

  function autoPlay() {
    nextSlide();
  }

  function resetTimer() {
    // stop timer 
    clearInterval(timer);
    // start again timer
    timer = setInterval(autoPlay, 4000);
  }

  function indicateSlide(element) {
    index = element.id;
    changeSlide();
    resetTimer();
  }

  leftBtn.addEventListener("click", function () {
    prevSlide();
    resetTimer();
  })

  rightBtn.addEventListener("click", function () {
    nextSlide();
    resetTimer();
  })

});