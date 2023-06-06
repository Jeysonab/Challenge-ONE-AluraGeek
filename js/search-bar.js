const searchBar = document.querySelector(".header__search-bar");
const searchInput = searchBar.querySelector(".search-bar__input");

searchBar.addEventListener("submit", (event) => {
	event.preventDefault();

	const searchValue = searchInput.value;

	if (searchValue) {
		const search = searchValue.toLowerCase();
		window.location.href = `products.html?search=${search}`;
	}
});

const searchParams = new URLSearchParams(window.location.search);
const searchValue = searchParams.get("search");
const allProductCard = document.querySelectorAll(".all-product-card");

allProductCard.forEach((productCard) => {
	const description = productCard.querySelector(".product-card__description");

	if (
		searchValue &&
		description.textContent.toLowerCase().includes(searchValue.toLowerCase())
	) {
		const allProduct = document.querySelector(".all-products__cards");
		productCard.style.display = "flex";
		allProduct.style.justifyContent = "flex-start";
	} else if (
		searchValue &&
		!description.textContent.toLowerCase().includes(searchValue.toLowerCase())
	) {
		productCard.style.display = "none";
	}
});
