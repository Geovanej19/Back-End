/*********************************************************************************************************
 * Objetivo: Arquivo responsavel pela validação , tratamento e
 *      manipulacao de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Geovane
 * Versão: 1.0
 *********************************************************************************************************/

//Import do arquivo de padronização de mensagens
const message_config = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/Filme/filme.js')

//Função para inserir um novo filme
const inserirNovoFilme = async function (filme, contentType){


    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original

    if(String(contentType).includes('application/json')){

        //Cria 
        let message = JSON.parse(JSON.stringify(message_config))

        //Validação de dados para os atributos do Filme (Status 400)
        let validar = await validarDados(filme)

        //Se a função validar retornar um JSON de erro, iremos devolver ao APP o erro
        if(validar){
            return validar
        }else{

            //encaminha os dados do flme para o DAO
            let result = await filmeDAO.insertFilme(filme)
            if(result){ //201
                message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message

            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL  //500
            }

            return message.DEFAULT_MESSAGE
        }
    }else{

        return message.ERROR_CONTENT_TYPE //415
    }
}



//Função para atualizar um filme
const atualizarFilme = async function (){
    
}

//Função para retornar todos os filmes
const listarFilme = async function (){

}

//Funçaõ para buscar um filme pelo id 
const buscarFilme = async function(){

}

//Funcao para excluir um filme
const excluirFilme = async function(){

}

//Funcção para validar todos os dados de filmes (obrigatórios, qtde de caracteres, valor vazio, null, undefind)
const validarDados = async function(filme) {

    let message = JSON.parse(JSON.stringify(message_config))

    try {
        
        if(filme.nome == '' || filme.nome == null ||  filme.nome == undefined || filme.nome.length > 80){
            message.ERROR_BAD_RESQUEST.field = '[NOME] INVÁLIDO'
            return message.ERROR_BAD_RESQUEST //400
        
            }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10){
                message.ERROR_BAD_RESQUEST.field = '[DATA_LANCAMENTO] INVÁLIDA'
                return message.ERROR_BAD_RESQUEST
        
            }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
                message.ERROR_BAD_RESQUEST.field = '[DURACAO] INVÁLIDA'
                return message.ERROR_BAD_RESQUEST
        
        
            }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined ){
                message.ERROR_BAD_RESQUEST.field = '[SINOPSE] INVÁLIDA'
                return message.ERROR_BAD_RESQUEST
        
            }else if(isNaN(filme.avaliacao)|| filme.avaliacao.length > 3){
                message.ERROR_BAD_RESQUEST.field = '[AVALIACAO] INVÁLIDA'
                return message.ERROR_BAD_RESQUEST
        
            }else if(filme.valor == '' || filme.valor == null || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
                message.ERROR_BAD_RESQUEST.field = '[VALOR] INVÁLIDO'
                return message.ERROR_BAD_RESQUEST
        
            }else if(filme.capa.length > 255){
                message.ERROR_BAD_RESQUEST.field = '[CAPA] INVÁLIDA'
                return message.ERROR_BAD_RESQUEST //400
            }else{
                return false
            }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}


module.exports = {
    inserirNovoFilme
}