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
const inserirNovoFilme = async function (filme){
    //Criando um clone do objeto JSON para manipular a sua estrutura local sem
    //modificar a estrutura original

    let message = JSON.parse(JSON.stringify(message_config))

    //Validação de dados para os atributos do Filme (Status 400)
    if(filme.nome == '' || filme.nome == null ||  filme.nome == undefined || filme.nome.length > 80){
    message. ERROR_BAD_RESQUEST.field = '[NOME] INVÁLIDO'
    //return message.ERROR_BAD_RESQUEST //400

    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length != 10){
        message.ERROR_BAD_RESQUEST.field = '[DATA_LANCAMENTO] INVÁLIDA'
        //return message.ERROR_BAD_RESQUEST

    }else if(filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length > 5){
        message.ERROR_BAD_RESQUEST.field = '[DURACAO] INVÁLIDA'
        //return message.ERROR_BAD_RESQUEST


    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined ){
        message.ERROR_BAD_RESQUEST.field = '[SINOPSE] INVÁLIDA'
        //return message.ERROR_BAD_RESQUEST

    }else if(isNaN(filme.avaliacao)|| filme.avaliacao.length > 3){
        message.ERROR_BAD_RESQUEST.field = '[AVALIACAO] INVÁLIDA'
        //return message.ERROR_BAD_RESQUEST

    }else if(filme.valor == '' || filme.valor == null || filme.valor.length > 5 || isNaN(filme.valor)){
        message.ERROR_BAD_RESQUEST.field = '[VALOR] INVÁLIDA'
        //return message.ERROR_BAD_RESQUEST

    }else if(filme.capa.length > 255){
        message.ERROR_BAD_RESQUEST.field = '[CAPA] INVÁLIDA'
        //return message.ERROR_BAD_RESQUEST
    }else{
        let result = await filmeDAO.insertFilme(filme)
        if(result){ //201
            message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message

        }else{//400
            message.DEFAULT_MESSAGE.status = message.ERROR_BAD_RESQUEST.status
            message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_RESQUEST.status_code
            message.DEFAULT_MESSAGE.message = message.ERROR_BAD_RESQUEST.message
            message.DEFAULT_MESSAGE.field = message.ERROR_BAD_RESQUEST.field
        }

        return message.DEFAULT_MESSAGE
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


module.exports = {
    inserirNovoFilme
}