const nav = document.querySelector('.navbar');

const burger = nav.querySelector('.burger');

const menu = nav.querySelector('.menu')

console.log(nav.querySelector('.menu'));

function navOpen() {

  if (nav.className === 'navbar')
  {nav.className = 'navbar active';
menu.style.display = 'grid';}
  else if (nav.className === 'navbar active') {nav.className = 'navbar'
menu.style.display = 'none';};
}

function navShut() {
  if (nav.className === 'navbar active')
  {nav.className = 'navbar'
menu.style.display = 'none';};
}

burger.addEventListener("click", navOpen, false);

const closeCross = nav.querySelector('.close-menu');

closeCross.addEventListener("click", navShut, false);
