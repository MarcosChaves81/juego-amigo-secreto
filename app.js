// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaro las variables que voy a necesitar, listaDeAmigos va a ser una lista donde voy a almacenar los nombres de amigos y maximoAmigos me sirve de contador inicializado en 0
let listaDeAmigos = [];
let maximoAmigos = 0;

// Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = "";
    // itero sobre la lista listaDeAmigos
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li'); // Se crea un nuevo elemento li
        item.textContent = listaDeAmigos[i]; // El conttenido de li va a ser el nombre del amigo
        lista.appendChild(item); // Agrega el li al HTML
    }
}
// Creo la función agregarAmigo
function agregarAmigo() {
    if (maximoAmigos < 5) {    // Se compara el número máximo de ingresados
        let nombre = document.getElementById('amigo').value; // Se crea la variable nombre que va a guardar el nombre del amigo ingresado
        if (nombre !== '') {   // Se verifica que el ingreso del nombre no este vacío
            listaDeAmigos.push(nombre); // Agrego el nombre a la lista
            maximoAmigos++; // sumo 1 al acumulador
            //console.log(listaDeAmigos); // El console.log lo uso para verificar que los nombres ingresen en la lista, ahora que sé que funciona lo deshabilito
            document.getElementById('amigo').value = ''; // Borro el campo del input para poder ingresar otro nombre
            actualizarListaAmigos(); // Llamo a la función para actualizar la lista
        } else {
            alert('Por favor, ingresa un nombre válido.'); // pongo un alert que utilizo para válidar la entrada de datos
            return;
        }
    } else {
        alert('Se ha alcanzado el número máximo de entradas.'); // Aviso que se alcanzó el número máximo de amigos ingresados
        document.getElementById('amigo').value = ''; // Borro el input
    }           
}
// Creo la función sortearAmigo
function sortearAmigo() {
    let ganador = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)]; // Elijo un ganador de forma random
    let lista = document.getElementById('listaDeAmigos'); // obtengo el elemento de la lista en el html
    lista.innerHTML = ''; // Limpio la lista
    let item = document.createElement('li'); // Creo un li en el html
    item.textContent = "El amigo secreto sorteado es: " + ganador;  // Escribe en el li quien fue el ganador del sorteo
    item.classList.add('ganador'); // Para cambiar el color del texto al mostrar el ganador utilizo la clase ganador en el CSS
    lista.appendChild(item); // Agrego el li con el contenido al HTML
}