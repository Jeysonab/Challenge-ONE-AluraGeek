import { validationInputs } from "./validations/validations.js";
import { selectCategory } from "./validations/select-category.js";

const imageNewProduct = document.getElementById("imageNewProduct");

imageNewProduct.addEventListener("change", (event) => {
	const reader = new FileReader();
	reader.onload = () => {
		const urlField = document.getElementById("imageNewProductUrl");
		urlField.value = reader.result;
		const img = document.createElement("img");
		img.src = reader.result;
		img.style.maxWidth = "200px";
		const preview = document.getElementById("imagePreviewContainer");
		preview.innerHTML = "";
		preview.appendChild(img);
	};
	reader.readAsDataURL(event.target.files[0]);
});

validationInputs;
selectCategory;
