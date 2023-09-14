import http from 'http'; // Importando módulo nativo http.
import fs from 'fs/promises'; // file system: permite ao servidor acesso ao sistema de arquivos

// constante que monitora requisições e recebe dois parâmetros req (requisição) e res (resposta)
const monitorRequisição = (req, res) => { // arrow function

    // Configurando o cabeçalho da resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf8"});

    // Avaliando cada requisição (a partir do link)
    switch(req.url) {
        case '/':
            // fs faz o carregamento e leitura do arquivo
            fs.readFile('pages/index.html')
            // depois de pronto, envia o conteudo como resposta
            .then(content => res.end(content));
        break;

        case '/sobre':
            fs.readFile('pages/sobre.html')
                .then(content => res.end(content));
        break;

        default:
            res.writeHead(404);
            fs.readFile('pages/404.html')
                .then(content => res.end(content));
        break;
    };
};

// Criando o servidor http e indicando a função de requisição
const server = http.createServer(monitorRequisição);

// iniciando a escuta do servidor local na porta 8080
// server.listen(8080); // só esse trecho já seria o suficiente, mas é importante rodar a mensagem para ter certeza que tudo deu certo.

server.listen(8080, () => {
    console.log("Servidor node rodando normalmente");
});