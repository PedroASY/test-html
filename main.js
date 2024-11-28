document.addEventListener("DOMContentLoaded", () => {
    const campos = [
        { id: "email", mensaje: "Por favor, ingrese un correo válido." },
        { id: "nombre", mensaje: "El nombre es obligatorio." },
        { id: "telefono", mensaje: "El teléfono es obligatorio." },
        { id: "pais", mensaje: "Por favor, seleccione un país." }
    ];

    const formulario = document.getElementById("formulario-contacto");

    // Validación de los campos al salir de ellos
    const validarCampo = (input, campo) => {
        const error = input.nextElementSibling;
        let esValido = true;

        if (input.value.trim() !== "") {  // Solo validar si hay contenido
            switch (campo.id) {
                case "email":
                    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    esValido = regexEmail.test(input.value);
                    break;
                case "telefono":
                    const regexTelefono = /^\d{10}$/;
                    esValido = regexTelefono.test(input.value);
                    break;
                case "nombre":
                    esValido = input.value.trim().length >= 9;  // mínimo 9 caracteres
                    break;
                case "pais":
                    esValido = input.value !== "";
                    break;
            }
        }

        if (!esValido && input.value.trim() !== "") {
            error.textContent = campo.mensaje;
            error.style.display = "block";
            input.classList.add("invalid");
        } else {
            error.style.display = "none";
            input.classList.remove("invalid");
        }

        return esValido;
    };

    // Validación al salir del campo
    campos.forEach((campo) => {
        const input = document.getElementById(campo.id);
        if (input) {  // Verificar que el elemento existe
            input.addEventListener("blur", () => {
                validarCampo(input, campo);
            });
        }
    });

    // Valida al enviar el formulario
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let formularioValido = true;

        campos.forEach((campo) => {
            const input = document.getElementById(campo.id);
            if (input && !validarCampo(input, campo)) {
                formularioValido = false;
            }
        });

        if (formularioValido) {
            alert("Formulario enviado exitosamente.");
            formulario.reset();
        }
    });
});

const items = document.querySelectorAll('.item');
let indice = 0;

/*Se crea un array items el query selecciona lo de la clase .item del html
se crea un indice para que el carrusel de la vuelta completa en las dos funciones 
de flecha(atras, siguiente), se utiliza el item active para mostrar solo 1 item
y se utiliza el classList para remover el active luego cambiar numero de indice
y activar el siguiente item.  Para el selector de eventos utilice el mouseover para que pase la imagen 
solo estando encima de la function(la flecha) y click oprimiendola
y por ultimo el intervalo de imagenes si no se hace nada avanza cada 10 segundos
*/

function atras() {
    items[indice].classList.remove('active');
    indice--;
    if (indice < 0) {
        indice = items.length - 1;
    }
    items[indice].classList.add('active');
}

function siguiente() {
    items[indice].classList.remove('active');
    indice++;
    if (indice >= items.length) {
        indice = 0
    }
    items[indice].classList.add('active');
}

document.querySelector('.flecha_izquierda').addEventListener('mouseover', atras);
document.querySelector('.flecha_izquierda').addEventListener('click', atras);
document.querySelector('.flecha_derecha').addEventListener('mouseover', siguiente);
document.querySelector('.flecha_derecha').addEventListener('click', siguiente);

setInterval(siguiente, 10000)