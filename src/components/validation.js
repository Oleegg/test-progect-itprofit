const nameError = document.querySelector(".name__error-text");
const emailError = document.querySelector(".email__error-text");
const phoneError = document.querySelector(".phone__error-text");
const textareaError = document.querySelector(".textarea__error-text");
export const button = document.querySelector(".btn");

export let isGlobalError = true;
let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;
let isTextValid = false;

class Validation {
  emailValidation(email) {
    const rgExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (rgExp.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  nameValidation(name) {
    if (name.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  phoneValidation(phone) {
    if (phone.length < 12) {
      return false;
    } else {
      return true;
    }
  }

  textValidation(text) {
    if (!text) {
      return false;
    } else {
      return true;
    }
  }
}

const valid = new Validation();

export const errorHandler = () => {
  if (isNameValid && isEmailValid && isPhoneValid && isTextValid) {
    isGlobalError = false;
    button.disabled = isGlobalError;
  } else {
    isGlobalError = true;
    button.disabled = isGlobalError;
  }
};

export const isNameError = (e) => {
  const value = e.target.value;
  if (valid.nameValidation(value)) {
    nameError.innerText = "";
    e.target.classList.remove("err");
    isNameValid = true;
  } else {
    e.target.classList.add("err");
    nameError.innerText = "Поле обязательно для заполнения, минимом 2 символа";
    isNameValid = false;
  }
  errorHandler();
};

export const isEmailError = (e) => {
  const value = e.target.value;
  if (valid.emailValidation(value)) {
    emailError.innerText = "";
    e.target.classList.remove("err");
    isEmailValid = true;
  } else {
    e.target.classList.add("err");
    emailError.innerText = "Введите корректный адрес почты";
    isEmailValid = false;
  }
  errorHandler();
};

export const isPhoneError = (e) => {
  const value = e.target.value;
  if (valid.phoneValidation(value)) {
    phoneError.innerText = "";
    e.target.classList.remove("err");
    isPhoneValid = true;
  } else {
    e.target.classList.add("err");
    phoneError.innerText = "Введите корректный номер телефона";
    isPhoneValid = false;
  }
  errorHandler();
};

export const isTextError = (e) => {
  const value = e.target.value;
  if (valid.textValidation(value)) {
    textareaError.innerText = "";
    e.target.classList.remove("err");
    isTextValid = true;
  } else {
    e.target.classList.add("err");
    textareaError.innerText = "Поле обязательно для заполнения";
    isTextValid = false;
  }
  errorHandler();
};
