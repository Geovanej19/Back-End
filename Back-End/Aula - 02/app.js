/*******************************************************************************************************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Marcel
 * Versão: 1.0
 * Deve: Geovane
 ******************************************************************************************************************************************************/

/*

    Existem 3 formas de criação de variáveis

        var -> Permite a crição de um espaço na memória do tipo variável. Foi utilizado muito em projetos antigos.
            Recomendação: Caso você queira utilizar, recomenda-se na criação de variáveis globais (inicio do codigo).


        let -> Permite a criação de um espaço na memória do tipo variável. A utilização deste padrao é para a criação dentro de blocos de programação {}.
        Essa variável nasce e morre dentro deste bloco.
        Não é recomendado a sua utilização em escopo global


        const -> Permite a criação de um espaço na memoria onde não sofrera alteração durante o código. A const pode ser utilizada dentro e fora de bloco {}.
        Dica: Caso você queira difrenciar uma const, var, ou let.
        A const você pode criar com letras   maiúsculas

*/

//Import da biblioteca
const console = require('console')
const readline = require('readline')

//Criar o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    //Recebe o nome do aluno que foi digitado
    let nomeAluno = nome

    //Enrada nota 1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        //Entrada da nota 2
        entradaDeDados.question('Digite a nota 2:', function(valor2){
            let nota2 = valor2

            //Entrada da nota 3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
                let nota3 = valor3

                //Entrada da nota 4
                entradaDeDados.question('Digite a nota 4:', function(valor4){
                    let nota4 = valor4


                    /*Operadores de comparação

                    ==  -> permite comparar a igualdade de dois conteúdos
                    <   -> permite comparar valores menores
                    >   -> permite comparar valores maiores
                    >=  -> permite comparar valores maiores ou iguais
                    <=  -> permite comparar valores menores ou iguais
                    !=  -> permite comparar a diferença entre coteúdos
                    === -> permite comparar a igualdade de conteúdo e a igualdade da tipagem de dados
                    !== -> permite comparar a diferença de conteúdos e a igualdade de tipos de dados
                    ==! -> permite comparar a igualdade de conteúdo e a diferença de tipos de dados
                    !=! -> permite comparar a diferença de conteúdos e a diferença de dados
                    */

                    /*Operadores lógicos
                        E -> AND -> &&
                        OU -> OP -> ||
                        NÃO -> NOT -> !
                    */
                   /*
                            Converões de tipos de dados
                                parseInt() -> Permite coverter uma String para um número inteiro
                                parseFloat() -> Permite converter um número inteiro para decimal
                                Number() -> Permite converter um String para um número (Inteiro ou decimal)
                                String() -> Permite converter um conteúdo para String
                                Boolean() -> Permite converter um conteúdo para boleano
                            typeof() -> Permite verificar o tipo de dados de uma variável
                            toFixed() -> Permite fixar a quantidade de casas decimais
                        */
                 
                    //Validação de entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: é obrigatório o preenchimento de todos os dados !!!')

                    //Validação de números entre 0 e 100
                    }else if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ||
                        nota1 >100 || nota2 >100 || nota3 >100 || nota4 >100){
                        console.log('ERRO: Somente é permitido a entrada de valores entre 0 e 100')

                        //Validação para entrada de letras nas notas
                        //isNAN() -> permite validar se o conteúdo da variável tem algum carcter ao invés de um némero
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('Não é possivel calcular à média com a entrada de letras na nota do aluno!!')

                    }else{
                        let statusAluno
                        
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                         
                        if(media >= 70){
                             statusAluno = ('Aluno(a) Está aprovado')
                             
                        }else if(media >= 50 && media < 70){
                                statusAluno = ('Aluno(a) Está de Recuperação')
                                
                        }else if(media < 50){
                                
                            statusAluno = ('Aluno(a) Está Reprovado')
                        }
                        console.log(`O aluno(a) ${nomeAluno} /nmédia final ${media.toFixed(2)} /nstatus do Aluno(a): ${statusAluno}`)
                    }
                })
            })
        })
    })
})