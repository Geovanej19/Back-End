/*******************************************************************************************************************************
 * Exercício 01 - Imc 
 * Autor: Pedro
 * Data: 27/02/2026
 * Versão: 1.0
 *******************************************************************************************************************************/
//Chamamso as funções dentro do arquivo que ira expor os resultados
const readline = require("readline")
const funcoesImc = require("./modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Olá doutor, digite seu nome: ", function(nomeDoutor){

    if(funcoesImc.estaVazio(nomeDoutor)){
        console.log("Erro: Nome do doutor não pode estar vazio.")
        entradaDeDados.close()
        return
    }

    entradaDeDados.question("Digite o nome do paciente: ", function(nomePaciente){

        if(funcoesImc.estaVazio(nomePaciente)){
            console.log("Erro: Nome do paciente não pode estar vazio.")
            entradaDeDados.close()
            return
        }

        entradaDeDados.question("Digite o peso do paciente: ", function(peso){

            entradaDeDados.question("Digite a altura do paciente: ", function(altura){

                let imc = funcoesImc.calcularIMC(peso, altura)

                if(imc === false){
                    console.log("Erro: Peso ou altura inválidos.")
                    entradaDeDados.close()
                    return
                }

                let classificacao = funcoesImc.classificarIMC(imc)

                console.log("\n" + "*".repeat(15) + " Calculadora IMC " + "*".repeat(15))
                console.log("Doutor:", nomeDoutor)
                console.log("Paciente:", nomePaciente)
                console.log("Peso:", peso, "Kg")
                console.log("Altura:", altura, "m")
                console.log("IMC:", imc.toFixed(2))
                console.log("Classificação:", classificacao)
                console.log("*".repeat(45) + "\n")

                entradaDeDados.close()
            })
        })
    })
})
