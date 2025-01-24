// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = []

let maximoAmigos = 6
function guardarNombres(listaDeAmigo) {
    if (maximoAmigos <=6){
        {
            let nombre = document.getElementById('amigo').value;
            if (nombre.trim() !== '') {
                listaDeAmigos.push(nombre);
                document.getElementById('amigo').value = '';
                maximoAmigos++
            } else {
                alert('Por favor ingresa un nombre valido.'); 
        return
            }
        }
    }           
}

function generarAmigosecreto(listaDeAmigos) {
    return listaDeAmigos[Math.floor(Math.random)*listaDeAmigos.length]

    return
}

function mostrarNombres(listaDeAmigo){


    return
}