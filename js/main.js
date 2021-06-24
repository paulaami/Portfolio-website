document.addEventListener('DOMContentLoaded', function () {
  //COOKIE ALERT
  const cookieAlert = document.querySelector('.cookie-alert');
  const cookieBtn = cookieAlert.querySelector('.cookie-btn');

  const handleCookies = () => {
    const cookies = localStorage.getItem('cookie');
    if (cookies) {
      cookieAlert.classList.add('hide');
    }
  }
  
  const handleAlert = () => {
    localStorage.setItem('cookie', 'true');
    cookieAlert.style.animation="hide-alert 2s forwards";
  }

  cookieBtn.addEventListener('click', handleAlert);
  handleCookies();


  // SCROLL TOP
  const btnTop = document.querySelector('.btn-top');
  
  const handleScroll = () => {
    //number of scrolled pixels
    const scroll = window.scrollY;

    //page height - viewport height
    const remainToScroll = document.body.getBoundingClientRect().height - window.innerHeight;

    //scroll percentage value
    const scrollHeight = Math.floor((scroll / remainToScroll) * 100);

    if (scrollHeight > 25) {
      btnTop.classList.add('active');
    } else {
      btnTop.classList.remove('active');
    }
  }

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', handleScroll);
  btnTop.addEventListener('click', scrollToTop);

  //ADD SHADOW TO NAV
  //nav items
  const navList = document.querySelector('.navbar-collapse')
  const allNavItems = document.querySelectorAll('.nav-link');

  function addShadow() {
    const nav = document.querySelector('.navbar');
    const btn = document.querySelector('.navbar-toggler');

    if (window.scrollY < 100) {
      nav.classList.remove('shadow-bg');
      btn.addEventListener('click', function () {
        nav.classList.add('shadow-bg');
      })
    } else if (window.scrollY >= 100) {
      nav.classList.add('shadow-bg');
    }
  }

  window.addEventListener('scroll', addShadow);

  //close nav
  allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')));


  //SLIDER
  //slider items
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

  //TEXT ANIMATION - intersection observer
  const headingValue = "Witaj na mojej stronie!";
  let timeout;
  let step = 1;
  const speed = 100;
  const text = document.querySelector('.aboutme-heading');

  const options = {
    rootMargin: '-250px'
  }

  const textAnimation = () => {
    text.innerHTML = headingValue.slice(0, step);
    step++;
    timeout = setTimeout(textAnimation, speed);
    if (step == 24) {
      clearTimeout(timeout);
    }
  }

  const startAnimation = entry => {
    if (entry[0].isIntersecting) {
      textAnimation();
    }
  }

  const observerOne = new IntersectionObserver(startAnimation, options);
  observerOne.observe(text);


  //COUNTER - intersection observer

  const timelineNumbers = document.querySelectorAll('.timeline-number');
  const timelineWrapper = document.querySelector('.timeline-wrapper');

  const startCount = entry => {

    if (entry[0].isIntersecting) {
      timelineNumbers.forEach(number => {

        const updateNumber = () => {
          const finalNumber = number.getAttribute('data-number');
          const value = parseInt(number.textContent);
          const speed = finalNumber / 200;

          if (value < finalNumber) {
            number.textContent = `${Math.floor(value + speed)}`;
            setTimeout(updateNumber, 1);
          } else {
            number.textContent = finalNumber;
          }
        }

        updateNumber();

      })
    }
  }

  const observerTwo = new IntersectionObserver(startCount, options);
  observerTwo.observe(timelineWrapper);
});