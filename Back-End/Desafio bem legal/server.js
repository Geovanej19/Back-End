
const console = require('console')
const readline = require('readline')


const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome:', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Informe o nome do Produto que deseja comprar:', function(produto){
        let nomeProduto = produto

        entradaDeDados.question('Informe o valor da compra:', function(valorCompra){
            let valor = Number(valorCompra)

            entradaDeDados.question('Digite o percentual de juros:', function(juros){
                let valorJuros = juros

                entradaDeDados.question('Informe o tempo a qual deseja pagar:', function(tempo){
                    let tempoPagamento = tempo

                    //Calculo do Juros compostos
                    const capital = Number(valor)
                    const taxa = Number(juros)
                    const t = Number(tempo)

                    const i = taxa / 100
                    const Montante = capital * Math.pow(1 + i, t)

                    console.log('\nMontante Final: R$', Montante.toFixed(2))



                    console.log(`\n******************, ${nomeEmpresa}, ********************`)
                    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a): , ${nome}`)

                })

            })

        })
    })
})
//Fim do Projeto