import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const openMenu = () => {
  const openBtn = document.getElementById("js-open-menu");
  const fullMenu = document.getElementById("js-full-menu");
  const fullMenuChild = fullMenu.firstChild;
  const openedClass = "is-opened";

  if (!openBtn) {
    return;
  }

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle("is-active");
    document.body.classList.toggle("has-menu");

    if (fullMenu) {
      fullMenu.classList.contains(openedClass) ? enableBodyScroll(fullMenuChild) : disableBodyScroll(fullMenuChild);
      fullMenu.classList.toggle(openedClass);
    }
  });
};

export { openMenu };
