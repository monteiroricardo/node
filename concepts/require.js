
const path = require('path');

console.log(path.basename(__filename));
//require é uma maneira de chamar modulos no nodeJs, seja modulos nativos, ou instalados.
//o require precisa sempre de um argumento, ou seja, qual é o modulo que será carregado.
//path é um modulo nativo do node 

//resgatando modulos personalizados

const myModule = require('./exports')
//o argumento do require é expecificamente o caminho de onde o module esta localizado.
//o .js pode ser omitido
console.log(myModule);