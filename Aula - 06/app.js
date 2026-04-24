//Import das dependências para criar a API
const express   = require('express')
const cors      = require('cors')
const bodyParser = require('body-parser')

//Import das controllers do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

//Criando um objeto para manipular o express
const app = express()

//Definindo a porta
const PORT = process.env.PORT || 8080

//Conjuntos permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders:['Content-Type', 'Authorization'], // corrigi aqui também
}

//Configura as permissões da API através do CORS
app.use(cors(corsOptions))

//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    
    let dados = request.body

    //Recebe o content type da requisição, para vaidar se é m JSON
    let contentType = request.headers['content-type']
    

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme', async function(request, response) {
    
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
    
})

app.get('/v1/senai/locadora/filme/:id', async function(request, response) {
    //Recebe o id via parametro
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
    
})

//Inicia o servidor
app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`)
})