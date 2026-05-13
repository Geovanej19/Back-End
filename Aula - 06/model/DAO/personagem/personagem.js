/*******************************************************************************************************
 * 
 * Objetivo: Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela 
 *      Filme
 * Data: 08/05/2026
 * Autor: Geovane
 * Versão: 1.0
 * 
 *******************************************************************************************************/

//Impor da biblioteca para gereniciar o banco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configiração para conexão com o banco de dados MySQL
const knexConfig = require('../../database_config_knex/knexFile.js')


//Criar a conexão com o banco de dados MySQL
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de personagem
const insertNewCaracter = async function(personagem) {
    try {

        let sql = `insert into tbl_personagem (
                    nome
                    )
            values (
                    '${personagem.nome}'
                    );`


    //Executar o ScriptSQL no Banco de Dados
    let result = await knexConex.raw(sql)

    if(result){
        return result
    }

    } catch (error) {
        console.log('Erro ao inserir um personagem: ', error);
        return false
    }
}


//Função para atualizar um personagem existente na tabela
const updateCaracter = async function() {
    
}


//Função para retornar todos os dados da tabela de pesonagem
const selectAllCaracter = async function() {
    
}


//Função para retornar os dados do personagem fitrando pelo ID
const selectByIdCaracter = async function() {
    
}


//Função para excluir um personagem pelo ID
const deleteCaracter = async function() {
    
}

module.exports = {
    insertNewCaracter,
    updateCaracter,
    selectAllCaracter,
    selectByIdCaracter,
    deleteCaracter
}