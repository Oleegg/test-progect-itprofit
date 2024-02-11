export const emailValidation = (email) => {
  const rgExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (rgExp.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const nameValidation = (name) => {
  if (name.length < 2) {
    return false;
  } else {
    return true;
  }
};

export const phoneValidation = () => {
  if (phone.length < 12) {
    return false;
  } else {
    return true;
  }
};
export const textValidation = (text) => {
  if (!text) {
    return false;
  } else {
    return true;
  }
};

export const resetForm = () => {};
