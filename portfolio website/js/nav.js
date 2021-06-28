document.addEventListener('DOMContentLoaded', function () {
  //ADD SHADOW TO NAV
  //nav items
  const navList = document.querySelector('.navbar-collapse')
  const allNavItems = document.querySelectorAll('.nav-link');

  function addShadow() {
    const nav = document.querySelector('.navbar');
    const btn = document.querySelector('.navbar-toggler');

    if (window.scrollY < 1) {
      nav.classList.remove('shadow-bg');
      btn.addEventListener('click', function () {
        nav.classList.add('shadow-bg');
      })
    } else if (window.scrollY >= 1) {
      nav.classList.add('shadow-bg');
    }
  }

  window.addEventListener('scroll', addShadow);

  //close nav
  allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')));

});