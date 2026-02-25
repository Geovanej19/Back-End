/**************************************************************************************************************
 * Objetivo: Criar um siste,a que permite o calculo de juros
 * utilizando boas práticas com funções
 * Autor: Geovane
 * Data: 11/02/2026
 * Versão: 1.0
 *************************************************************************************************************/

//Import da biblioteca do readline
const readline = require('readline')
const { text } = require('stream/consumers')

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entra do nome cliente
entradaDeDados.question(`Digite o nome do cliente: `, function(nome){
    let nomeCliente = nome

    //Entrada do produto
    entradaDeDados.question(`Digite o nome do produto: `, function(produto){
        let nomeProduto = produto
        
        //entrada do valor da compra
        entradaDeDados.question(`Digite o valor da compra: `, function(capital){
            let capitalProduto = capital

            //entrada do valor da taxa
            entradaDeDados.question(`Digite o valor percentual da taxa de juros: `, function(taxa){
                let taxaCompra = taxa

                //entrada do tempo
                entradaDeDados.question(`Digite o tempo para realizar o pagamento: `, function(tempo){
                    let tempoPagamento = tempo


                    //Import da biblioteca que realiza calculos financeiros
                    let calculos = require('./Modulo/calculos.js')



                    //let percentual = Number(taxaCompra) / 100
                    //let montante = Number(capitalProduto) * ((1 + Number(percentual)) ** Number(tempoPagamento))
                    let montante = calculos.calcularJuroCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){
                        console.log(`O montenate final é: ${montante.toFixed(2)}`)
                    }else{
                        console.log(`ERRO: Devido a problmeas no calculo de juros, o programa encerrou.`)
                        entradaDeDados.close()
                    }
                

                })
            })
        })
    })
})

//Criando uma função para Calcular o valor da compra parcelada
//Metodo tradicional de criar uma função
