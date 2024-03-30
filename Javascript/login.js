function togglePassword() {
  const passwordInput = document.getElementById("password");
  // Cambiar el tipo de entrada del campo de contraseña de "password" a "text" y viceversa
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
    eyeOpenIcon.style.display = "inline-block";
    eyeSlashIcon.style.display = "none";
  }
}
