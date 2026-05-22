/*********************************************************************************************************
 * Objetivo: Arquivo responsavel pela validação , tratamento e
 *      manipulacao de dados para o CRUD de filme e generos
 * Data: 22/05/2026
 * Autor: Geovane
 * Versão: 1.0
 *********************************************************************************************************/

//Import do arquivo de padronização de mensagens
const message_config = require('../modulo/configMessages.js')

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeGeneroDAO = require('../../model/DAO/filme_genero/filme_genero.js')


//Função para inserir um novo Sexo
const inserirNovoFilmeGenero = async function(filmeGenero) {

    //Criando clone do objeto JSOn paea manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(message_config))

    try {

            let validar = await validarDados(filmeGenero)


            if(validar){
                return validar

            }else{
                let result = await filmeGeneroDAO.insertFilmeGenero(filmeGenero)

                if(result){ //201

                    filmeGenero.id = result
                    message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = filmeGenero

                }else {
                    return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                }

                return message.DEFAULT_MESSAGE
            }
        
    } catch (error) {

        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (controller)
    }
}

const atualizarGenero = async function(filmeGenero, id) {

     //Criando clone do objeto JSOn paea manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(message_config))
       
    try {
    
    
            //Validação para o ID correto
            let resultBuscarID = await buscarGenero(id)
    
            if(resultBuscarID.status){
                let validar = await validarDados(filmeGenero)
    
                //Validação de campos obrigatórios para a atualização (Body)
                if(!validar){
                    //Adiciono o atributo ID do filme no Json para ser enviado ao DAO

                    filmeGenero.id = id
    
    
                    let result = await filmeGeneroDAO.updateFilmeGenero(filmeGenero)
    
                    if(result){
                        message.DEFAULT_MESSAGE.status = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message_config.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = filmeGenero
    
                        return message.DEFAULT_MESSAGE //200 (Atualizado)
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
                    }
    
                }else{
                    return validar //400
                }
            }else{
                return resultBuscarID //400 ou 404 ou 500
            }

    } catch (error) {
        console.log('ERRO CONTROLLER atualizar genero:', error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

const listarFilmeGenero = async function() {
    let message = JSON.parse(JSON.stringify(message_config))

    try {
      
      let result = await filmeGeneroDAO.selectAllFilmeGenero()

      if(result){

          if(result.length > 0){
              message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
              message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
              message.DEFAULT_MESSAGE.response.count = result.length
              message.DEFAULT_MESSAGE.response.filme_genero = result

              return message.DEFAULT_MESSAGE //200

          }else{
              return message.ERROR_NOT_FOUND //404
          }

      }else{
          return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
      }

    } catch (error) {
        console.error("Erro ao listar genero:", error.message);
      return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

const buscarFilmeGenero = async function(id) {
    
    let message = JSON.parse(JSON.stringify(message_config))
    
    try {
    
        if(id === undefined || id === null || id === '' || isNaN(id)){
            message.ERROR_BAD_RESQUEST.field = '[ID] Inválido'

            return message.ERROR_BAD_RESQUEST //400

        }else{
            let result = await filmeGeneroDAO.selectByIdFilmeGenero(id)
    
            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response = result
    
                    return message.DEFAULT_MESSAGE //200
    
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }
    } catch (error) {
        console.log('ERRO CONTROLLER buscarGenero:', error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

const buscarFilmeIdGenero = async function(idGenero) {
    let message = JSON.parse(JSON.stringify(message_config))
    
    try {
    
        if(idGenero === undefined || idGenero === null || idGenero === '' || isNaN(idGenero)){
            message.ERROR_BAD_RESQUEST.field = '[ID] Inválido'

            return message.ERROR_BAD_RESQUEST //400

        }else{
            let result = await filmeGeneroDAO.selectByIdGenero(idGenero)
    
            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response = result
    
                    return message.DEFAULT_MESSAGE //200
    
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }
    } catch (error) {
        console.log('ERRO CONTROLLER buscarGenero:', error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

const buscarGeneroIdFilme = async function(idFilme) {
    let message = JSON.parse(JSON.stringify(message_config))
    
    try {
    
        if(idFilme === undefined || idFilme === null || idFilme === '' || isNaN(idFilme)){
            message.ERROR_BAD_RESQUEST.field = '[ID] Inválido'

            return message.ERROR_BAD_RESQUEST //400

        }else{
            let result = await filmeGeneroDAO.selectByIdFilme(idFilme)
    
            if(result){
                if(result.length > 0){
                    message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response = result
    
                    return message.DEFAULT_MESSAGE //200
    
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 (Model)
            }
        }
    } catch (error) {
        console.log('ERRO CONTROLLER buscarGenero:', error)
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }
}

const excluirGenero = async function(id) {
     let message = JSON.parse(JSON.stringify(message_config))
        
            try {
                //Validação do erro 400 e 404
                let resultBuscarID = await buscarGenero(id)
        
                //Validação para verificar se o status é verdadeiro é verdadeiro (se existe o filme)
                if(resultBuscarID.status){
                    //Chamar função do DAO para excluir o fime
                    let result = await generoDAO.deleteGenero(id)
        
                    if(result){
                        return message.SUCESS_DELETED_ITEM //200 (Registro exluído)
                    }else {
                        return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
                    }
                }else {
                    return resultBuscarID //400 ou 404
                }
        
        
            } catch (error) {
                return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
            }
}

const validarDados = async function(filmeGenero) {

    let message = JSON.parse(JSON.stringify(message_config))

    try {
        if (filmeGenero.id_filme === undefined || filmeGenero.id_filme === '' || filmeGenero.id_filme === null || isNaN(filmeGenero.id_filme)) {
            return message_config.ERROR_REQUIRED_FIELDS // 400

        }else if(filmeGenero.id_filme === undefined || filmeGenero.id_filme === '' || filmeGenero.id_filme === null || isNaN(filmeGenero.id_filme)) {
            return message_config.ERROR_REQUIRED_FIELDS // 400){}
            return false
        }
    } catch (error) {
        
        return message.DEFAULT_MESSAGE.ERROR_INTERNAL_SERVER_CONTROLLER
    }
}

module.exports = {
    inserirNovoFilmeGenero,
    atualizarGenero,
    listarFilmeGenero,
    buscarFilmeGenero,
    buscarFilmeIdGenero,
    buscarGeneroIdFilme,
    excluirGenero,
    validarDados
}