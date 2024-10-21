import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import carousel from './modules/carousel';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

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
carousel();
calc(100);
sendForm({
  formId: ['form1', 'form2', 'form3'],
  someElem: [{ type: 'block', id: 'total' }],
});
