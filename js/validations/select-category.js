export const selectCategory = document.querySelector("#categoryNewProduct");

selectCategory.addEventListener("change", () => {
	const label = document.querySelector('label[for="categoryNewProduct"]');
	if (selectCategory.value !== "") {
		label.classList.add("active");
	} else {
		label.classList.remove("active");
	}
});
