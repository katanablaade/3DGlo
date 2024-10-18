import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';

      animate({
        duration: 200,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        },
      });
    });
  });

  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.classList.contains('popup-close')
    ) {
      animate({
        duration: 200,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = 1 - progress;
        },
        onComplete: () => {
          modal.style.display = 'none';
        },
      });
    }
  });
};

export default modal;
