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
const listaDeNomes      = [ 'José', 
                            'Maria', 
                            'João', 
                            'André', 
                            'Alex', 
                            'Carlos',
                            'Ana', 
                            'Bruna',
                            'Jake',
                            'José',
                            'Jose da Silva']

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



    //Permite adicionar novos elementos no array sempre no Inicio da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)



    //Permite remover elementos do Final da lista(array)
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)


    //Permite remover elementos do inicio da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)


    //Splice() -> //Permite remover um elemento baseado no indice da lista
                        //Splice(indice, quantidade de elementos)
    listaDeFornecedores.splice(2, 1)
    console.table(listaDeFornecedores)


    //Splice() -> Permite adicionar um novo elemento em um detreminado lugar do array (indice)
                          //Indice, 0 -> Significa que não será removido ninguem, novo conteúdo
    listaDeFornecedores.splice(2,0, 'Carlos da Silva')
    console.table(listaDeFornecedores)

    listaDeFornecedores[1] = 'zezinho de souza'
}

const removerItem = function(nome){

    //Retrona o indice de um elemente fazendo a busca pelo valor
    //Se o index não encontrar o coteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    listaDeNomes.splice(indice,1)
    if(indice != -1){
        listaDeNomes.splice(indice, 1)
        return true

    }else {
        return false
    }


    //for(indice in listaDeNomes ){
    //    if(listaDeNomes[indice] == nome){
    //       listaDeNomes.splice(indice,3)
    //    }
    //}

}

const verificarItem = function(nome){

    //Verifica a existência de um conteúdo dentro de uma lista(true/false)
    return listaDeNomes.includes(nome)
 
}

const quantidadeDeItens = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1

    })
    return cont
}

const criandoDadosJSON = function(){
    let aluno = {   "nome": "José", 
                    "ra": 123456, 
                    "telefone": "9756235412", 
                    "email": "jose@gmial.com" 
                }

    //Exibindo o Objeto JSON completo
    console.log(aluno)


    //Exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)


    //Adicionar um novo atributo no JSON
    aluno.sexo = 'Masculino'
    aluno.idade = '20'
    console.log(aluno)


    //Remove um atributo do JSON
    delete aluno.telefone
    delete aluno.idade
    console.log(aluno)

}

const cadastroDeProdutos = function(){
    let cores = [
        {"id": 1, "cor": "Branco"}, //indice 0
        {"id": 2, "cor": "Preto"},  //indice 1
        {"id": 3, "cor": "Azul"},   //indice 2
        {"id": 4, "cor": "Rosa"},   //indice 3
        {"id": 5, "cor": "Cinza"}   //indice 4
    ]

    let marcas = [
        {"id": 1, "marca": "LG",          "telefone": "123456789", "email": "lg@lg.com.br"},
        {"id": 2, "marca": "Dell",        "telefone": "922351615", "email": "dell@dell.com.br"},
        {"id": 3, "marca": "Lenovo",      "telefone": "231554623", "email": "lenovo@lenovo.com.br"},
        {"id": 4, "marca": "Apple",       "telefone": "566132654", "email": "apple@apple.com.br"},
        {"id": 5, "marca": "Rayzer",      "telefone": "754651668", "email": "rayzer@rayzer.com.br"},
        {"id": 6, "marca": "Logitech",    "telefone": "651316651", "email": "logitech@logitech.com.br"},
        {"id": 7, "marca": "Multilaser",  "telefone": "126516546", "email": "multilaser@multi.com.br"},
    ]

    let produtos = [
        {
            "id": 1, 
            "nome": "monitor", 
            "descricao": "27 polegadas",
            "marca": [
                marcas[1].marca
            ],
            "qtde":20,
            "cor": [
                cores[4].cor,
                cores[1].cor
            ],
            "valor": 800.50
        
        },
        {
            "id": 2,
            "nome": "teclado",
            "descricao": "teclado mecânico RGB",
            "marca": [
                marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },
        {
            "id": 3,
            "nome": "Mouse",
            "descricao": "Mouse sem fio",
            "marca": [
                marcas[0].marca,
                marcas[1].marca,
                marcas[5].marca
            ],
            "qtde": 500,
            "cor": [
                cores[0].cor,
                cores[1].cor,
                cores[4].cor
            ],
            "valor": 80
        }




    ]



    // console.log(cores)
    // console.table(cores)

    // console.log(cores[1].nome)
    // console.log(produtos)
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor)

    console.table(produtos)

    produtos.forEach(function(produto){
        console.log(`Nome dos produtos: ${produto.nome}`)

    })

      //Percorre o objeto de marca dentro de cada produto para trazer as marcas
      itemProduto.marca.forEach(function(marca){
        console.log(`           Marca: ${marca}`)
        })

        //Percorre o objeto de cor dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function(cor){
        console.log(`                   Cor: ${cor.nomecor}`)

        })

            //Pesquisanod pela cor
    console.log("Pesquisando produto pela cor.......")

    let corBusca = "Branco"
    let status = false

    produtos.forEach(function(itemProduto){
    itemProduto.cor.forEach(function(itemCor){
        if (itemCor.nomecor.toUpperCase() === corBusca.toUpperCase()) {
            console.log(itemProduto)
            status = true
        }
        })
    })

    if(!status)
        console.log('Item pesquisado não foi encontrado.......')

}





// exibirDados()
// manipularDados()
// let resposta = removerItem('Jheniffer')
// if(resposta){
//     console.log('Item removido com sucesso.')

// }else {
//     console.log('Não foram encontrados itens para ser removido.')
// }
// console.table(listaDeNomes)

//console.log(verificarItem('Jheniffer'))

//console.table(listaDeNomes())

//criandoDadosJSON()

//cadastroDeProdutos()
// atividades

//cadastroDeProdutos()

console.log(quantidadeDeItens())