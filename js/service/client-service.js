const crearCliente = (nombre, email, password) => {
	return fetch(
		"https://my-json-server.typicode.com/Jeysonab/Challenge-ONE-AluraGeek/usuarios",
		{
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ id: uuid.v4(), nombre, email, password }),
		}
	);
};

const verificarClientes = (email, password) => {
	return fetch(
		`https://my-json-server.typicode.com/Jeysonab/Challenge-ONE-AluraGeek/usuarios?email=${email}&password=${password}`
	).then((respuesta) => respuesta.json());
};

export const clientServices = {
	crearCliente,
	verificarClientes,
};
