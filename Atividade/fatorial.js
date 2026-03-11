/*******************************************************************************************************************************
 * Exercício 04 - Fatorial
 * Autor: Geovane
 * Data: 04/03/2026
 * Versão: 1.0
 *******************************************************************************************************************************/

//Import da biblioteca
const readline = require("readline")
const fatorialFuncoes = require("./modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite o número que deseja saber o fatorial: ', function(numero){

    if(fatorialFuncoes.estaVazio(numero)){
        console.log('Erro: este campo não pode estar vazio')

    }else if(!fatorialFuncoes.validarFatorial(numero)){
        console.log('Erro: Digite valores válidos')
        entradaDeDados.close()
        return
    }

    let resultado = fatorialFuncoes.fatorial(Number(numero))
    console.log(resultado)
})