export const validationInputs = document.querySelectorAll(
	"input, select, textarea"
);

validationInputs.forEach((validationInputs) => {
	validationInputs.addEventListener("input", () => {
		const iconContainer =
			validationInputs.parentElement.querySelector(".icon-container");
		const successIcon = iconContainer.querySelector(".success-icon");
		const errorIcon = iconContainer.querySelector(".error-icon");
		const defaultIcon = iconContainer.querySelector(".default-icon");

		if (validationInputs.value === "") {
			successIcon.style.display = "none";
			errorIcon.style.display = "none";
			defaultIcon.style.display = "block";
			return;
		}

		if (validationInputs.validity.valid) {
			successIcon.style.display = "block";
			errorIcon.style.display = "none";
			defaultIcon.style.display = "none";
		} else {
			successIcon.style.display = "none";
			errorIcon.style.display = "block";
			defaultIcon.style.display = "none";
		}
	});

	validationInputs.addEventListener("focus", () => {
		const iconContainer =
			validationInputs.parentElement.querySelector(".icon-container");
		const successIcon = iconContainer.querySelector(".success-icon");
		const errorIcon = iconContainer.querySelector(".error-icon");
		const defaultIcon = iconContainer.querySelector(".default-icon");

		if (validationInputs.validity.valid || validationInputs.value === "") {
			successIcon.style.display = "none";
			errorIcon.style.display = "none";
			defaultIcon.style.display = "block";
		} else {
			successIcon.style.display = "none";
			errorIcon.style.display = "block";
			defaultIcon.style.display = "none";
		}
	});
});
