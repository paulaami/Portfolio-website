document.addEventListener('DOMContentLoaded', function () {
 //TEXT ANIMATION 

 const text = document.querySelector('.aboutme-heading');
 let step = 1;

 const options = {
  root: null,
  rootMargin: '50px',
  threshold: 0,
 }

 const textAnimation = () => {
  const headingValue = "Witaj na mojej stronie!";
  let timeout;
  const speed = 100;

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

 //COUNTER 

 const timelineWrapper = document.querySelector('.timeline-wrapper');
 
 const startCount = entry => {
  
  if (entry[0].isIntersecting) {
   const timelineNumbers = document.querySelectorAll('.timeline-number');

   timelineNumbers.forEach(number => {

    const updateNumber = () => {
     const finalNumber = number.getAttribute('data-number');
     const value = parseInt(number.textContent);
     const speed = finalNumber / 300;

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