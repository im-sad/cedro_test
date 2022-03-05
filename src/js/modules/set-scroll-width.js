const setScrollWidth = () => {
    document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth + "px"
    )
}

window.addEventListener('resize', () => {
  setScrollWidth();
}, true);

export { setScrollWidth };
