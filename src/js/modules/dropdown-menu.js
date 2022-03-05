const dropdownMenu = () => {
  const dropdownLinks = document.getElementsByClassName("js-dropdown");

  for (let i = 0; i < dropdownLinks.length; i++) {
    const $el = dropdownLinks[i];

    $el.addEventListener("click", () => {
      $el.classList.toggle("is-opened");
    });
  }
};

export { dropdownMenu };
