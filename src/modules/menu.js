const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const smoothBtn = document.querySelector('a[href="#service-block"');

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  smoothBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = smoothBtn.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = menuItem.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      }

      handleMenu();
    });
  });
};

export default menu;
