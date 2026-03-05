const { log } = require("node:console")

/******************************************************************************************************************************
 * Funções para exercícios
 * Data: 27/02/2026
 * Autor: Geovane
 * Versão: 1.0
 *****************************************************************************************************************************/
const estaVazio = function(valor) {
    if (!valor || String(valor).trim() === "") {
        return true
    } else {
        return false
    }
}

const validarNumero = function(valor) {
    if (estaVazio(valor)) {
        return false
    }
    const numero = Number(String(valor).replace(",", "."))
    if (isNaN(numero)) {
        return false
    } else {
        return numero
    }
}


 // *****************************  EXERCÍCIO 01 - IMC ********************************

const calcularIMC = function(peso, altura) {
    const pesoNum = validarNumero(peso)
    const alturaNum = validarNumero(altura)

    if (pesoNum === false || alturaNum === false || pesoNum <= 0 || alturaNum <= 0) {
        return false
    }

    const imc = pesoNum / (alturaNum * alturaNum)
    return imc
}

const classificarIMC = function(imc) {
    if (imc === false || imc === undefined) {
        return "Dados inválidos"
    }

    if (imc < 18.5) {
        return "Abaixo do peso"
    } else if (imc <= 24.9) {
        return "Peso ideal"
    } else if (imc <= 29.9) {
        return "Acima do peso"
    } else if (imc <= 34.9) {
        return "Obesidade I"
    } else if (imc <= 39.9) {
        return "Obesidade II"
    } else {
        return "Obesidade III"
    }
}


 // ******************************* EXERCÍCIO 02 - MÉDIA ESCOLAR ****************************************

const calcularMedia = function(n1, n2, n3, n4) {
    const nota1 = validarNumero(n1)
    const nota2 = validarNumero(n2)
    const nota3 = validarNumero(n3)
    const nota4 = validarNumero(n4)

    if (nota1 === false || nota2 === false || nota3 === false || nota4 === false) {
        return false
    }
    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        return false
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4
    return media
}

const calcularMediaExame = function(media, notaExame) {
    const exame = validarNumero(notaExame)
    if (exame === false || exame < 0 || exame > 100) {
        return false
    }

    const mediaFinal = (media + exame) / 2
    return mediaFinal
}

const sexoAluno = function(sexo) {
    if (!sexo) return "aluno"
    if (sexo.toLowerCase() === "f") {
        return "aluna"
    } else {
        return "aluno"
    }
}

const sexoProfessor = function(sexo) {
    if (!sexo) return "professor"
    if (sexo.toLowerCase() === "f") {
        return "professora"
    } else {
        return "professor"
    }
}




// **************************************** Exercício 03 ************************************************

const entradaTabuada = function(valor){

    if(valor >= 2 && valor <= 100){
        return true

    }else{
        return false
    }
}


const valorTabuada = function(tabuada){

    if(tabuada >= 1 && tabuada <= 50){
        return true

    }else{
        return false
    }
}




function calcularTabuada(tabInicial, tabFinal, contInicial, contFinal) {

    let tab = tabInicial

    while (tab <= tabFinal) {

        let cont = contInicial

        while (cont <= contFinal) {
            console.log(`${tab} x ${cont} = ${tab * cont}`)
            cont++
        }
        console.log('')
        tab++
    }
}




// ************************************ Exercício 04 ****************************************

const validarFatorial = function(valor){

    const numero = Number(valor)

    if(Number.isNaN(numero)){
        return false

    }else if(!Number.isInteger(numero)){
        return false

    }else if(numero === 0){
        return false

    }else if(numero === 1){
        return false
    }

    return true 
}


const fatorial = function(valor){

    let numero = Number(valor)
    let resultado = 1
    let contador = numero
    let sequencia = ''

    while (contador > 1){
        resultado = resultado * contador
        sequencia += contador + 'x'
        contador--

    }

    sequencia += '1'

    return`Fatorial de ${numero} é ${sequencia} = ${resultado}`

}



// ************************************ Exercício 5 ******************************************

const validarNumeros = function(valor1, valor2){

    const n1 = Number(valor1)
    const n2 = Number(valor2)

    if (
        Number.isNaN(n1) || Number.isNaN(n2) ||
        !Number.isInteger(n1) || !Number(n2) ||
        n1 < 0 || n1 > 500 ||
        n2 < 100 || n2 > 1000 || n1 > n2 || n1 === n2
    ) {
        return false

    }

    return true
}


const parEImpar = function(valorInicial, valorFinal){

    let inicio  = Number(valorInicial)
    let final   = Number(valorFinal)

    let impar = inicio

    if(impar % 2 === 0){
        impar++
    }

    while (impar <= final){
        console.log(impar)
        impar+=2
    }


    let par = inicio

    if(par % 2 !== 0){
        par++
    }

    while (par <= final){
        console.log(par)
        par+=2
    }

}






module.exports = {
    estaVazio,
    validarNumero,
    calcularIMC,
    classificarIMC,
    calcularMedia,
    calcularMediaExame,
    sexoAluno,
    sexoProfessor,
    calcularTabuada,
    entradaTabuada,
    valorTabuada,
    validarFatorial,
    fatorial,
    validarNumeros,
    parEImpar
}