
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const cuentaInput = document.getElementById('cuenta');
    const conceptoInput = document.getElementById('concepto');
    const etiquetaInput = document.getElementById('etiqueta');
    const descripcionInput = document.getElementById('descripcion');
    const totalInput = document.getElementById('total');
    const pagosInput = document.getElementById('pagos');

    function guardarGasto(event) {
        event.preventDefault();

        const gasto = {
            fecha: new Date().toISOString().split('T')[0], 
            cuenta: cuentaInput.value,
            concepto: conceptoInput.value,
            etiqueta: etiquetaInput.value || '-',
            descripcion: descripcionInput.value,
            total: parseFloat(totalInput.value).toFixed(2),
            pagos: pagosInput.value
        };

        // Obtener los gastos del localStorage
        let gastos = JSON.parse(localStorage.getItem('gastos')) || [];

        // Agregar nuevo gasto
        gastos.push(gasto);

        // Guardar nuevamente en localStorage
        localStorage.setItem('gastos', JSON.stringify(gastos));

        // Redireccionar a la página principal
        window.location.href = 'index.html';
    }

    // Asignar la función al botón de confirmar
    form.addEventListener('submit', guardarGasto);

    // Botón de salir redirecciona al index
    document.getElementById('btnSalir').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});