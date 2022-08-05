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
function calcularTotal1(factura: any): number {
    var total = 0;
    for (var item of factura.items) {
        total += item.precio;
    }
    return total;
}
console.log("TOTAL", calcularTotal1(factura));