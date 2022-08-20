const ax = require('axios');

async function getDatos() {
    const r = ax.get(`https://jsonplaceholder.typicode.com/users`);
    return r;
}
(
    async () => {
        var datos = await getDatos()
        console.log(datos);   
    }

)()