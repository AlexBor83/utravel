const tpggleModal = () => {
  console.log('modal');

  const body = document.querySelector('body');
  const menu = document.querySelector('menu');
  const modalLogin = document.querySelector('.login');
  const createAcount = document.querySelector('.create-account');

  if (!menu) {
    return;
  }

  menu.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('menu__link--login')) {
      console.log('login');
      modalLogin.classList.add('login--active');
      body.classList.add('fixed-page');
    } else if (e.target.classList.contains('menu__link--sign-up')) {
      console.log('account');
      createAcount.classList.add('create-account--active');
      body.classList.add('fixed-page');
    }
  });
};

export { tpggleModal };
