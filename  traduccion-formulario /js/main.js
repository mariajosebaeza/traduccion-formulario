var sigIn = document.getElementById ("form-signin-heading");
sigIn.innerHTML = "Por favor, inicia sesión"; // innerHTML cambia o devuelve la sintaxis HTML 

var correo = document.getElementById ("inputEmail");
correo.placeholder = "Correo Electronico";  

var contraseña ? document.getElementById ("inputPassword");
contraseña.placeholder = "contraseña";

var recordar = document.getElementByTagName ("span") [0];
recordar.innerHTML = "Redordar datos";

var iniciar = document.getElementByClassName ("btn") [0];
iniciar.innerHTML = "Iniciar Sesión";