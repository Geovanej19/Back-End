//Import das dependências para criar a API
const express   = require('express')
const cors      = require('cors')
const bodyParser = require('body-parser')

//Import das controllers do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato body
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()


//Conjuntos permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //Origem da requisição, podendo ser um IP ou o * (Todos)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //São os verbos que srão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders:['Content-type', 'Autorization'], //São permissões de cabeçalho do CORS
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))


//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body

    let result = await controllerFilme.inserirNovoFilme(dados)

    response.status(result.status_code)
    response.json(result)
})


app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`)
})