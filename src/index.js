import "./style.scss";
import {
  isEmailError,
  isNameError,
  isPhoneError,
  isTextError,
  isGlobalError,
} from "./components/validation";
import { logIn } from "./components/ajax";

const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const textarea = document.querySelector(".textarea");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");
const modalBtn = document.querySelector(".modal__btn");
const footerBtn = document.querySelector(".footer__btn");

nameInput.addEventListener("blur", isNameError);
emailInput.addEventListener("blur", isEmailError);
phoneInput.addEventListener("blur", isPhoneError);
textarea.addEventListener("blur", isTextError);

modalBtn.addEventListener("click", () => {
  modal.classList.remove("visible");
  modalTitle.classList.remove("modal__red");
  modalTitle.classList.remove("modal__green");
});

footerBtn.addEventListener("click", () => {
  const content = {
    status: "text",
    message: "Какое-то сообщение в модальном окне",
  };
  modalContent(content);
});

const modalContent = (data) => {
  modal.classList.add("visible");
  if (data.status == "error") {
    modalTitle.innerText = "error";
    modalTitle.classList.add("modal__red");
    modalText.innerText = `${data.message}`;
  } else if (data.status == "success") {
    modalTitle.innerText = "success";
    modalTitle.classList.add("modal__green");
    modalText.innerText = `${data.message}`;
  } else {
    modalTitle.innerText = "Какой-то заголовок";
    modalText.innerText = `${data.message}`;
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!isGlobalError) {
    const req = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      text: textarea.value,
    };
    const data = await logIn(req);
    modalContent(data);
  } else {
    console.log(e);
  }
});
