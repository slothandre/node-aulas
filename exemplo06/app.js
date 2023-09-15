import express from "express";

// armazenando o express em uma variável. Ao invés de chamar express().get, usaremos app.get
const app = express();

// Configurar a view engine com EJS
app.set("view engine", "ejs");

// Configurar as rotas de acesso

// Raiz
app.get('/', (req, res) => {
    // res.send("Bem vindo ao servidor ExpressJS. Foi mais fácil do que parecia.");
    const bandas = ["Justin Bieber", "Black Sabbath", "Rush", "Marmotas", "Kuarto de Empregada"];
    res.render("pages/index", {bandas});
});

app.get('/sobre', (req, res) => {
    res.render("pages/sobre");
});

app.get('/contato', (req, res) => {
    res.render("pages/contato");
});

// Iniciar o servidor e escolher a porta
app.listen(3000, () => {
    console.log("Servidor expressJS rodando normalmente");
});