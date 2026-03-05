/***************************************************************************************************************************************************************************
 * 
 * Obejetivo: Funções para calcular IMC
 * Data: 27/02/2026
 * Autor: Geovane
 * Versão: 1.0
 *
 ****************************************************************************************************************************************************************************/

//================== Missão - 01 ================================

// Verifica se o campo está vazio
const estaVazio = function(valor) {
    return !valor || String(valor).trim() === ""
}


//Validar se é um número
const validarNumero = function(valor){
    if(estaVazio(valor)){
        return false
    }

    let num = Number(String(valor).replace(",", "."))

    if(isNaN(num)){
        return false
    }

    return num
}


//Função para calcular o IMC do usuário
const calcularImc = function(peso, altura){

    if(peso <= 0 || peso == '' || altura <= 0 || altura == ''){
        return false
    }else{
        return peso / (altura * altura).toFixed(2)
    }

    
}


//Função para validar o nível de IMC
const classificacaoImc = function(resultado){

    if(resultado < 18.5){
        return('Você está abaixo do peso')

    }else if(resultado <= 24.9){
        return('Você está com o peso ideal')

    }else if(resultado <= 29.9){
        return('Você está acima do seu peso')

    }else if(resultado <= 34.9){
        return('Você está com obesidade nível 1')

    }else if(resultado <= 39.9){
        return('Você está com obesidade nível 2')

    }else{
        return('Você está com obesidade nível 3')

    }
}



//================== Missão - 02 ==============================

const vazio = function(notas) {
    return !notas || String(notas).trim() === ""
}

const validarNotas = function(n1, n2, n3, n4){

    if(n1 < 0 && n1> 100 ){
        return('ERRO: Os valores digitados nas notas devem obrigatoriamente estar entre 0 e 100')

    }else if(n2 < 0 && n2 > 100){
        return('ERRO: Os valores digitados nas notas devem obrigatoriamente estar entre 0 e 100')

    }else if(n3 < 0 && n3 > 100){
        return('ERRO: Os valores digitados nas notas devem obrigatoriamente estar entre 0 e 100')

    }else if(n4 < 0 && n4 > 100){
        return('ERRO: Os valores digitados nas notas devem obrigatoriamente estar entre 0 e 100')

    }
}

const status = function(media){

    if(media >= 70){
        return('Status: Aluno(a) Aprovado')

    }else if(media >=50 && media <= 69){
        return('Status: Aluno(a) está de exame')

    }else if(media < 50){
        return('Status: Aluno(a) Reprovado')
    }
}


module.exports = {
    estaVazio,
    validarNumero,
    calcularImc,
    classificacaoImc,
    validarNotas,
    vazio,


}
