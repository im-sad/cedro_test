const likeBtn = () => {
  const likeBtns = document.getElementsByClassName('js-prod-like');

  for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.classList.toggle("is-active");
    });
  }
};

export { likeBtn };
