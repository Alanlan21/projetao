


const express = require ("express"); //importa o módulo express neste arquivo const app - express(); //iniciando o express
const app =  express(); 

app.get("/consulta/:nome?", function(req,res){
    var nome = req.params.parametro;
    if(nome){
        res.send("<h1>produto " + nome +  "criado </h1>");
    }else{
        res.send("produto criado!");
    }
    res.send("retorno consulta:" + req.params.parametro);
})

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site!");
})

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de produtos</h1>");
})
app.listen(4000, function (erro){ // cria a aplicação na porta 400d
if (erro) {
console. log("Erro ao Iniciar.");
}else{
console. log("Servidor Iniciado. ");
}
})