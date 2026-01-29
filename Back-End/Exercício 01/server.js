
//Import da biblioteca
var readline = require('readline')

//Criação do objeto
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



//Entrada de dados
entradaDeDados.question('Favor digitar o seu nome:  ', function(nomeUsuario){

    entradaDeDados.question('Favor digitar primeiro numero: ', function(numero1){

        entradaDeDados.question('Favor digitar o segunda numero: ', function(numero2){

            entradaDeDados.question('Favor digitar o terceiro numero: ', function(numero3){

                var soma = Number(numero1) + Number(numero2) + Number(numero3)
                console.log(`Seu nome é: ${nomeUsuario}` +
                            ` e a soma é: ${soma}`
                )

            })
        })
    })
})