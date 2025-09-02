//Diagrama
//Usuario ingresa nombres de amigos y luego hace un sorteo aleatorio para hacer un amigo secreto.
//Se escribe en input un nombre y luego se presiona el boton añadir para hacer una lista en pantalla
//Si un usuario escribe un nombre vacio, debe hacer una alerta que avise que el nombre no es válido
//Al clickear el boton ssortear amigo, la aplicacion elije un nombre aleatorio y lo muestra en pantalla
let listaAmigos = []; //Array
const resultadoHTML = document.getElementById('resultado');

//capturar el valor del campo de entrada.
function agregarAmigo () {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor del input
    

//valida que el campo no esté vacío y que no sea un número
    if (nombreAmigo === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} no es válido`);
        return;
    }

//validar que el nombre no esté duplicado (Case-sensitive)
    if (listaAmigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }
    // Agregar el nombre al array listaAmigos
    listaAmigos.push(nombreAmigo);
    mostrarListaAmigos ();
    console.log(nombreAmigo);
    limpiarCaja();
    inputAmigo.focus();
}

// Muestra la lista en el documento
function mostrarListaAmigos() {
    const listaSorteable = document.getElementById("listaAmigos");
    listaSorteable.innerHTML = ""; //borra contenido previo dentro del contenedor de la lista
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaSorteable.appendChild(li); //añadir nuevo elemento a la lista
    });
}

//función para seleccionar un amigo aleatorio

function sortearAmigo() {
        if(listaAmigos.length < 2) {
        alert("Ingrese por lo menos dos nombres válidos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    //ocultar la lista
    const listaSorteable = document.getElementById("listaAmigos");
    if (listaSorteable) {
        listaSorteable.style.display = "none";
    }

    //mostrar resultado
    resultadoHTML.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

function limpiarCaja() {
    //capturar id del input, en este caso es amigo
    document.querySelector('#amigo').value = '';
}




