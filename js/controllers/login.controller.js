import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form-login]");

formulario.addEventListener("submit", (event) => {
	event.preventDefault();

	const email = document.querySelector("[data-email-login]").value;
	const password = document.querySelector("[data-password-login]").value;

	clientServices
		.verificarClientes(email, password)
		.then(() => {
			sessionStorage.setItem("loggedIn", true);
			window.location.href = "./index.html";
		})
		.catch((error) => {
			alert(error.message);
		});
});
