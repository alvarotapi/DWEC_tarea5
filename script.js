//Función validar() que será con la que interactuará el formulario
function validar(){
	var okUsuario = validarUsuario();
	var okContrasenia = validarContrasenia();
	
    //Si son correctos el usuario y la contraseña, se envia el formulario y muestra un alert()
    if(okUsuario && okContrasenia) {
        alert("Formulario enviado correctamente")
        return true;   
    }
	else return false;
};

//Función que valida la correcta introducción del usuario
function validarUsuario(){
    var ok = true;
    var msgError = "";
    var usuario = document.getElementById("usuario").value;
    var error = document.getElementsByClassName("error")[0];
    var divUsuario = document.getElementById("divUsuario");

    //Reiniciamos los estilos y el mensaje de error
    error.innerHTML = "";
    divUsuario.style.border = ""

    //Comprobamos que no esté vacío
    if(usuario.length == 0) { 
        ok = false;
        msgError = "Error: Campo vacío";
    }
    //Comprobamos que contenga entre 3 y 12 caracteres
    else if (usuario.length < 3 || usuario.length > 12) {
        ok = false;
        msgError = "Error: Debe contener entre 3 y 12 caracteres";
    }
    else {
        //Comprobamos que no contenga espacios en blanco
        if(/^\s+$/.test(usuario)){
            ok = false;
            msgError = "Error: Campo con espacios en blanco";
        }
        else {
            //Comprobamos que no sea un número
            if(/^\d+$/.test(usuario)){
                ok = false;
                msgError = "Error: Campo numérico, han de ser minúsculas";
            }
            //Validamos que está compuesto solo por letras minúsculas
            else if(/^([a-z]+\s?)+$/.test(usuario)){
                ok = true;
            }
            //Sino mandamos el error de que solo que admiten minúsculas
            else {
                ok = false;
                msgError = "Error: Unicamente se admiten letras minúsculas";
            }
        }
    }
     
    //Damos estilo en caso de que haya algún error y mostramos el mensaje
    if(!ok){
        divUsuario.style.border = "5px solid red";
        error.innerHTML = msgError;
        return false;
    }

    return true;
}

//Función que valida la correcta introducción de la contraseña
function validarContrasenia(){
    var ok = true;
    var msgError = "";
    var contrasenia = document.getElementById("contrasenia").value;
    var error = document.getElementsByClassName("error")[1];
    var divContrasenia = document.getElementById("divContrasenia");

    //Reiniciamos los estilos y el mensaje de error
    error.innerHTML = "";
    divContrasenia.style.border = ""

    //Comprobamos que no esté vacío
    if(contrasenia.length == 0) { 
        ok = false;
        msgError = "Error: Campo vacío";
    }
    //Comprobamos que contenga 8 caracteres
    else if (contrasenia.length < 8 || contrasenia.length > 8) {
        ok = false;
        msgError = "Error: Debe contener 8 caracteres";
    }
    else {
        //Validamos que está compuesto por el patrón de contraseña
        if(/^[A-Z][.,-]{1}[a-z1-9]{6}$/.test(contrasenia)){
            ok = true;
        }
        //Sino mandamos el error indicando la nomenclatura idónea
        else {
            ok = false;
            msgError = "Error: La nomenclatura es: M.aaa123";
        }
    }

    //Damos estilo en caso de que haya algún error
    if(!ok){
        divContrasenia.style.border = "5px solid red";
        error.innerHTML = msgError;
        return false;
    }

    return true;

}