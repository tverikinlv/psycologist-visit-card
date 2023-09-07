import mobileNav from './modules/mobile-nav.js';
import switcher from './modules/switcher.js';

mobileNav();
switcher('[data-feature-switcher]','[data-feature-name]')
switcher('[data-pricing-switcher]','[data-description]');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });