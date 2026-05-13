/*********************************************************************************************************
 * Objetivo: Arquivo responsavel pela validação , tratamento e
 *      manipulacao de dados para o CRUD de filmes
 * Data: 08/05/2026
 * Autor: Geovane
 * Versão: 1.0
 *********************************************************************************************************/

//Import do arquivo de padronização de mensagens
const message_config = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const personagemDAO = require('../../model/DAO/personagem/personagem.js')


//Função para inserir um novo Personagem
const inserirNovoPersonagem = async function(personagem, contentType) {

    //Criando clone do objeto JSOn paea manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(message_config))

    try {
        if(String(contentType).includes('application/json')){

            let validar = await validarDados(personagem)


            if(validar){
                return validar

            }else{
                let result = await personagemDAO.insertNewCaracter(personagem)

                if(result){ //201

                    personagem.id = result
                    message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = personagem

                }else {
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                }

                return message.DEFAULT_MESSAGE
            }
        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
        
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (controller)
    }
}

//Funcção para atualizar um personagem
const atualizarPersonagem = async function() {
    
}


const listarPersonagens = async function() {
    
}


const buscarPersonagem = async function() {
    
}


const excluirPersonagem = async function() {
    
}

module.exports = {
    inserirNovoPersonagem
}