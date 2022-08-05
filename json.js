var factura = {
    numero: 123,
    fecha: new Date(2022, 0, 1),
    cliente: {
        nombre: 'Juan',
        apellido: 'Perez'
    },
    items: [
        {
            descripcion: 'Monitor 20"',
            precio: 300
        },
        {
            descripcion: 'Teclado',
            precio: 20
        },
    ]   
}
function calcularTotal (facturas) {
    var total = 0;
    for (item of facturas.items) {
        total += item.precio;
    }
    return total;
}
console.log("total", calcularTotal(factura));