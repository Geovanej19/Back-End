/*******************************************************************************************
 * 
 * Objetivo: Arquivo responsável pelas funções de calcular (Somar, Subtrair, Multiplicar e Dividir)
 * data: 20/02/2026
 * Autor: Geovane
 * Versão: 1.0
 * 
 ********************************************************************************************/
//toLowerCase() -> Retorna a String em minusculo
//toUpperCase() -> Retorna a string em MAIUSCULO


//Modelo de função Anonima
//Calcular as 4 oprações matemáticas
//entrada das funções
const calcular = function(n1, n2, operador){
    let valor1 = Number(n1)
    
    let valor2 = Number(n2)

    let operadorMat = String(operador).toLocaleUpperCase()

    let resultado = false


    //Condicionais para validar qual o tipo de operação matemática
    //A ausencia das chaves na condicional é porque qualquer condicional que contenha apenas uma linha de processamento as chaves torna-se opcional
    //processamento da função
    // if(operadorMat == 'SOMAR')
    //     resultado = valor1 + valor2

    // else if(operadorMat == 'SUBTRAIR')
    //     resultado = valor1 - valor2

    // else if(operadorMat == 'MULTIPLICAR')
    //     resultado = valor1 * valor2

    // else if(operadorMat == 'DIVIDIR')
    //     resultado = valor1 / valor2

    switch (operadorMat) {
        case 'SOMAR': // if
            resultado = valor1 + valor2
            break;

        case 'SUBTRAIR': // else if
            resultado = valor1 - valor2
            break;
    
        case 'MULTIPLICAR': // else if
            resultado = valor1 * valor2
            break;

        case 'DIVIDIR': // else if
            resultado = valor1 / valor2
            break;
    
        default: // Else 
            break;
    }

     return resultado

    
    //console.log(operadorMat.toLocaleUpperCase)

}

console.log(calcular(21, 33, 'somar'))