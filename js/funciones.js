$(document).on('click', '#btn-validar', () => {
    let rut = $('#txt-rut').val();
    let rutValidador = new RutValidador(rut)

    if(rutValidador.esValido) {
        $('#resultado').html(mostrarMensaje('success', `Rut válido ${rutValidador.formato()}`))
        return;
    }

    $('#resultado').html(mostrarMensaje('danger', 'Rut inválido'))
})

function mostrarMensaje(tipo, mensaje) {
    return `
        <div class='alert alert-${tipo} mt-5'>
            <strong>${mensaje}</strong>
        </div>
    `;
}

