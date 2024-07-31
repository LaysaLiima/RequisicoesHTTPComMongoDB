const express = require('express');
const rotas = require('./rotas');
const connection = require('./conexao');

const app = express();

app.use(express.json());
app.use(rotas);

const iniciarServer = async () => {
    await connection(); // Conectar ao MongoDB
    app.listen(3000, () => {
        console.log("Servidor iniciado na porta 3000");
    });
};

iniciarServer();
