const newPasswordInput = document.getElementById("passwordRegisterNew");
const confirmPasswordInput = document.getElementById("passwordRegisterConfirm");
const errorContainer = document.querySelector(".error-container");
const buttonBlock = document.querySelector(".register__form-button");
let errorMessage = "";

function validatePassword() {
	if (newPasswordInput.value !== confirmPasswordInput.value) {
		errorMessage = "Las contraseñas no coinciden";
		buttonBlock.disabled = true;
		buttonBlock.classList.add("bloqueado");
		updateError();
	} else {
		errorMessage = "";
		buttonBlock.disabled = false;
		buttonBlock.classList.remove("bloqueado");
		updateError();
	}
}

function updateError() {
	errorContainer.innerHTML = errorMessage;
}

confirmPasswordInput.addEventListener("blur", validatePassword);

export const comparePassword = {
	validatePassword,
	updateError,
};
