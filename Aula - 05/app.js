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



//Retorna dados dos estados filtrando por uf
app.get('/v1/senai/dados/estado/:sigla', function(request, response){
    let sigla = request.params.sigla
    let estado = estadosCidades.getDadosEstado(sigla)

    if(estado){
        response.status(200)
        response.json(estado)
    }else{
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado!"})
       
    }
    
   

})

//Retorna dados da capital de cada estado pelo uf
app.get('/v1/senai/capital/estado/:uf', function(request, response){
    let uf = request.params.uf
    let capital = estadosCidades.getCapitalEstado(uf)

    if(capital){
        response.status(200)
        response.json(capital)
    }else{
        response.status(404)
        response.json({"message": "O estado informado não foi encontrado!"})
    }

  

})

//Retorna dados dos estados que formam capitais do Brasil
app.get('/v1/senai/estado/capital/brasil', function(request, response){
    let capitalBrasil = estadosCidades.getCapitalPais()

    response.status(200)
    response.json(capitalBrasil)

})

//Retorna dados dos estados filtrando pela regiao
app.get('/v1/senai/estado/regiao/:regiao', function(request, response){
    let regiao = request.params.regiao
    let estados = estadosCidades.getEstadosRegiao(regiao)

    response.status(200)
    response.json(estados)

})

//Retorna dados das cidades filtrando pelo uf
app.get('/v1/senai/cidades/estado/:uf', function(request, response){
    let uf = request.params.uf
    let cidades = estadosCidades.getCidades(uf)

    response.status(200)
    response.json(cidades)
    
})

//Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    let estados = estadosCidades.getListaDeEstados()


    response.status(200)
    response.json(estados)
})

//Server para Inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardando novas requisições...');  
})

app.get('/v1/senai/help', function(request, response){
    let docAPI = {
        "API-description": "API para maniupluar dados de Estados e Cidades",
        "date": "2026-04-02",
        "Development": "Geovane",
        "Version": "1.0",
        "Endpoints": [
            {"id": 1,
                "Rota 1": "/v1/senai/estados",
                "Obs": "Retorna a lista de todos os estados"

            },
            {"id": 2,
                "Rota 2": "/v1/senai/capital/estado/sp",
                "Obs": "Retorna os dados do estado filtrando pela sigla do estado"
            },
            {"id": 3,
                "Rota 3": "/v1/senai/capital/estado/sp",
                "Obs": "Retorna os dados da capital filtrando pela sigla do estado"
            },
            {"id": 4,
                "Rota 4": "/v1/senai/estado/capital/brasil",
                "Obs": "Retorna todos os estados que formaram a capital do Brasil"
            },
            {"id": 5,
                "Rota 5": "/v1/senai/estado/regiao/Sudeste",
                "Obs": "Retorna todos os estados referente a uma regiao"
            },
            {"id": 6,
                "Rota 6": "/v1/senai/cidades/estado/sp",
                "Obs": "Retorna todas as cidades filtrando pela sigla do estado"
            },

        ]

    }
    response.status(200)
    response.json(docAPI)
})

//ativação do servidor
const PORT = process.env.PORT || 8080

app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`)
})