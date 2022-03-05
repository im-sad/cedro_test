const passEye = () => {
  const showPassBtns = document.getElementsByClassName('js-passeye');
  const showClass = 'is-show';

  for (let i = 0; i < showPassBtns.length; i++) {
    showPassBtns[i].addEventListener('click', (e) => {
      const target = e.currentTarget;
      const parent = target.parentNode;

      target.classList.toggle(showClass);

      if (parent) {
        const input = parent.querySelector('input');

        input && (input.type = target.classList.contains(showClass) ? "text" : "password");
      }
    });
  }
};

export { passEye };
