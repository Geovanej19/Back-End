//Comentários em linha

/*
Comentário em bloco
*/


//Imprime no terminal
console.log('Testando o print do console')


//Permite criar uma variável
var nome = 'Geovane'

console.log(nome)


//Formas de concatenar variáveis
console.log('O nome do usuário é: ' + nome)
console.log(`O nome do usuário é: ${nome}`)


//Import da biblioteca para captar entrada de dados via terminal
var readline = require('readline') 


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//Função para retornar o nome digitado no terminal
    //O método question após a digitação chama a sua função "CALL BACK"
    //para entregar o que foi digitado no terminal, através do argumento
    //nomeUsuário
entradaDeDados.question('Favor digitar seu nome: ', function(nomeUsuario){
    console.log(' nome do usuário é: ' + nomeUsuario)

    //
    entradaDeDados.question('Favor digitar o seu e-mail: ', function(emailUsuario){
        console.log(`O email informado é: ${emailUsuario}`)

        entradaDeDados.question('Favor digitar seu numero: ', function(numeroUusario){
            console.log(`O número é: ${numeroUusario}`)

            entradaDeDados.question('Favor digitar o seu cep: ', function(cepUsuario){
                console.log(`Seu cep é: ${cepUsuario}`)
            })
        })


    })

})
