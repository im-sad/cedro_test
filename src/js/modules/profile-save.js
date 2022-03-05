import validateJs from "validate.js";

const profileSave = () => {
  const profileForm = document.getElementById("js-form-profile");

  if (!profileForm) {
    return;
  }

  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const sendBtn = form.querySelector('button[type="submit"]');

    sendBtn && sendBtn.classList.add("has-load");

    console.log("Profile saved");
  });
};

export { profileSave };
