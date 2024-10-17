import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';

const sliderClasses = {
  sliderBlock: '.portfolio-content',
  slide: '.portfolio-item',
  activeSlide: 'portfolio-item-active',
  dotsBlock: '.portfolio-dots',
  buttonsBlock: '.portfolio-btn',
};

timer('31 december 2024');
menu();
modal();
validate();
tabs();
slider(sliderClasses);
