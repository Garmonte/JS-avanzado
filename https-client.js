const axios = require('axios');

async function getUsuario() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res;
}

(async () => {
    resultado = await getUsuario();

    console.log(JSON.stringify(resultado.data));
})();