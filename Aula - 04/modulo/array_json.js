/*******************************************************************************************************************************
 * Objetivo: Manipular dados utilizando Array e JSON
 * Autor: Geovane
 * Data: 05/03/2026
 * Versão: 1.0
 *******************************************************************************************************************************/

/*
    [ ] -> Representa um objeto do tipo Array
    { } -> Representa um objeto do tipo JSON

    Array -> É um objeto na memoria que permite trabalhar com varios valores em um unico objeto

        let nome1 = 'José'
        let nome2 = 'Maria'
        let nome3 = 'João'

                indice     0       1       2
        let nome    =   ['Jose', 'Maria', 'João']


    JSON -> é um objeto na memoria que permite trabalhar com chave e valor

        let nome        = 'José'
        let telefone    = '123456789'
        let email       = 'jose@gmail.com'

        let nome = { 'nome': 'José', 
                    'Telfone': '123456789,
                    'email': 'jose@gmail.com' }

*/

//Formas de Criar um Array
const listaDeNomes      = ['José', 'Maria', 'João', 'André', 'Alex']
const listDeClientes    = []
const listaDeFornecedores = []

const exibirDados = function(){

    //Exibe o objeto array e seu conteúdo
    //console.log(listaDeNomes)

    //Exibe o objeto array em formato de tabela com seus
    //console.table(listaDeNomes)

    //Exibe apenas o valor do respectivo indice do array
    //console.log(listaDeNomes[1])

    //Retorna o tipo de dados de um indice do array
    //console.log(typeof(listaDeNomes[4]))

    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)


    //Estruturas de repetição
    //While

    console.log('\n===== While =====')

    let cont = 0
    while (cont < listaDeNomes.length){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
        cont+=1

    }

    console.log('\n===== For =====')

    for(let contador = 0; contador < listaDeNomes.length; contador++){
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    }


    //Retorna o conteúdo de cada elemento através de um CALL BACK
    console.log('\n===== For EACH =====')
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })
  

    //Retorna o indice do elemento, e será preciso colocar dentro do objeto array
    console.log('\n===== For IN =====')
    for(cliente in listaDeNomes){
        console.log(`O nome do cliente é: ${listaDeNomes[cliente]}`)
    }



    //Percorre o array e retorno somente o conteúdo de cada índice, sendo muito parecido com o for EACH
    console.log('\n===== For OF =====')
    for (cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }
    

    console.log(listaDeNomes.length)

}

const manipularDados = function(){
    //Adicionando valores novos no array através de índices
   //listDeClientes[0] = 'José da Silva'
    //listDeClientes[1] = 'Maria da Silva'
    //listDeClientes[2] = 'João da Silva'

    //console.log(listDeClientes)


    //Permite adicionar novos valores no array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'Ande da Silva', 'Carlos da Silva')

    console.log(listeDeFornecedores)
}


//exibirDados()
manipularDados()

