/*******************************************************************************************************************************
 * Exercício 05 - Par e Ímpar 
 * Autor: Geovane
 * Data: 27/02/2026
 * Versão: 1.0
 *******************************************************************************************************************************/


//Chamando as funções dentro do arquivo que ira expor os resultados
const readline = require("readline")
const funcoesParImpar = require("./modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('\nDigite o numero inicial: ', function(numero1){

    if(funcoesParImpar.estaVazio(numero1)){
        console.log('Erro: Este campo não pode estar vazio')
        entradaDeDados.close()
        return
    }


    entradaDeDados.question('\nDigite o número final: ', function(numero2){

        if(funcoesParImpar.estaVazio(numero2)){
            console.log('Erro: Este campo não pode estar vazio')
            entradaDeDados.close()
            return
        }


        entradaDeDados.question('\nDigite se deseja ver a lista de Pares ou Ímpares: (1 = Ímpar) - (2 = Par) - (3 = Ambos): ', function(lista){

            if(funcoesParImpar.estaVazio(lista)){
                console.log('Erro: Este campo não pode estar vazio')
                entradaDeDados.close()
                return
            }

            let paresEImpares = funcoesParImpar.parEImpar(
                Number(numero1),
                Number(numero2),
                Number(lista)
            )

            entradaDeDados.close()
            return paresEImpares

        })  
    })
})
