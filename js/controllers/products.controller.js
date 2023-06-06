import { productServices } from "../service/product-service.js";

const crearNuevaTarjeta = (id, url, nombre, precio) => {
	const productCard = document.createElement("div");
	productCard.classList.add("all-product-card");
	console.log("Se esta creando el templete");
	const contenido = `
	<img
		src="./${url}"
		alt="Imegen de ${nombre}"
		class="product-card__image" />
	<div class="all-product-card__icons block">
		<a href="#"><i class="fa-solid fa-trash"></i></a>
		<a href="#"><i class="fa-solid fa-pen"></i></a>
	</div>
	<p class="product-card__description">${nombre}</p>
	<span class="product-card__price">$ ${precio},00</span>
	<a href="product-view.html?id=${id}" class="product-card__link">Ver producto</a>

	`;
	productCard.innerHTML = contenido;

	return productCard;
};

function executeSearch() {
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
}

const contenedorProductos = document.querySelector("[data-content-products]");

productServices
	.listaProductos()
	.then((data) => {
		data.forEach(({ id, url, nombre, precio }) => {
			const nuevaTarjeta = crearNuevaTarjeta(id, url, nombre, precio);
			contenedorProductos.appendChild(nuevaTarjeta);

			iconBlock();
			executeSearch();
		});
	})
	.catch((error) => alert("Ocurrió un error"));

// const eliminarCliente = (id) => {
// 	console.log();
// };

const iconBlock = () => {
	const loginLink = document.querySelector(".login__link");
	const itemsBlock = document.querySelectorAll(".block");
	if (sessionStorage.getItem("loggedIn")) {
		loginLink.textContent = "Log Out";

		if (window.location.pathname === "./products.html") {
			itemsBlock.forEach((elemento) => {
				console.log("Se ven iconos");
				elemento.style.display = "block";
			});
		}

		loginLink.addEventListener("click", () => {
			sessionStorage.removeItem("loggedIn");
			window.location.href = "login.html";
		});
	} else {
		loginLink.textContent = "Login";

		if (window.location.pathname === "./products.html") {
			itemsBlock.forEach((elemento) => {
				console.log("No se ven iconos");
				elemento.style.display = "none";
			});
		}
	}
};
