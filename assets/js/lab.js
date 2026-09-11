(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#lab-menu');
  if (!button || !menu) return;
  document.documentElement.classList.add('js');
  button.hidden = false;
  const setOpen = open => {
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
})();
