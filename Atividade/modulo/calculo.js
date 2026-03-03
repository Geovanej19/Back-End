/*******************************************************************************************************
 * 
 * Objetivo: Sistema que calcula IMC
 * data: 02/03/2026
 * Autor: Geovane
 * Versão: 1.0
 * 
 ********************************************************************************************************/

const estaVazio = function(valor) {
    if (!valor || String(valor).trim() === "") {
        return true
    } else {
        return false
    }
}

const validarNotas = function(n1, n2, n3, n4, exame){

  const nota1 = validarNumero(n1)
  const nota2 = validarNumero(n2)
  const nota3 = validarNumero(n3)
  const nota4 = validarNumero(n4)

  if(nota1 === false || nota2 === false || nota3 === false || nota4 === false){
    return false
  }

  if(n1 > 0 && n1 < 100 || n2 > 0 && n2 < 100 || n3 > 0 && n3 < 100 || n4 > 0 && n4 < 100){
    return false
  }
}



const calcularMedia = function(n1, n2, n3, n4){

  let media = Number(n1 + n2 + n3 + n4) / 4

  return media
}


const validarMedia = function(media){

  if(media >= 70 ){

  }else if(media >=50 || media <= 69){

    if(media > 60){
    }

  }else if(media < 50){
  }
}

const calcularMediaExame = function(media, notaExame) {
    const exame = validarNumero(notaExame)
    if (exame === false || exame < 0 || exame > 100) {
        return false
    }

    const mediaFinal = (media + exame) / 2
    return mediaFinal
}

const sexoAluno = function(sexo){

  if (!sexo) return "aluno"
  if (sexo.toLowerCase() === 'f'){

    return 'Aluna'

  }else{
    return 'Aluno'
  }
}

  const sexoProfessor = function(sexo){

    if (!sexo) return "professor"
    if (sexo.toLowerCase() === 'f'){

      return 'Professora'

    }else{
     return 'Professor'
    }
  }




module.exports = {
  calcularMedia, 
  validarNotas,
  validarMedia,
  sexoAluno,
  sexoProfessor,
  estaVazio
}

