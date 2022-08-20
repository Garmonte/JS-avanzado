var factura = {
    id:1,
    fecha: new Date(2022, 0, 1),
    cliente: {
        nombre: 'Juan',
        id: "id1",
        dir: {
            calle: "av la estacion",
            dp:5876,
        }
    },
    lineas : [
        {
            nombre: "produc1",
            cantidad: 1,
            precio: 1.5,
        }, 
        {   
            nombre: "produc2",
            cantidad: 3,
            precio: 12.5,
        }, 
        {
            nombre: "produc1",
            cantidad: 5,
            precio: 7.5,
        } 
    ]
}
        console.log(JSON.stringify(factura, null, 4));