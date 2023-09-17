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
            <button class="no-me-gusta" onclick="noMeGusta(this)">No me gusta</button>
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
    } else {
        // Verificar si se ha hecho clic en "No me gusta" y desactivarlo si es necesario
        var noMeGustaBoton = boton.parentElement.querySelector('.no-me-gusta');
        if (noMeGustaBoton.classList.contains('activo')) {
            noMeGustaBoton.classList.remove('activo');
        }

        // Activar el botón "Me gusta"
        boton.classList.add('activo');
    }
}

// Función para manejar el botón "No me gusta"
function noMeGusta(boton) {
    // Verificar si ya se ha hecho clic en "No me gusta"
    if (boton.classList.contains('activo')) {
        boton.classList.remove('activo');
    } else {
        // Verificar si se ha hecho clic en "Me gusta" y desactivarlo si es necesario
        var meGustaBoton = boton.parentElement.querySelector('.me-gusta');
        if (meGustaBoton.classList.contains('activo')) {
            meGustaBoton.classList.remove('activo');
        }

        // Activar el botón "No me gusta"
        boton.classList.add('activo');
    }
}

// Función para manejar el botón "Responder"
function responder(boton) {
    // Aquí puedes implementar la lógica para responder a un comentario
}

// Agregar event listener al botón "Publicar Comentario"
document.getElementById('publicar-comentario').addEventListener('click', publicarComentario);
