
document.addEventListener('DOMContentLoaded', function() {
    cargarGastos();
});

function cargarGastos() {
    const tablaGastos = document.getElementById('tabla-gastos');
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    gastos.forEach((gasto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${gasto.fecha}</td>
            <td>${gasto.cuenta}</td>
            <td>${gasto.concepto}</td>
            <td>${gasto.etiqueta}</td>
            <td>${gasto.descripcion}</td>
            <td>${gasto.total}</td>
            <td><button class="borrar-btn" data-index="${index}">Borrar</button></td>
        `;
        tablaGastos.appendChild(row);
    });
 
}

function borrarGasto(index) {
    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    gastos.splice(index, 1);
    localStorage.setItem('gastos', JSON.stringify(gastos));
    location.reload();
}