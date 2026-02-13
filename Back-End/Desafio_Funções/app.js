/***********************************************************************************
 * Objetivo: Criar um sistema para realizar o calculo das operações matemáticas
 * Autor: Geovane
 * Data: 13/02/2026
 * Versão: 1.0
 ***********************************************************************************/

//Import da biblioteca
const readline = require('readline')
const {validarOperacao, operacoesMatematicas} = require('./modulo/calculos.js')


//Criar objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do primeiro número
entradaDeDados.question(`\nDigite um número: `, function(numero1){
    let valor1 = numero1

    //Entrada do segunda número
    entradaDeDados.question(`\nDigite o segundo número: `, function(numero2){
        let valor2 = numero2

        //Entrada das operações mateáticas
        entradaDeDados.question(`\nDigite a operação que deseja utilizar: (Adição, Subtração, Divisão, Multiplicação): `, function(operacao){
            let operacaoMat = operacao
            
            
            numero1 = Number(numero1)
            numero2 = Number(numero2)

            //Validações
            if(valor1 == '' || valor2 == '' || operacaoMat == ''){
                console.log(`ERRO: Você não pode deixar nenhum linha em branco !!!`)
                return false

            }else if(isNaN(valor1) || isNaN(valor2)){
                console.log(`Digite apenas números nos campos numéricos`)
                entradaDeDados.close()
                return false

            }
       })
    })
})