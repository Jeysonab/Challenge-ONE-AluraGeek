import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form-product]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const url = document.querySelector("[data-url-product]").value;
	const nombre = document.querySelector("[data-name-product]").value;
	const categoria = document.querySelector("[data-category-product]").value;
	const precio = document.querySelector("[data-price-product]").value;
	const descripcion = document.querySelector(
		"[data-description-product]"
	).value;

	productServices
		.crearProducto(url, categoria, nombre, precio, descripcion)
		.then(() => {
			window.location.href = "/products.html";
		})
		.catch((error) => {
			alert(error.message);
		});
});
