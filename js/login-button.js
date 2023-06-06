const loginLink = document.querySelector(".login__link");
const itemsBlock = document.querySelectorAll(".block");

if (sessionStorage.getItem("loggedIn")) {
	loginLink.textContent = "Log Out";

	if (window.location.pathname === "/products.html") {
		itemsBlock.forEach((elemento) => {
			elemento.style.display = "block";
		});
	}

	loginLink.addEventListener("click", () => {
		sessionStorage.removeItem("loggedIn");
		window.location.href = "login.html";
	});
} else {
	loginLink.textContent = "Login";

	if (window.location.pathname === "/products.html") {
		itemsBlock.forEach((elemento) => {
			elemento.style.display = "none";
		});
	}
}
