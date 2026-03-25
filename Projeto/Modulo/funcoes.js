/********************************************************************************************************
 * 
 * Desafio: Estados
 * Autor: Geovane
 * Versão: 1.0
 * Data: 20/03/2026
 * 
 ********************************************************************************************************/

const listaDeEstados = require('./estados_cidades.js')


const getListaDeEstados = function(){

    let siglas = listaDeEstados.listaDeEstados.estados.map(function(estado){
        return estado.sigla

    })

    return {
        uf: siglas,
        quantidade: siglas.length
    }
}

const getDadosEstado = function(siglas){

    let estado = listaDeEstados.listaDeEstados.estados.find(function(estado){
        return estado.sigla.toLocaleUpperCase() === siglas.toLocaleUpperCase()
    })

    if(!estado){
        return false
    }else{

        return {
            uf: estado.sigla,
            descricao: estado.nome,
            capital: estado.capital,
            regiao: estado.regiao
        }
    }

}

const getCapitalEstado = function(uf){
    let estado = listaDeEstados.listaDeEstados.estados.find(function(estado){
        return estado.sigla == uf
    })

    if(!estado){
        return false
    }else{
        return {
            uf: estado.sigla, descricao: estado.nome, capital: estado.capital
        }
    }
}

const getEstadosRegiao = function(regiao){

    let filtroEstados = listaDeEstados.listaDeEstados.estados.filter(function(estado){
        return estado.regiao === regiao
    })

    if(filtroEstados.length === 0){
        return false
    }else{
        return {
            regiao: regiao,
            estados: filtroEstados.map(function(estado){
                return {
                    uf: estado.sigla, 
                    descricao: estado.nome
                }
            })
        }
    }
}

const getCapitalPais = function(){

    let capitais = listaDeEstados.listaDeEstados.estados.filter(function(estado){

        return estado.capital_pais != undefined
    })
    .map(function(estado){
        return{
            capital_atual: estado.capital_pais.capital,
            uf: estado.sigla,
            descricao: estado.nome,
            capital: estado.capital,
            regiao: estado.regiao,
            capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
            capital_pais_ano_termino: estado.capital_pais.ano_fim
        }
    })

    if(capitais.length === 0){
        return false
    }else{
        return {capitais: capitais}
    }
  

}

const getCidades = function(uf){
    let estado = listaDeEstados.listaDeEstados.estados.find(function(estado){
        return estado.sigla.toLowerCase() == uf.toLowerCase() ||
               estado.nome.toLowerCase() == uf.toLowerCase()
    })

    if(estado == undefined){
        return false
    }

    return {
        uf: estado.sigla,
        descricao: estado.nome,
        quantidade_cidades: estado.cidades.length,
        cidades: estado.cidades.map(function(cidade){
            return {
                nome: cidade.nome,
                id: cidade.id
            }
        })
    }
}

<<<<<<< HEAD
console.log(getCidades('SP'))
=======
console.log(getCidades('RJ'))
>>>>>>> 73637ae (Projeto Finalizado)
