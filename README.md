<h1 align=center># juego-amigo-secreto</h1>

# Proyecto: Lista de Amigos

Este proyecto es una aplicación web simple para gestionar una lista de amigos y realizar un sorteo de un amigo secreto.

## Descripción

La aplicación permite a los usuarios agregar nombres de amigos a una lista, mostrar la lista actualizada en la página y sortear un amigo secreto al azar. El nombre del ganador se muestra en la lista con un color destacado.

## Archivos del Proyecto

- `index.html`: Contiene la estructura HTML de la página.
- `styles.css`: Contiene los estilos CSS para la página.
- `script.js`: Contiene el código JavaScript para la funcionalidad de la aplicación.

## Funcionalidades

### Agregar Amigo

1. El usuario ingresa el nombre de un amigo en el campo de texto.
2. Al hacer clic en el botón "Agregar Amigo", el nombre se agrega a la lista de amigos.
3. La lista de amigos se actualiza y se muestra en la página.

### Sortear Amigo

1. Al hacer clic en el botón "Sortear Amigo", se selecciona un amigo al azar de la lista.
2. El nombre del amigo sorteado se muestra en la lista con un color destacado.

## Instrucciones

### Requisitos Previos

Asegúrate de tener un navegador web actualizado.

### Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Ingresa el nombre de un amigo en el campo de texto.
3. Haz clic en "Agregar Amigo" para agregar el nombre a la lista.
4. Repite el proceso para agregar hasta 5 amigos.
5. Haz clic en "Sortear Amigo" para seleccionar un amigo secreto al azar.

## Código Fuente

### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <title>Amigo Secreto</title>
</head>

<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagen representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite el nombre de sus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
                <button class="button-add" onclick="agregarAmigo()">Añadir</button>
            </div>
           
            <ul id="listaDeAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
            <ul id="resultado" class="result-list" aria-live="polite"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
                    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
                    Sortear amigo
                </button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html> 
```
                                                                                                                                                                                                                    
### style.css  

```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}

/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

/* Banner */
.header-banner {
    flex: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 0;
}

/* Sección de entrada */
.input-section {
    flex: 60%;
    background-color: var(--color-secondary);
    border: 1px solid #000;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
}

/* Títulos */
.main-title {
    font-size: 48px;
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: var(--color-white);
}

.section-title {
    font-family: "Inter", serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 10px 0;
    text-align: center;
}

/* Contenedores de entrada y botón */
.input-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
}

.input-name {
    width: 100%;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 25px 0 0 25px;
    font-size: 16px;
}

.button-container {
    width: 300px;
    justify-content: center;
}

/* Estilos de entrada de texto */
.input-title {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
    border: 2px solid #333;
    border-right: none;
    border-radius: 25px 0 0 25px;
    font-family: "Merriweather", serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Estilos de botón */
button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

/* Listas */
ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 20px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

/* Botón de sortear título */
.button-draw {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 40px;
    color: var(--color-white);
    background-color: var(--color-button);
    font-size: 16px;
}

.button-draw img {
    margin-right: 40px;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}
.ganador {
    color: green; 
}


```
### javascript

``` app.js

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


```


## Autor
    
    Chaves Marcos



## Licencia

    Este proyecto está licenciado bajo la Licencia MIT


