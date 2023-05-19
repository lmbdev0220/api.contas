"use strict"

const api = require("./server");

//Função nomeada
function teste(n1, n2){
    return n1 + n2;
}
const resultado1 = teste(10, 10);
console.log(resultado1);
//Função Anônima
const teste2 = function (n1, n2){
    return n1 + n2;
}
const resultado2 = teste2(10, 20);
console.log(resultado2);
//Função arqueada (arrow): '=>'
//toda arrow function é anônima
//Não usa a palavra function
//usa o símbolo '=>'
const teste3 = (n1, n2) => {
    return n1 + n2;
}
const resultado3 = teste3(10,30);
console.log("resultado: >> ",resultado3);
const teste4 = (n1,n2) => n1+n2;
const teste5 = _ => console.log("Passou aqui");
teste5();

api.listen(3000, () => {
        console.log(`Servidor rodando na porta 3000 em: http://localhost:3000`);
    });