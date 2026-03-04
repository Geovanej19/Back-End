/*******************************************************************************************************************************
 * Exercício 03 - Tabuada
 * Autor: Geovane
 * Data: 04/03/2026
 * Versão: 1.0
 *******************************************************************************************************************************/

//Import da biblioteca
const readline = require("readline")
const funcoesTabuada = require("./modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada da tabuada inial
entradaDeDados.question('Digite a tabuada inicial: ', function(tabuaI){

    if(funcoesTabuada.estaVazio(tabuaI)){
        console,log('ERRO: Este campo não pode estar vazio')
        entradaDeDados.close()
        return
    }


    //Entrada da tabuada final
    entradaDeDados.question('Digite a tabuada final: ', function(tabuadaF){

        if(funcoesTabuada.estaVazio(tabuadaF)){
            console.log('ERRO: Este campo não pode estar vazio')
            entradaDeDados.close()
            return
        }

        //Entrada do contador inicial
        entradaDeDados.question('Digite o número inicial do contador: ', function(contadorI){
            if(funcoesTabuada.estaVazio(contadorI)){
                console.log('ERRO: Este campo não pode estar vazio')
                entradaDeDados.close()
                return
            }


            //Entrada do contador Final
            entradaDeDados.question('Digite o contador final: ', function(contadorF){

                if(funcoesTabuada.estaVazio(contadorF)){
                    console.log('ERRO: Este campo não pode estar vazio')
                    entradaDeDados.close()
                    return
                }


                //Calcular a tabuada

                let tabuada = funcoesTabuada.calcularTabuada(
                    Number(tabuaI),
                    Number(tabuadaF),
                    Number(contadorI),
                    Number(contadorF)
                )

                entradaDeDados.close()
            })
        })
    })
})

