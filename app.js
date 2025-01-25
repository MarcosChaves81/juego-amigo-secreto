// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = []

let maximoAmigos = 0
function agregarAmigos(listaDeAmigo) {
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
    }else{
        alert('Se ha alcanzado el número máximo de entradas.')
    }           
}

function generarAmigosecreto(listaDeAmigos) {
    return listaDeAmigos[Math.floor(Math.random)*listaDeAmigos.length]

    return
}

function mostrarNombres(listaDeAmigo){


    return
}