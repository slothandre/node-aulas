function soma(valor1, valor2){
    return valor1 + valor2;
};

function subtrai(valor1, valor2){
    return valor1 - valor2;
};

function multiplica(valor1, valor2){
    return valor1 * valor2;
};

function divide(valor1, valor2){
    return valor1 / valor2;
};


let resultadoSoma = soma(10, 50);
let resultadoSubtrai = subtrai(15, 5);
let resultadoMultiplica = multiplica(2, 10);
let resultadoDivide = divide(10, 2);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração ${resultadoSubtrai}`);
console.log(`Multiplicação: ${resultadoMultiplica}`);
console.log(`Divisão: ${resultadoDivide}`);