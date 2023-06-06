import { validationInputs } from "./validations/validations.js";
import { comparePassword } from "./validations/password-validation.js";

const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const loginLink = document.querySelector(".login__link-register");
const registerLink = document.querySelector(".register__link-login");

function showLogin() {
	loginSection.style.display = "block";
	registerSection.style.display = "none";
}

function showRegister() {
	registerSection.style.display = "block";
	loginSection.style.display = "none";
}

loginLink.addEventListener("click", showRegister);
registerLink.addEventListener("click", showLogin);

validationInputs;
comparePassword;
