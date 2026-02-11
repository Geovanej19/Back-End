/***********************************************************************************
 * Objetivo: Aruqivo responsável pelas funções de calculos para este projeto
 * Autor: Geovane
 * Data: 11/02/2026
 * 
 * 
 * 
 * 
 * 
*/

const Module = require("node:module")

function calcularJuroCompostos(valorCompra, taxaJuros, tempoPagto){
    //Recebe os argumentos da função em variáveis locais
    //Number converter Strings para números
    //As variáveis (valor), (taxa), (tempo) são numéricas por conta da conversão
    //Mas os argumentos (valorCompra, taxaJuros, tempoPagto ainda serão Strings)
    let valor   = Number(valorCompra)
    let taxa    = Number(taxaJuros)
    let tempo   = Number(tempoPagto)


    //Validação para entradas vazias ou de carcteres inválidos
    if(valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)){
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos')
        return false
    }else{

        
        //Chama a função para converter o número em percentual
        let percentual = calcularPercentual(taxa)
        
        //Validação para o erro do percenteual na função calcularPercentual()
        if(percentual){
            let montante = valor * ((1 + percentual) ** tempo)
            return Number(montante.toFixed(2))
        }else{
            console.log('ERRO: Valor da taxa está incorreto.')
            return false
        }
        
    }    
}

//Calcula o percentual de um número
function calcularPercentual(numero){
    let numeroPercentual = Number(numero)


    //Validação para verificar se é um número válido
    if(numero == '' || numero <= 0 || isNaN(numero)){
        return false //Não pode processar
    }else{
        //Processamento do calculo do percentual
        let percentual = numeroPercentual / 100
        return percentual
    }
}

Module.exports = {
    calcularJuroCompostos,
    calcularPercentual
}