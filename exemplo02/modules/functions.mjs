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

// export default soma; // Para exportar um único recurso
// export {soma, subtrai, multiplica, divide}; // Para exportar diversos recursos

// se desejar exportar de uma maneira que facilite a importação:
const operacoes = {soma, subtrai, multiplica, divide};
export default operacoes;
// IMPORTANTE: se exportar desta maneira, na hora de chamar o recurso, precisaremos usar a sintaxe operacoes.soma, por exemplo