"use strict"

let contas = require("./contasdb");

const express = require("express");

const cors = require("cors");

const api = express();

api.use(
    cors({
        origin: "*",
    })
);

api.get("/info", (request, response) => {
    response.json({
        nome: "API Info",
        status: "OK",
    })
})

api.get("/contas", (request, response) => {
    response.json(contas);
})


api.get("/conta/:id", (request, response) => {
    let contaId = Number(request.params.id);
    let contaEncontrada = contas.find(
        (conta) => conta.id === contaId
    );
    console.log(contaEncontrada);
})


// api.listen(
//     3000,
//     () => {
//         console.log(`Servidor rodando na porta 3000 em: http://localhost:3000`);
//     }
// )

module.exports = api;