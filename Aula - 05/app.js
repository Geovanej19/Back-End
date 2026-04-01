/******************************************************************************************************
 * 
 * Objetivo: Arquivo responsável pela criação da API do projeto de estados e cidades
 * Data: 01/04/2026
 * Autor: Geovane
 * Versão: 1.0
 * http:localhost
 * 
 * Instalçaõ do EXPRESS -> npm install express --save
 *      Dependência responsável pela utilização do protocolo HTTP para criar uma API
 * 
 * 
 * Intalação do CORS - npm install cors --save
 *      Dependência responsável pelas configurações a serem realizadas para a permissão de acesso da API
 * 
 *****************************************************************************************************/

//Import das dependências para criar a API
const express   = require('express')
const cors      = require('cors')

//Criando um objeto para manipular o express
const app = express()


//Conjuntos permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //Origem da requisição, podendo ser um IP ou o * (Todos)
    methods: 'GET', //São os verbos que srão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders:['Content-type', 'Autorization'], //São permissões de cabeçalho do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))


//Response -> São restorno da API
//Request -> São chegadas de dados na API


const estadosCidades = require('./Modulo/funcoes.js')

//Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getEstadosRegiao('Sudeste')


    response.json(estados)
    response.status(200)
})

app.get('/v1/senai/dados/estado/:uf', function(resquest, response){
    let sigla = resquest.params.uf
    let estado = estadosCidades.getDadosEstado(sigla)
    
    response.json(estado)
    response.status(200)

})

app.get('/v1/senai/cidades', function(request, response){

    response.json({"Message": "Testando minha API de cidades"})
    response.status(200)
})



//Server para Inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...');  
})