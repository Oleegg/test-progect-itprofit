import IMask from "imask";

const phone = document.querySelector(".phone");
const maskOptions = {
  mask: "+{000}(00)000-00-00",
};
const mask = IMask(phone, maskOptions);
