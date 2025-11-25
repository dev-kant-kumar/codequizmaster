// signin form
console.log("sign in js");

import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "./validation.js";

const identifier = document.querySelector("#identifier");
const password = document.querySelector("#password");
const signinBtn = document.querySelector("#signin-btn");
const signinForm = document.querySelector("#signin-form");

const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");

const formMsg = document.querySelector(".form-msg");

const showPasswordIcon = document.querySelector("#show-password-icon");
const hidePasswordIcon = document.querySelector("#hide-password-icon");

// password toggle section

showPasswordIcon?.addEventListener("click", () => {
  password.setAttribute("type", "text");
  showPasswordIcon.style.display = "none";
  hidePasswordIcon.style.display = "inline";
});

hidePasswordIcon?.addEventListener("click", () => {
  password.setAttribute("type", "password");
  hidePasswordIcon.style.display = "none";
  showPasswordIcon.style.display = "inline";
});

let formErrors = new Set();

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

function setFormMessage(color, message) {
  formMsg.style.display = "block";
  formMsg.style.borderColor = color;
  formMsg.style.color = color;
  formMsg.textContent = message;
}

function formBtnStatus() {
  if (formErrors.size > 0) {
    signinBtn.disabled = true;
    signinBtn.textContent = "Fix errors to proceed";
  } else {
    signinBtn.disabled = false;
    signinBtn.textContent = "Create Account";
  }
}

identifier.addEventListener("input", () => {
  if (identifier.value.includes("@")) {
    checkEmail(identifier.value);
  } else {
    checkUsername(identifier.value);
  }
});
password.addEventListener("input", () => checkPassword(password.value));

signinForm.addEventListener("input", () => {
  formMsg.style.display = "none";
});

signinForm.addEventListener("change", () => {
  formMsg.style.display = "none";
});

// final form submission section
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(signinForm);
  const data = Object.fromEntries(formData.entries());

  checkUsername(data.identifier);
  checkPassword(data.password);

  if (formErrors.size === 0) {
    loginAccount(formData);
  } else {
    setFormMessage("red", "Fix the errors to proceed!");
  }
});

signinForm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

const loginAccount = async (user) => {
  const url = "controllers/signin.php";
  signinBtn.textContent = "Sigin....";
  try {
    const res = await fetch(url, {
      method: "POST",
      body: user,
    });

    const data = await res.json();
    console.log("data : ", data);
    if (data.status) {
      setFormMessage("green", "Login Successful");
      console.log("user : ", data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "dashboard.php";
    } else {
      if (data.error.includes("User not found!")) {
        setFormMessage("red", "User not found!");
      } else if (data.error.includes("Incorrect Password!")) {
        setFormMessage("red", "Incorrect Password!");
      } else {
        console.log("error :", data.error);
      }
    }
  } catch (error) {
    console.log("Having error while loging", error);
    setFormMessage("red", "Something went wrong. Try again!");
  } finally {
    signinBtn.textContent = "Sigin";
  }
};
