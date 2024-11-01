const menu = () => {
  const menu = document.querySelector('menu');
  const menuItems = menu.querySelectorAll('ul>li>a');
  const smoothBtn = document.querySelector('a[href="#service-block"]');
  const body = document.querySelector('body');

  const toggleMenu = () => {
    const handleMenu = () => {
      menu.classList.toggle('active-menu');
    };

    const smoothScroll = (element) => {
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      }
    };

    body.addEventListener('click', (e) => {
      if (e.target.closest('.menu')) {
        handleMenu();
        return;
      }
      if (e.target.closest('a[href="#service-block"')) {
        e.preventDefault();
        const targetId = smoothBtn.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        smoothScroll(targetElement);
      }

      if (e.target.closest('.close-btn')) {
        e.preventDefault();
        handleMenu();
        return;
      }
      if (!e.target.closest('menu')) {
        menu.classList.remove('active-menu');
      }
      if (e.target.closest('ul>li>a')) {
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
  };

  toggleMenu();
};

export default menu;
