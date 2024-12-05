function comprobarVacio(x) {
    return x.trim() !== ""
}

//funcion para mostrar u ocultar los mensajes de error
//errorElemento = el mensaje del error
//mostrar = true para monstrar el error, false para ocultarlo.
//By: Oscar Prieto Lamas
function mostrarError(errorElemento, mostrar) {
    if (mostrar) {
        errorElemento.style.display = "flex";
    } else {
        errorElemento.style.display = "none";
    }
}

//funcion para validar que el nombre introducido es correcto
//, permite caracteres especiales de la lengua española
//, no puede estar vacio ni tener mas de 20 caracteres.
//By: Oscar Prieto Lamas
function validarNombre(){
    let nombre = document.querySelector("#nombre")
    let error = document.querySelector("#error-nombre")
    let comprobacion = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    if(!comprobarVacio(nombre.value)){
        error.textContent = "Nombre obligatorio"
        mostrarError(error, true)
        return false
    } else if(!comprobacion.exec(nombre.value)){
        error.textContent = "Nombre inválido"
        mostrarError(error,true)
        return false
    } else if(nombre.value.length > 20) {
    error.textContent = "El nombre no puede tener más de 20 caracteres"
    mostrarError(error, true)
    return false
    }
    mostrarError(error, false)
    return true
}

//permite mostrar error si el campo nombre no contiene datos correctos cuando el usuario hace click fuera del campo.
//By: Oscar Prieto Lamas
let nombre = document.querySelector("#nombre")
nombre.addEventListener("blur", () => {
    validarNombre()
});

//funcion para validar que la contraseña introducido es correcta
//, el campo no puede estar vacio
//, permite letras, numeros y caracteres ' ·$%&/()." '
//, debe tener entre 8 y 16 caracteres.
//By: Oscar Prieto Lamas
function validarContraseña(){
    let contraseña = document.querySelector("#password")
    let error = document.querySelector("#error-password")
    let comprobacion = /^[0-9a-zA-ZÑñÁáÉéÍíÓóÚúÜü·$%&/().]+$/
    if(!comprobarVacio(contraseña.value)){
        error.textContent = "La contraseña es obligatoria"
        mostrarError(error, true)
        return false
    } else if(!comprobacion.exec(contraseña.value)){
        error.textContent = "La contraseña debe tener entre 8 y 16 caracteres y solo puede contener letras, números y los caracteres ·$%&/()."
        mostrarError(error,true)
        return false
    } else if(contraseña.value.length > 16 || contraseña.value.length < 8 ) {
        error.textContent = "La contraseña debe tener entre 8 y 16 caracteres y solo puede contener letras, números y los caracteres ·$%&/()."
        mostrarError(error, true)
    return false
    }
    mostrarError(error, false)
    return true
}

//permite mostrar error si el campo contraseña no contiene datos correctos cuando el usuario hace click fuera del campo.
//By: Oscar Prieto Lamas
let contraseña = document.querySelector("#password")
contraseña.addEventListener("blur", () => {
    validarContraseña()
});

//Permite vaciar los campos der formularo como si el usuario nunca los hubiera usado
//By: Oscar Prieto Lamas
function vaciarLogin(){
    let formulario = document.querySelector("#formulario")
    formulario.reset()

    let error = document.querySelectorAll(".error-message")
    error.forEach((error) => {
        error.textContent = ""
        error.style.display = "none"
    })
}
//limpa el formulario al click del boton
//By: Oscar Prieto Lamas
let limpiar = document.querySelector("#limpiar")
limpiar.addEventListener("click", () => {
    vaciarLogin();
})

//comprueba que tanto el nombre y el apellido estan bien antes de enviar al formulario
//By: Oscar Prieto Lamas
function validarLogin(event){
    event.preventDefault()

    if(!validarNombre() || !validarContraseña()){
    alert("Compruebe los datos introducidos")
    return false
    } else {
        window.location.href = "main.html"
        return true
    }
}

//permite enviar el formulario despues de la verificacion de datos y lllevarlos a la pagina de main.html
//By: Oscar Prieto Lamas
let enviar = document.querySelector("#submit")
enviar.addEventListener("click", validarLogin)