/*******************************************************************************************************************************
 * Exercício 02 - Média
 * Autor: Geovane
 * Data: 27/02/2026
 * Versão: 1.0
 *******************************************************************************************************************************/
/*******************************************************************************************************************************
 * Exercício 02 - Média
 * Autor: Geovane
 * Data: 27/02/2026
 * Versão: 3.1 (Sem função finalizar, saída direta no app.js)
 *******************************************************************************************************************************/
const readline = require("readline")
const funcoesMedia = require("./modulo/calcular")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do aluno: ", function(nomeAluno){

    if(funcoesMedia.estaVazio(nomeAluno)){
        console.log("Erro: O nome do aluno não pode estar vazio.")
        entradaDeDados.close()
        return
    }

    entradaDeDados.question("Digite o nome da disciplina: ", function(disciplina){

        if(funcoesMedia.estaVazio(disciplina)){
            console.log("Erro: A disciplina não pode estar vazia.")
            entradaDeDados.close()
            return
        }

        entradaDeDados.question("Digite o nome do curso: ", function(curso){

            if(funcoesMedia.estaVazio(curso)){
                console.log("Erro: O curso não pode estar vazio.")
                entradaDeDados.close()
                return
            }

            entradaDeDados.question("Digite o nome do professor: ", function(nomeProfessor){

                if(funcoesMedia.estaVazio(nomeProfessor)){
                    console.log("Erro: O nome do professor não pode estar vazio.")
                    entradaDeDados.close()
                    return
                }

                entradaDeDados.question("Digite o sexo do aluno (M/F): ", function(sexoAluno){

                    if(funcoesMedia.estaVazio(sexoAluno)){
                        console.log("Erro: O sexo não pode estar vazio.")
                        entradaDeDados.close()
                        return
                    }

                    entradaDeDados.question("Digite a primeira nota: ", function(nota1){

                        if(funcoesMedia.estaVazio(nota1)){
                            console.log("Erro: A primeira nota não pode estar vazia.")
                            entradaDeDados.close()
                            return
                        }

                        entradaDeDados.question("Digite a segunda nota: ", function(nota2){

                            if(funcoesMedia.estaVazio(nota2)){
                                console.log("Erro: A segunda nota não pode estar vazia.")
                                entradaDeDados.close()
                                return
                            }

                            entradaDeDados.question("Digite a terceira nota: ", function(nota3){

                                if(funcoesMedia.estaVazio(nota3)){
                                    console.log("Erro: A terceira nota não pode estar vazia.")
                                    entradaDeDados.close()
                                    return
                                }

                                entradaDeDados.question("Digite a quarta nota: ", function(nota4){

                                    if(funcoesMedia.estaVazio(nota4)){
                                        console.log("Erro: A quarta nota não pode estar vazia.")
                                        entradaDeDados.close()
                                        return
                                    }

                                    // CALCULA A MÉDIA DAS 4 NOTAS
                                    let media = funcoesMedia.calcularMedia(nota1, nota2, nota3, nota4)

                                    if(media === false){
                                        console.log("Erro: Notas inválidas. Digite valores entre 0 e 100.")
                                        entradaDeDados.close()
                                        return
                                    }

                                    let situacao = ""
                                    let exame = null
                                    let mediaFinal = null

                                    // APROVADO DIRETO
                                    if(media >= 70){
                                        situacao = "Aprovado"

                                    // EXAME
                                    } else if(media >= 50){

                                        entradaDeDados.question("Digite a nota do exame: ", function(notaExame){

                                            if(funcoesMedia.estaVazio(notaExame)){
                                                console.log("Erro: A nota do exame não pode estar vazia.")
                                                entradaDeDados.close()
                                                return
                                            }

                                            exame = Number(notaExame)
                                            mediaFinal = funcoesMedia.calcularMediaExame(media, exame)

                                            // NOVA REGRA: aprova no exame apenas se media >= 60 e exame >= 60
                                            if(media >= 60 && exame >= 60){
                                                situacao = "Aprovado no exame"
                                            } else {
                                                situacao = "Reprovado no exame"
                                            }

                                            // SAÍDA FORMATADA
                                            console.log(`\n *********** RESULTADO FINAL ************`)
                                            console.log(`Aluno: ${nomeAluno}`)
                                            console.log(`Curso: ${curso}`)
                                            console.log(`Disciplina: ${disciplina}`)
                                            console.log(`Professor: ${nomeProfessor}`)
                                            console.log(`Média Final: ${media.toFixed(2)}`)

                                            if(exame !== null){
                                                console.log(`Nota do Exame: ${exame}`)
                                                console.log(`Média Final com Exame: ${mediaFinal.toFixed(2)}`)
                                            }

                                            console.log(`Situação: ${situacao}`)
                                            console.log("*".repeat(45) + "\n")

                                            entradaDeDados.close()
                                        })
                                        return
                                    // REPROVADO DIRETO
                                    } else {
                                        situacao = "Reprovado"
                                    }

                                    // SAÍDA FORMATADA (para aprovado direto ou reprovado direto)
                                    console.log(`\n ***************** RESULTADO FINAL ******************`)
                                    console.log(`Aluno: ${nomeAluno}`)
                                    console.log(`Curso: ${curso}`)
                                    console.log(`Disciplina:, ${disciplina}`)
                                    console.log(`Professor: ${nomeProfessor}`)
                                    console.log(`Média Final: ${media.toFixed(2)}`)
                                    console.log(`Situação: ${situacao}`)
                                    console.log(`\n****************************************************** \n`)

                                    entradaDeDados.close()

                                })
                            })
                        })
                    })
                })
            })
        })
    })
})