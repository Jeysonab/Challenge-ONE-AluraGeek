import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form-register]");

formulario.addEventListener("submit", (evento) => {
	evento.preventDefault();
	const nombre = document.querySelector("[data-nombre-register]").value;
	const email = document.querySelector("[data-email-register]").value;
	const password = document.querySelector("[data-password-register]").value;
	clientServices
		.crearCliente(nombre, email, password)
		.then(() => {
			window.location.href = "/login.html";
		})
		.catch((error) => {
			alert(error.message);
		});
});
