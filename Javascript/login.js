function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.querySelector(".bx");

  // Cambiar el tipo de entrada del campo de contraseña de "password" a "text" y viceversa
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("bx-show-alt");
    icon.src = "img/Hide.ico"; // Cambiar la ruta de la imagen a "img/Hide.ico"
  } else {
    passwordInput.type = "password";
    icon.src.remove = "img/Hide.ico"; // Cambiar la ruta de la imagen a "img/Hide.ico"
    icon.classList.add("bx-hide-alt");
  }
}
