const crearCliente = (nombre, email, password) => {
	return fetch("http://localhost:3000/usuarios", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify({ id: uuid.v4(), nombre, email, password }),
	});
};

const verificarClientes = (email, password) => {
	return fetch(
		`http://localhost:3000/usuarios?email=${email}&password=${password}`
	).then((respuesta) => respuesta.json());
};

export const clientServices = {
	crearCliente,
	verificarClientes,
};
