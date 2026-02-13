
function validarOperacao(operacao){

    const operadores = ('Adição', 'Subtração', 'multiplicação', 'Divisão')

    if(!operadores.includes(operacao.toLowerCase())){
        return false
    }

    return true

}


function operacoesMatematicas(valor1, valor2, operacao){

    valor1 = Number(valor1)
    valor2 = Number(valor2)
    let resultado

    if(operacao === 'adição'){
        operacao = valor1 + valor2

    }else if(operacao === 'subtração'){
        operacao = valor1 - valor2

    }else if(operacao === 'Multiplicação'){
        operacao = valor1 * valor2

    }else if(operacao === 'Divisão'){
        if(valor1 == 0 || valor2 == 0){
            return (`ERRO: divisão por zero`)
        }
        resultado = valor1 / valor2

    }else{
          return (`Operção inválida`)
    }

    console.log(`Resultado: ${resultado.toFixed(2)}`)

}

module.exports = {
    operacoesMatematicas,
    validarOperacao
}