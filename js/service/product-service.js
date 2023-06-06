const crearProducto = (url, categoria, nombre, precio, descripcion) => {
	return fetch(
		"https://my-json-server.typicode.com/Jeysonab/Challenge-ONE-AluraGeek/productos",
		{
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
		}
	);
};

const listaProductos = () =>
	fetch(
		"https://my-json-server.typicode.com/Jeysonab/Challenge-ONE-AluraGeek/productos"
	).then((respuesta) => respuesta.json());

const detalleproducto = (id) => {
	return fetch(
		`https://my-json-server.typicode.com/Jeysonab/Challenge-ONE-AluraGeek/productos/${id}`
	).then((respuesta) => respuesta.json());
};

export const productServices = {
	crearProducto,
	listaProductos,
	detalleproducto,
};
