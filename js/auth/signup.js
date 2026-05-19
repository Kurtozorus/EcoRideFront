const inputPseudo = document.getElementById("pseudoInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const btnSignup = document.getElementById("btn-signup");
const signupForm = document.getElementById("signupForm");
const inputConfirmPassword = document.getElementById("confirmPasswordInput");

inputPseudo.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputConfirmPassword.addEventListener("keyup", validateForm);
btnSignup.disabled = true;

btnSignup.addEventListener("click", userRegistration);

function validateForm() {
  const pseudoOk = validateRequired(inputPseudo);
  const PseudoOk = validatePseudo(inputPseudo);
  const EmailOk = validateRequired(inputEmail);
  const emailOk = validateEmail(inputEmail);
  const PasswordOk = validateRequired(inputPassword);
  const passwordOk = validatePassword(inputPassword);
  const confirmPasswordOk = validateConfirmPassword(
    inputPassword,
    inputConfirmPassword,
  );

  if (
    pseudoOk &&
    PseudoOk &&
    emailOk &&
    EmailOk &&
    passwordOk &&
    PasswordOk &&
    confirmPasswordOk
  ) {
    btnSignup.disabled = false;
  } else {
    btnSignup.disabled = true;
  }
}

function validatePseudo(input) {
  const pseudoRegex = /^(?=.*[a-z])[A-Za-z\d\W]{3,}$/;
  const pseudoUser = input.value;
  if (pseudoUser.match(pseudoRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateRequired(input) {
  if (input.value.trim() != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validatePassword(input) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

function validateConfirmPassword(inputPassword, inputConfirmPassword) {
  if (
    inputConfirmPassword.value === inputPassword.value &&
    inputConfirmPassword.value !== ""
  ) {
    inputConfirmPassword.classList.add("is-valid");
    inputConfirmPassword.classList.remove("is-invalid");
    return true;
  } else {
    inputConfirmPassword.classList.remove("is-valid");
    inputConfirmPassword.classList.add("is-invalid");
    return false;
  }
}

function userRegistration() {
  const modal = new bootstrap.Modal(
    document.getElementById("signupSuccessModal"),
  );
  modal.show();
}
