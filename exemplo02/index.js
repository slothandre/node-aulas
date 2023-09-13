// import soma from "./modules/functions.mjs" // Importando um único recurso
// import {soma, subtrai, multiplica, divide} from "./modules/functions.mjs"; // Importando diversos recursos
import operacoes from "./modules/functions.mjs";

let resultadoSoma = operacoes.soma(10, 50);
let resultadoSubtrai = operacoes.subtrai(15, 5);
let resultadoMultiplica = operacoes.multiplica(2, 10);
let resultadoDivide = operacoes.divide(10, 2);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração ${resultadoSubtrai}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);