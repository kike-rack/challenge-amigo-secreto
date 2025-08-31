//Diagrama
//Usuario ingresa nombres de amigos y luego hace un sorteao aleatorio poara hacer un amigo secreto.
//Se escribe en input un nombre y luego se presiona el boton añadir para hacer una lista en pantalla
//Si un usuario escribe un nombre vacio, debe hacer una alerta que avise que el nombre no es válido
//Al clickear el boton ssortear amigo, la aplicacion elije un nombre aleatorio y lo muestra en pantalla
let listaAmigos = []; //Array
let numeroMaximo = 6;

//capturar el valor del campo de entrada, verifica que haya algun nombre y luego agrega el nombre a la lista
function agregarAmigo () {
    let nombreAmigo = document.getElementById('amigo').value;
    document.getElementById('amigo'). value = "";
    if (nombreAmigo === "") {
        alert("Debes escribir un nombre.");
        return
    }
    listaAmigos.push(nombreAmigo);
    console.log(nombreAmigo);
    limpiarCaja();
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    //capturar id del input, en este caso es amigo
    document.querySelector('#amigo').value = '';
}


