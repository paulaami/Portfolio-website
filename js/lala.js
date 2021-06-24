// get the element to animate
var element = document.getElementById('box');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      element.classList.add('animate');
  }
}


<div class="hobby">
<ul class="hobbies-list">
  <li class="hobbies-item"> <img class="hobbies-svg" src="/svg/laptop.svg" alt="ikona laptopa">
    Projektowanie stron internetowych</li>
  <li class="hobbies-item"> <img class="hobbies-svg" src="/svg/mountain.svg" alt="ikona gór"> Wędrówki po
    górach</li>
  <li class="hobbies-item"> <img class="hobbies-svg" src="/svg/book.svg" alt="ikona książki"> Książki
    &ndash; thrillery</li>
  <li class="hobbies-item"> <img class="hobbies-svg" src="/svg/pizza.svg" alt="ikona pizzy"> Włoska
    kuchnia</li>
</ul>
</div>

//text animation
  const headingValue = "Witaj na mojej stronie!";
  let timeout;
  let step = 1;
  const speed = 150;
  const text = document.querySelector('.aboutme-heading');

  const textAnimation = () => {
    text.innerHTML = headingValue.slice(0, step);
    step++;
    timeout = setTimeout(textAnimation, speed);
    if (step == 24) {
      clearTimeout(timeout);
    }
  }

const observer = new IntersectionObserver(textAnimation, options);
  observer.observe(text);