// signup form
console.log("sign up js");

const signupPath = "/codequizmaster/signup.php";
import {
  validateConfirmPassword,
  validateEmail,
  validateGender,
  validateName,
  validatePassword,
  validateUsername,
} from "./validation.js";

if (signupPath === current) {
  const name = document.querySelector("#name");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const gender = document.querySelector("#gender");
  const password = document.querySelector("#password");
  const cpassword = document.querySelector("#cpassword");
  const signupBtn = document.querySelector("#signup-btn");
  const signupForm = document.querySelector("#signup-form");

  const formField = document.querySelector(".form-field");

  const nameError = document.querySelector(".name-error");
  const usernameError = document.querySelector(".username-error");
  const emailError = document.querySelector(".email-error");
  const genderError = document.querySelector(".gender-error");
  const passwordError = document.querySelector(".password-error");
  const cpasswordError = document.querySelector(".cpassword-error");

  const formMsg = document.querySelector(".form-msg");

  const showPasswordIcon = document.querySelector("#show-password-icon");
  const showCpasswordIcon = document.querySelector("#show-cpassword-icon");

  const hidePasswordIcon = document.querySelector("#hide-password-icon");
  const hideCpasswordIcon = document.querySelector("#hide-cpassword-icon");

  // password toggle section

  showPasswordIcon?.addEventListener("click", () => {
    password.setAttribute("type", "text");
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "inline";
  });

  showCpasswordIcon?.addEventListener("click", () => {
    cpassword.setAttribute("type", "text");
    showCpasswordIcon.style.display = "none";
    hideCpasswordIcon.style.display = "inline";
  });

  hidePasswordIcon?.addEventListener("click", () => {
    password.setAttribute("type", "password");
    hidePasswordIcon.style.display = "none";
    showPasswordIcon.style.display = "inline";
  });

  hideCpasswordIcon?.addEventListener("click", () => {
    cpassword.setAttribute("type", "password");
    hideCpasswordIcon.style.display = "none";
    showCpasswordIcon.style.display = "inline";
  });

  let formErrors = new Set();

  const checkName = (name) => {
    const isErrorInName = validateName(name);

    if (isErrorInName.length > 0) {
      nameError.style.display = "flex";
      nameError.children[1].innerHTML = isErrorInName[0];
      formErrors.add("name");
    } else {
      formErrors.delete("name");
      nameError.style.display = "none";
    }
    formBtnStatus();
  };

  const checkUsername = (username) => {
    const isErrorInUsername = validateUsername(username);

    if (isErrorInUsername.length > 0) {
      usernameError.style.display = "flex";
      usernameError.children[1].innerHTML = isErrorInUsername[0];
      formErrors.add("username");
    } else {
      formErrors.delete("username");
      usernameError.style.display = "none";
    }
    formBtnStatus();
  };

  const checkEmail = (email) => {
    const isErrorInEmail = validateEmail(email);

    if (isErrorInEmail.length > 0) {
      emailError.style.display = "flex";
      emailError.children[1].innerHTML = isErrorInEmail[0];
      formErrors.add("email");
    } else {
      formErrors.delete("email");
      emailError.style.display = "none";
    }
    formBtnStatus();
  };

  const checkGender = (gender) => {
    const isErrorInGender = validateGender(gender);

    if (isErrorInGender.length > 0) {
      genderError.style.display = "flex";
      genderError.children[1].innerHTML = isErrorInGender[0];
      formErrors.add("gender");
    } else {
      formErrors.delete("gender");
      genderError.style.display = "none";
    }
    formBtnStatus();
  };

  const checkPassword = (password) => {
    const isErrorInPassword = validatePassword(password);

    if (isErrorInPassword.length > 0) {
      passwordError.style.display = "flex";
      passwordError.children[1].innerHTML = isErrorInPassword[0];
      formErrors.add("password");
    } else {
      formErrors.delete("password");
      passwordError.style.display = "none";
    }
    formBtnStatus();
  };

  const checkConfirmPassword = (password, cpassword) => {
    const isErrorInCpassword = validateConfirmPassword(password, cpassword);

    if (isErrorInCpassword.length > 0) {
      cpasswordError.style.display = "flex";
      cpasswordError.children[1].innerHTML = isErrorInCpassword[0];
      formErrors.add("cpassword");
    } else {
      formErrors.delete("cpassword");
      cpasswordError.style.display = "none";
    }
    formBtnStatus();
  };

  function setFormMessage(color, message) {
    formMsg.style.display = "block";
    formMsg.style.borderColor = color;
    formMsg.style.color = color;
    formMsg.textContent = message;
  }

  function formBtnStatus() {
    if (formErrors.size > 0) {
      signupBtn.disabled = true;
      signupBtn.textContent = "Fix errors to proceed";
    } else {
      signupBtn.disabled = false;
      signupBtn.textContent = "Create Account";
    }
  }

  name.addEventListener("input", () => checkName(name.value));
  username.addEventListener("input", () => checkUsername(username.value));
  email.addEventListener("input", () => checkEmail(email.value));
  gender.addEventListener("change", () => checkGender(gender.value));
  password.addEventListener("input", () => checkPassword(password.value));
  cpassword.addEventListener("input", () =>
    checkConfirmPassword(password.value, cpassword.value)
  );

  signupForm.addEventListener("input", () => {
    formMsg.style.display = "none";
  });

  signupForm.addEventListener("change", () => {
    formMsg.style.display = "none";
  });

  // final form submission section
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData.entries());

    checkName(data.name);
    checkUsername(data.username);
    checkEmail(data.email);
    checkGender(data.gender);
    checkPassword(data.password);
    checkConfirmPassword(data.password, data.cpassword);

    if (formErrors.size === 0) {
      setFormMessage("green", "Form Submitted Successfully");
    } else {
      setFormMessage("red", "Fix the errors to proceed!");
    }
  });

  signupForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });
}
