// Función para publicar un comentario
function publicarComentario() {
    // Obtener el texto del comentario
    var comentario = document.getElementById('comentario').value;

    // Crear un nuevo elemento de comentario
    var nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';

    // Agregar el contenido del comentario
    nuevoComentario.innerHTML = `
        <p>${comentario}</p>
        <div class="acciones-comentario">
            <button class="me-gusta" onclick="meGusta(this)">Me gusta</button>
            <span class="contador-me-gusta">0</span>
            <button class="no-me-gusta" onclick="noMeGusta(this)">No me gusta</button>
            <span class="contador-no-me-gusta">0</span>
            <button class="responder" onclick="responder(this)">Responder</button>
        </div>
    `;

    // Agregar el nuevo comentario a la lista de comentarios
    var listaComentarios = document.getElementById('lista-comentarios');
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar el campo de comentario
    document.getElementById('comentario').value = '';
}

// Función para manejar el botón "Me gusta"
function meGusta(boton) {
    // Verificar si ya se ha hecho clic en "Me gusta"
    if (boton.classList.contains('activo')) {
        boton.classList.remove('activo');
        // Restar 1 al contador de "Me gusta"
        var contador = boton.nextElementSibling;
        contador.textContent = parseInt(contador.textContent) - 1;
    } else {
        // Verificar si se ha hecho clic en "No me gusta" y desactivarlo si es necesario
        var noMeGustaBoton = boton.parentElement.querySelector('.no-me-gusta.activo');
        if (noMeGustaBoton) {
            noMeGustaBoton.classList.remove('activo');
            // Restar 1 al contador de "No me gusta"
            var contadorNoMeGusta = noMeGustaBoton.nextElementSibling;
            contadorNoMeGusta.textContent = parseInt(contadorNoMeGusta.textContent) - 1;
        }

        // Activar el botón "Me gusta"
        boton.classList.add('activo');
        // Sumar 1 al contador de "Me gusta"
        var contador = boton.nextElementSibling;
        contador.textContent = parseInt(contador.textContent) + 1;
    }
}

// Función para manejar el botón "No me gusta"
function noMeGusta(boton) {
    // Verificar si ya se ha hecho clic en "No me gusta"
    if (boton.classList.contains('activo')) {
        boton.classList.remove('activo');
        // Restar 1 al contador de "No me gusta"
        var contador = boton.nextElementSibling;
        contador.textContent = parseInt(contador.textContent) - 1;
    } else {
        // Verificar si se ha hecho clic en "Me gusta" y desactivarlo si es necesario
        var meGustaBoton = boton.parentElement.querySelector('.me-gusta.activo');
        if (meGustaBoton) {
            meGustaBoton.classList.remove('activo');
            // Restar 1 al contador de "Me gusta"
            var contadorMeGusta = meGustaBoton.nextElementSibling;
            contadorMeGusta.textContent = parseInt(contadorMeGusta.textContent) - 1;
        }

        // Activar el botón "No me gusta"
        boton.classList.add('activo');
        // Sumar 1 al contador de "No me gusta"
        var contador = boton.nextElementSibling;
        contador.textContent = parseInt(contador.textContent) + 1;
    }
}

// Función para manejar el botón "Responder"
function responder(boton) {
    // Aquí puedes implementar la lógica para responder a un comentario
}

// Agregar event listener al botón "Publicar Comentario"
document.getElementById('publicar-comentario').addEventListener('click', publicarComentario);
