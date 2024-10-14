const menu = () => {
  const menu = document.querySelector('menu');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const smoothBtn = document.querySelector('a[href="#service-block"]');
  const main = document.querySelector('main');

  main.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) {
      handleMenu();
    } else if (e.target.closest('a[href="#service-block"')) {
      e.preventDefault();
      const targetId = smoothBtn.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      smoothScroll(targetElement);
    }
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('.close-btn')) {
      handleMenu();
    } else if (e.target.closest('ul>li>a')) {
      e.preventDefault();
      menuItems.forEach((menuItems) => {
        const menuItem = e.target.closest('ul>li>a');
        if (menuItems === menuItem) {
          const targetId = menuItem.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          smoothScroll(targetElement);
          handleMenu();
        }
      });
    }
  });

  const smoothScroll = (element) => {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };
};

export default menu;
