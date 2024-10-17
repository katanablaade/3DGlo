const slider = (sliderClasses) => {
  const sliderBlock = document.querySelector(sliderClasses.sliderBlock);
  const slides = document.querySelectorAll(sliderClasses.slide);
  const sliderDots = document.querySelector(sliderClasses.dotsBlock);
  const activeSlide = sliderClasses.activeSlide || 'slide-active';
  let dots;

  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  if (!sliderBlock) {
    return;
  }
  if (slides.length === 0) {
    return;
  }

  const createDot = () => {
    slides.forEach((slide, index) => {
      const newDot = document.createElement('li');
      newDot.classList.add('dot');

      if (index === 0) {
        newDot.classList.add('dot-active');
      }

      sliderDots.append(newDot);
    });
  };

  const prevSlide = (elems, index, strClass) => {
    dots = document.querySelectorAll('.dot');
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSlide);
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, activeSlide);
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches(`.dot, ${sliderClasses.buttonsBlock}`)) {
      return;
    }

    prevSlide(slides, currentSlide, activeSlide);
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, activeSlide);
    nextSlide(dots, currentSlide, 'dot-active');
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches(`.dot, ${sliderClasses.buttonsBlock}`)) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches(`.dot, ${sliderClasses.buttonsBlock}`)) {
        startSlide(timeInterval);
      }
    },
    true
  );

  createDot();
  startSlide(timeInterval);
};
export default slider;
