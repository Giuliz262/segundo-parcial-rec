const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

// Aleternativa utilizando la captura del pathname
// const reservaId = window.location.pathname.split('/').pop();

const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const fecha_reserva = document.querySelector('#fechareserva')
const fecha_vuelo = document.querySelector('#fechavuelo')
const telefono = document.querySelector('#telefono')
const costo = document.querySelector('#costo')


document.addEventListener('DOMContentLoaded', async () => {
    // Traemos la reserva que se va a editar
    const response = await fetch(`/api/${reservaId}`);
    const data = await response.json();

    // Mostrar en el formulario los datos de la reserva que se quiere actualizar
    nombre.value = data.nombre;
    apellido.value = data.apellido;
    fecha_reserva.value = data.fecha_reserva;
    fecha_reserva.value = data.fecha_reserva;
    fecha_vuelo.value = data.fecha_vuelo;
    telefono.value = data.telefono;
    costo.value = data.costo;
});


formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    reservaActualizada = {
        nombre: nombre.value,
        apellido: apellido.value,
        fecha_reserva: fecha_reserva.value,
        fecha_vuelo: fecha_vuelo.value,
        telefono: telefono.value,
        costo: costo.value,
    }


    // Se envían los nuevos datos al servidor express
    const response = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const respToJson = await response.json();

    if (response.status !== 200) {
        return Swal.fire({
            title: 'Error',
            text: respToJson.message,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }


    // Mostrar mensajes al usuario
    Swal.fire({
        title: 'Reserva actualizada',
        text: respToJson.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })

    

    setTimeout(() => {
        // Redireccionar al usuario
        window.location.href = "/"
    }, 2000);




})