import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/inputmask.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: true,
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
document.querySelectorAll('.introSlider').forEach(n => {
  const mySwiperIntro = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {
      prevEl: n.closest('.introSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.introSliderW').querySelector('.navArrowNext'),
    },
  });
});


// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      prevEl: n.closest('.productSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.productSliderW').querySelector('.navArrowNext'),
    },
  });
});

// Инициализация слайдера galSlider
document.querySelectorAll('.galSlider').forEach(n => {
  const mySwiperGal = new Swiper(n, {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.galSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.galSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
});

// Инициализация слайдера teamSlider
document.querySelectorAll('.teamSlider').forEach(n => {
  const mySwiperTeam = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 600,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    navigation: {
      prevEl: n.closest('.teamSliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.teamSliderW').querySelector('.navArrowNext'),
    },
  });
});

let catListMore = document.querySelector('.catListMore');
let catList = document.querySelector('.catList');
catListMore?.addEventListener('click', () => {
  catList.classList.add('active');
  catListMore.style.display = 'none';
});

if(document.querySelector('.copyBtn')){
  let clipboard = new ClipboardJS('.copyBtn');
  clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    let parent = e.trigger.closest('.copyBtnW');
    let copyText = parent.querySelector('.copyText');
    console.log(copyText);
    copyText.classList.add('active');
    setTimeout(function () {
      copyText.classList.remove('active');
    }, 2000);
    e.clearSelection();
  });
}


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');
const mobMenuOverlay = document.querySelector('.mob-menu-overlay');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const overlayToggle = function () {
  mobMenuOverlay.classList.toggle('active');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
  overlayToggle();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  overlayToggle();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_nav = target == menu || menu.contains(target);
  let overlay_is_active = mobMenuOverlay.classList.contains('active');

  if (!its_nav && overlay_is_active) {
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    overlayToggle();
  }
});
