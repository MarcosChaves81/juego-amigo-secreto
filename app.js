// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let maximoAmigos = 0;

function actualizarListaAmigos() {
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}

function agregarAmigo() {
    if (maximoAmigos < 5) {
        let nombre = document.getElementById('amigo').value;
        if (nombre !== '') {
            listaDeAmigos.push(nombre);
            maximoAmigos++;
            console.log(listaDeAmigos);
            document.getElementById('amigo').value = '';
            actualizarListaAmigos();
        } else {
            alert('Por favor, ingresa un nombre válido.'); 
            return;
        }
    } else {
        alert('Se ha alcanzado el número máximo de entradas.');
        document.getElementById('amigo').value = '';
    }           
}

function sortearAmigo() {
    let ganador = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = '';
    let item = document.createElement('li');
    item.textContent = "El amigo secreto sorteado es: " + ganador;
    item.classList.add('ganador');
    lista.appendChild(item);
}