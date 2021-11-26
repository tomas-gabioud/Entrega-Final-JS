const form = document.getElementById("form-consulta");
const user = document.getElementById("username");
const email = document.getElementById("email");
/* Validando el form */
function checkInputs() {
  if (isLetters(user.value) && isEmail(email.value)) {
    setSuccessFor(user);
    setSuccessFor(email);
	return true
  } else if (!isLetters(user.value) || !isEmail(email.value)) {
    if (isLetters(user.value)) {
      setErrorFor(email, "No ingreso un email válido");
      setSuccessFor(user);
	}else if(isEmail(email.value)){
		setSuccessFor(email);
		setErrorFor(user, "Por favor ingrese un nombre válido");
	} else {
		setErrorFor(email, "No ingreso un email válido");
		setErrorFor(user, "Por favor ingrese un nombre válido");
		return false;
	}
    return false;
  } 
}


function setErrorFor(input, message) {
  const formDatos = input.parentElement;
  const small = formDatos.querySelector("small");
  formDatos.className = "form-datos error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-datos success";
}

/* Expresion regular para validar el email. */

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isLetters(user) {
  return /[a-z]/i.test(user);
}

/*  Mostrar datos del formulario   */

let users = [];

$("#form-consulta").submit(function (e) {
  e.preventDefault();
  console.log(checkInputs())
  if (checkInputs()) {
    let inputUser = $("#username")[0].value;
    let inputEmail = $("#email")[0].value;
    Swal.fire(
      `Hola ${inputUser} `,
      `En las siguientes 48hs te enviaremos una respuesta a tu consulta al siguiente mail: ${inputEmail} `,
      `success`
    );
    users.push({
      nombre: inputUser,
      Email: inputEmail,
    });
    localStorage.setItem("usuariosForm", JSON.stringify(users));
  }
});
