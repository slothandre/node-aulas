import chalk from "chalk"; // importação do módulo instalado

console.log("Gerenciamento de Pacotes");

let aluno = 'Manoel Gomes';
let idade = 7;
let textColor
let situacao

if (idade >= 18) {
    textColor = "#0F0";
    situacao = "maior";
} else {
    textColor = "#F00";
    situacao = "menor";
};

console.log(`${aluno} é ${chalk.hex(textColor).visible(situacao)} de idade`);