/*************************************************************************************************************************************
 * 
 * Obejtivo: Calcular IMC para o usuário
 * Data: 27/02/2026
 * Autor: Geovane
 * Versão: 1.0
 * 
 *************************************************************************************************************************************/

//import Da Biblioteca
const readline = require('readline')
const validacao = require('./modulo/Calculos.js')

//Criar o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome
entradaDeDados.question('Informe seu nome: ', function(nome){

    if(validacao.estaVazio(nome)){
        console.log('ERRO!!!: Não deixe nenhum espaço vazio')
        entradaDeDados.close()
        return
    }

    //Entrada do peso
    entradaDeDados.question('Digite se peso: ', function(peso){

        if(validacao.estaVazio(peso)){
            console.log('ERRO!!!: Não deixe nenhum espaço vazio')
            entradaDeDados.close()
            return
        }

        //Entrada da altura
        entradaDeDados.question('Digite sua altura: ', function(altura){

            if(validacao.estaVazio(altura)){
                console.log('ERRO!!!: Não deixe nenhum espaço vazio')
                entradaDeDados.close()
                return
            }

            let imc = validacao.calcularImc(peso, altura)

            if(imc === false){
                console.log('ERRO: Digite valores válidos')
                entradaDeDados.close()
                return
            }

            let clasificacao = validacao.classificacaoImc(imc)
            console.log(`Nome do paciente: ${nome}`)
            console.log(`Seu peso: ${peso}`)
            console.log(`Sua altura: ${altura}`)
            console.log(`Seu IMC é: ${imc.toFixed(2)}`)
            console.log(`${clasificacao}`)

        })
    })
})

