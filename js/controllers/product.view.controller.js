import { productServices } from "../service/product-service.js";

const obtenerInformacion = async () => {
	const url = new URL(window.location);
	const id = url.searchParams.get("id");

	if (id === null) {
		window.location.href = "/screens/error.html";
	}

	const imagen = document.querySelector("[data-imagen]");
	const titulo = document.querySelector("[data-titulo]");
	const precio = document.querySelector("[data-precio]");
	const descripcion = document.querySelector("[data-descripcion]");

	try {
		const producto = await productServices.detalleproducto(id);
		if (producto) {
			imagen.src = producto.url;
			titulo.innerHTML = producto.nombre;
			precio.innerHTML = producto.precio;
			descripcion.innerHTML = producto.descripcion;
		} else {
			throw new Error();
		}
	} catch (error) {
		window.location.href = "/screens/error.html";
	}
};

obtenerInformacion();

const crearNuevaTarjeta = (id, url, nombre, precio) => {
	const randomProductCard = document.createElement("div");
	randomProductCard.classList.add("random-product-card");
	const contenido = `
	<img
		src="./${url}"
		alt="Imegen de ${nombre}"
		class="random-product-card__image" />
	<p class="random-product-card__description">${nombre}</p>
	<span class="random-product-card__price">$ ${precio},00</span>
	<a href="/product-view.html?id=${id}" class="random-product-card__link">Ver producto</a>

	`;
	randomProductCard.innerHTML = contenido;

	return randomProductCard;
};

const generarNumeroAleatorio = (max) => {
	return Math.floor(Math.random() * max);
};

const generarListaAleatoria = (data) => {
	const listaAleatoria = [];
	const indicesUtilizados = [];

	for (let i = 0; i < 6; i++) {
		let indiceAleatorio = generarNumeroAleatorio(data.length);

		while (indicesUtilizados.includes(indiceAleatorio)) {
			indiceAleatorio = generarNumeroAleatorio(data.length);
		}

		indicesUtilizados.push(indiceAleatorio);

		const { id, url, nombre, precio } = data[indiceAleatorio];
		const nuevaTarjeta = crearNuevaTarjeta(id, url, nombre, precio);
		listaAleatoria.push(nuevaTarjeta);
	}

	return listaAleatoria;
};

const randomProductos = document.querySelector("[data-random-product]");

productServices
	.listaProductos()
	.then((data) => {
		const listaAleatoria = generarListaAleatoria(data);
		randomProductos.innerHTML = "";
		listaAleatoria.forEach((tarjeta) => {
			randomProductos.appendChild(tarjeta);
		});
	})
	.catch((error) => alert("Ocurrió un error"));
