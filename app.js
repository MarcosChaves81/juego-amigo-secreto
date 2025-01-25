// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let maximoAmigos = 0;

function agregarAmigo() {
    if (maximoAmigos < 5) {
        let nombre = document.getElementById('amigo').value;
        if (nombre !== '') {
            listaDeAmigos.push(nombre);
            maximoAmigos++;
            console.log(listaDeAmigos);
            document.getElementById('amigo').value = '';
            let lista = document.getElementById('listaDeAmigos');
            let item = document.createElement('li');
            item.textContent = nombre;
            lista.appendChild(item);
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
    alert(ganador);
    return;
}
