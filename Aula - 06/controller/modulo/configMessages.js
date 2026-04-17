/***********************************************************************************************************
 * 
 * Objetico: Arquivo responsável pela configuração e padronização das mensagnes da API
 * Data: 2026-04-17
 * Autor: Geovane
 * Versão: 1.0
 * 
 **********************************************************************************************************/

//Padronização de cabeçalho de retorno dos endpoints para API
const DEFAULT_MESSAGE = {
    api_description: 'API para gerenciar o controle de filmes',
    desenvolvedor: 'Geovane Merçon Santos',
    Version: '1.0.4.26',
    status: Boolean,
    status_code: Number,
    Response: {}
}

//Mensagens de erro da API
const ERROR_BAD_RESQUEST = {status: false, status_code: 400, message: 'Os dados enviados na requisição não estão corretos.'}

//Mensagens de sucesso da API
const SUCESS_CREATED_ITEM = {statu: true, status_code: 201, message: 'Registro inserido com sucesso!'}






module.exports = {
    DEFAULT_MESSAGE,
    ERROR_BAD_RESQUEST,
    SUCESS_CREATED_ITEM
}