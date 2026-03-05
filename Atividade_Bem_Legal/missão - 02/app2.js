/***************************************************************************************************************************
 * 
 * Objetivo: Gerenciar média escolar de uma universidade
 * Data: 27/02/2026
 * Autor: Geovane
 * Versão: 1.0
 * 
 ***************************************************************************************************************************/

const readline = require('readline')
const console = require('console')

//Criar o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Informe o nome do Aluno(a): ', function(nome){

    entradaDeDados.question('Sexo do Aluno(a): ', function(generoAluno){


        entradaDeDados.question('Nome do Professor(a): ', function(nomeProf){


            entradaDeDados.question('Sexo do Professor(a): ', function(generoProf){


                entradaDeDados.question('Nome do curso: ', function(curso){


                    entradaDeDados.question('Nome da disciplina: ', function(disciplina){
                        

                        entradaDeDados.question('4 notas que podem ser entre 0 e 100: ', function(notas){

                        })
                    })
                })
            })
        })
    })
})