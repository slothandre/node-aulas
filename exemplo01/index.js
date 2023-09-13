let aluno = "Zeca Minhoca";
let nota1 = 7.8;
let nota2 = 6.4;
let media = (nota1 + nota2) / 2;

console.log(media);
console.log("-----------------");

let dados = {
    nome: "André",
    idade: 19,
    signo: "Dinossauro"
};

console.log(dados.signo);
console.table(dados);
console.log("-----------------");

if(media >= 7){
    console.log(`O aluno ${aluno} está aprovado :)`);
} else {
    console.log(`O aluno ${aluno} está reprovado :(`);
}