import express from "express";
const app = express();
app.set("view engine", "ejs");

app.use((req, res) => {
    switch(req.path) {
        case '/':
            res.render('pages/index');
            break;
        default:
            res.render('pages/404');
            break;
    }
});
app.listen(3000, () => {
    console.log("Servidor expressJS rodando!");
})