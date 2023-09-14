import fetch from "node-fetch";
import chalk from "chalk";

let url = "https://jsonplaceholder.typicode.com/posts/10";

// 1) Conectando com o endpoint da API (url)
fetch(url)
// 2) Retornando a resposta como JSON
    .then(resposta => resposta.json())
// 3) exibindo no console os dados obtidos na API
    .then(dados => console.log(chalk.bgHex("#FFF").hex("#000").bold(dados.title)));