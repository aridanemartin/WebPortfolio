
/* MENU */
const nav = document.getElementById('nav');
const toggleMenu = document.getElementById('toggle-menu');
const navClose = document.querySelector('.nav__close');
const body = document.querySelector('body');

/* SHOW / HIDE */
toggleMenu.addEventListener('click', () =>{
    nav.classList.add('showmenu');
    toggleMenu.classList.add('hidebtn');
    navClose.classList.add('showbtn');

    body.classList.add('showmenu');
    window.addEventListener('scroll', noScroll);
});

navClose.addEventListener('click', () =>{
    nav.classList.remove('showmenu');
    toggleMenu.classList.remove('hidebtn');
    navClose.classList.remove('showbtn');

    window.removeEventListener('scroll', noScroll);
});

function noScroll() {
    window.scrollTo(0, 0);
}



// Efecto Scroll

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});