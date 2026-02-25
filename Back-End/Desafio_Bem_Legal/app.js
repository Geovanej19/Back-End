//import biblioteca
const console = require('console')
const readline = require('readline')

//Criar objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Nome da empresa
const empresa = "Viva moda"

//Nome do cliente
entradaDeDados.question('\nDigite o seu nome:', function(nome){
    let nomeCliente = nome

    //Nome do produto
    entradaDeDados.question('\nInforme o nome do Produto que deseja comprar:', function(produto){
        let nomeProduto = produto

        //Valor da compra
        entradaDeDados.question('\nInforme o valor da compra:', function(valorCompra){
            let valor = valorCompra

            //Valor do juros
            entradaDeDados.question('\nDigite o percentual de juros:', function(juros){
                let valorJuros = juros

                //tempo de pagamento
                entradaDeDados.question('\nInforme o tempo em que deseja pagar: ', function(tempo){
                    let tempoPagamento = tempo

                        //Tempo em meses ou anos
                        entradaDeDados.question("O tempo informado está em: 1-> Meses | 2-> Anos: ", function(tipoTempo){
                            let tipo = tipoTempo

                        //Validação para não deixar um espeço vazio
                        if(nomeCliente == '' || nomeProduto == '' || valor == '' || valorJuros == '' || tempoPagamento == ''){
                            console.log('!!!!ERRO, é obrigatório o preenchimento de todos os dados')
                            entradaDeDados.close()
                            return;

                        //Validação para não digita letas no campos dos numéricos
                        }else if(isNaN(valor) == true || isNaN(valorJuros) == true || isNaN(tempoPagamento) == true){
                            console.log(`!!!!Erro não é permitido digitar letras nos campos núméricos`)
                            entradaDeDados.close()
                            return;   
                        }

                        //Validação e conversão dos valores
                        valor = Number(valor)
                        valorJuros = Number(valorJuros)
                        valorJuros = Number(valorJuros)
                        tempoPagamento = Number(tempoPagamento)
                        tipo = Number(tipo)

                        if(valor < 0){
                            console.log('!!!!!Erro, você precisa informar um valor maior do que 0')
                            entradaDeDados.close()
                            return
                        }else if(valorJuros < 0){
                            console.log('!!!!ERRO, você precisa informar maior que 0')
                            entradaDeDados.close()
                            return
                        }else if(tempoPagamento < 0){
                            console.log('!!!!!ERRO, digite um tempo válido')
                            entradaDeDados.close()
                            return
                        }else if(tipo != 1 && tipo != 2){
                            console.log("!!!!! ERRO: escolha 1 para Meses ou 2 para Anos !!!!!")
                            entradaDeDados.close()
                            return
                        }
                        //Converter anos para meses
                        if(tipo == 2){
                            tempo = tempo * 12
                        }
                        //Converter a porcentagem para decimal
                        let capital = juros / 100

                        //Calcula o montante final
                        let Montante = valor * Math.pow(1 + capital, tempo)

                        //Valor do acréscimo
                        let acrescimo = Montante - valor

                        //Saída de dados
                        console.log(`\nMontante Final: R$ ${Montante.toFixed(2)}`)
                        console.log(`\n*******************************************************************`)
                        console.log(`\n********************* ${empresa} ******************************`)
                        console.log(`\nMuito obrigado por realizar a sua compra conosco Sr(a), ${nome}`)
                        console.log(`\nA compra do produto, ${produto}, tem um valor de: ${valor.toFixed(2)}`)
                        console.log(`\nA sua compra será parcelada em, ${tempo}, vezes e o Sr(a) pagará: ${Montante.toFixed(2)}`)
                        console.log(`\nO acréscimo realizado ao valor de: ${acrescimo.toFixed(2)}`)
                        console.log(`\nMuito obrigado por escolher a "${empresa}" `)
                        console.log(`\n********************************************************************`)
                    })
                })
            })
        })
    })
})
//Fim do Projeto