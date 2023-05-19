const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validForm()) {
    alert("Sukces");
  }
});

const loginField = document.querySelector("[name='login']");
loginField.addEventListener("input", () => {
  requiredValidation(loginField);
  minLengthValidation(loginField, 3);
});

const emailField = document.querySelector("[name='email']");
emailField.addEventListener("input", () => {
  requiredValidation(emailField);
  minLengthValidation(emailField, 2);
  emailValidation(emailField);
});

const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener("input", () => {
  requiredValidation(passwordField);
});

const phoneField = document.querySelector("[name='phone']");
phoneField.addEventListener("input", () => {
  requiredValidation(phoneField);
  minLengthValidation(phoneField, 9);
  maxLengthValidation(phoneField, 9);
});

phoneField.addEventListener("keypress", (event) => {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
  }
  return true;
});

const birthDateField = document.querySelector("[name='birthDate']");
birthDateField.addEventListener("input", () => {
  requiredValidation(birthDateField);
  validAge();
});

const confirmPasswordField = document.querySelector(
  "[name='confirm-password']"
);
confirmPasswordField.addEventListener("input", () => {
  validConfirmPassword();
});

addressField.addEventListener("input", () => {
  requiredValidation(addressField);
  minLengthValidation(addressField, 3);
});
contactAddressField.addEventListener("input", () => {
  requiredValidation(contactAddressField);
  minLengthValidation(contactAddressField, 3);
});

function requiredValidation(field) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!field.value || field.value === "") {
    errorField.innerHTML = "To pole jest wymagane";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function minLengthValidation(field, minLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (field.value.length < minLength) {
    errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function maxLengthValidation(field, maxLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (field.value.length > maxLength) {
    errorField.innerHTML = `To pole musi mieć najwyżej ${maxLength} znaków`;
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function emailValidation(field) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!emailRegex.test(field.value)) {
    errorField.innerHTML = "Proszę podać poprawny adres e-mail.";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function passwordValidation(field) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!passwordRegex.test(field.value)) {
    errorField.innerHTML =
      "Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function validAge() {
  const today = new Date();
  const date = new Date(birthDateField.value);

  var age = today.getFullYear() - date.getFullYear();
  var m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  const errorField = document.querySelector('[name="birthDate"] + span.error');

  errorField.innerHTML = age < 18 ? "Musisz być pełnoletni" : "";

  return age < 18;
}

function validConfirmPassword() {
  const errorField = document.querySelector(
    `[name='confirm-password'] + span.error`
  );
  if (confirmPasswordField.value !== passwordField.value) {
    errorField.innerHTML = "Hasła nie są takie same";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function validForm() {
  if (
    requiredValidation(loginField) ||
    requiredValidation(emailField) ||
    requiredValidation(passwordField) ||
    requiredValidation(phoneField) ||
    requiredValidation(birthDateField) ||
    minLengthValidation(loginField, 2) ||
    minLengthValidation(emailField, 2) ||
    minLengthValidation(passwordField, 8) ||
    minLengthValidation(loginField, 2) ||
    minLengthValidation(phoneField, 9) ||
    maxLengthValidation(phoneField, 9) ||
    emailValidation(emailField) ||
    passwordValidation(passwordField) ||
    validAge() ||
    validConfirmPassword()
  ) {
    return false;
  }

  return true;
}
