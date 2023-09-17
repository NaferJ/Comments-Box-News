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
            <span class="contador-me-gusta"></span>
            <button class="no-me-gusta" onclick="noMeGusta(this)">No me gusta</button>
            <span class="contador-no-me-gusta"></span>
            <button class="responder" onclick="responder(this)">Responder</button>
        </div>
    `;

    // Agregar el nuevo comentario a la lista de comentarios
    var listaComentarios = document.getElementById('lista-comentarios');
    listaComentarios.appendChild(nuevoComentario);

    // Limpiar el campo de comentario
    document.getElementById('comentario').value = '';
}

// Función para manejar el botón "Me gusta" en comentarios y noticias
function meGusta(boton) {
    if (boton.classList.contains('activo')) {
        boton.classList.remove('activo');
        boton.textContent = 'Me gusta';
    } else {
        boton.classList.add('activo');
        boton.textContent = 'Me gusta (1)';
        var siblingDislikeButton = boton.nextElementSibling.nextElementSibling;
        if (siblingDislikeButton && siblingDislikeButton.classList.contains('activo')) {
            siblingDislikeButton.classList.remove('activo');
            siblingDislikeButton.textContent = 'No me gusta';
        }
    }
}

// Función para manejar el botón "No me gusta" en comentarios y noticias
function noMeGusta(boton) {
    if (boton.classList.contains('activo')) {
        boton.classList.remove('activo');
        boton.textContent = 'No me gusta';
    } else {
        boton.classList.add('activo');
        boton.textContent = 'No me gusta (1)';
        var siblingLikeButton = boton.previousElementSibling.previousElementSibling;
        if (siblingLikeButton && siblingLikeButton.classList.contains('activo')) {
            siblingLikeButton.classList.remove('activo');
            siblingLikeButton.textContent = 'Me gusta';
        }
    }
}

// Función para manejar el botón "Responder"
function responder(boton) {
    // Aquí puedes implementar la lógica para responder a un comentario
}

// Agregar event listener al botón "Publicar Comentario"
document.getElementById('publicar-comentario').addEventListener('click', publicarComentario);
