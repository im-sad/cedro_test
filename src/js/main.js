// Import scripts
import { likeBtn } from "./modules/like-btn";
import { openMenu } from "./modules/open-menu";
import { dropdownMenu } from "./modules/dropdown-menu";
import { passEye } from "./modules/pass-eye";
import { profileSave } from "./modules/profile-save";
import { setScrollWidth } from "./modules/set-scroll-width";
import { trendsSlider } from "./modules/trends-slider.js";

// Init scripts
likeBtn();
openMenu();
dropdownMenu();
passEye();
profileSave();
trendsSlider();


document.addEventListener("DOMContentLoaded", function() {
  setScrollWidth();
});