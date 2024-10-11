const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  let count = 0;
  let idInterval;

  const animationModalOpen = () => {
    count++;
    idInterval = requestAnimationFrame(animationModalOpen);

    if (count < 30) {
      modal.style.opacity = count / 30;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  const animationModalClose = () => {
    count--;
    modal.style.opacity = count / 30;

    if (count > 0) {
      idInterval = requestAnimationFrame(animationModalClose);
    } else {
      modal.style.display = 'none';
      cancelAnimationFrame(idInterval);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      count = 0;
      if (document.documentElement.clientWidth > 768) {
        requestAnimationFrame(animationModalOpen);
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    if (document.documentElement.clientWidth > 768) {
      count = 30;
      requestAnimationFrame(animationModalClose);
    } else {
      modal.style.display = 'none';
    }
  });
};

export default modal;
