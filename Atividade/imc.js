/*******************************************************************************************************************************
 * Exercício 01 - Imc 
 * Autor: Geovane
 * Data: 27/02/2026
 * Versão: 1.0
 *******************************************************************************************************************************/


//Chamando as funções dentro do arquivo que ira expor os resultados
const readline = require("readline")
const funcoesImc = require("./modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome do usuário
entradaDeDados.question("Digite seu nome: ", function(nomeUsuario){

  if(funcoesImc.estaVazio(nomeUsuario)){
    console.log("Erro: Nome do usuário não pode estar vazio.")
    entradaDeDados.close()
    return
    }
    
    //Entrada do peso 
    entradaDeDados.question("Digite seu peso: ", function(peso){

      if(funcoesImc.estaVazio(peso)){
        console.log('Erro: o peso não pode estar vazio')
        entradaDeDados.close()
        return
      }



      //Entrada da altura
      entradaDeDados.question("Digite sua altura: ", function(altura){

        if(funcoesImc.estaVazio(altura)){
          console.log('Erro: A altura não pode estar vazia')
          entradaDeDados.close()
          return
        }

        let imc = funcoesImc.calcularIMC(peso, altura)

        if(imc === false){
          console.log("Erro: Peso ou altura inválidos.")
          entradaDeDados.close()
          return
        }

        let classificacao = funcoesImc.classificarIMC(imc)

        console.log(`\n ************************* RESULTADO IMC ****************************`)
        console.log(`\nUsuário: ${nomeUsuario}`)
        console.log(`Peso: ${peso} KG`)
        console.log(`Altura: ${altura}`)
        console.log(`IMC: ${imc.toFixed(2)}`)
        console.log(`Classificação: ${classificacao}`)
        console.log(`\n *********************************************************************`)

        entradaDeDados.close()
    })
  })
})
