const crearProducto = (url, categoria, nombre, precio, descripcion) => {
	return fetch("http://localhost:3000/productos", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({
			id: uuid.v4(),
			url,
			categoria,
			nombre,
			precio,
			descripcion,
		}),
	});
};

const listaProductos = () =>
	fetch("http://localhost:3000/productos").then((respuesta) =>
		respuesta.json()
	);

const detalleproducto = (id) => {
	return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
		respuesta.json()
	);
};

export const productServices = {
	crearProducto,
	listaProductos,
	detalleproducto,
};
