const express = require('express')
const router = express.Router()

const {
    getListaDeEstados,
    getDadosEstado,
    getCidades,
    getEstadosRegiao,
    getCapitalPais
} = require('../Modulo/funcoes.js')


// ✅ GET /estados
router.get('/', (req, res) => {
    const resultado = getListaDeEstados()
    return res.status(200).json(resultado)
})


// ✅ GET /estados/capital-pais
router.get('/capital-pais', (req, res) => {
    const resultado = getCapitalPais()

    if (!resultado) {
        return res.status(404).json({ erro: 'Nenhuma capital encontrada' })
    }

    return res.status(200).json(resultado)
})


// ✅ GET /estados/regiao/:regiao
router.get('/regiao/:regiao', (req, res) => {
    const regiao = req.params.regiao

    const resultado = getEstadosRegiao(regiao)

    if (!resultado) {
        return res.status(404).json({ erro: 'Região não encontrada' })
    }

    return res.status(200).json(resultado)
})


// ⚠️ ROTAS DINÂMICAS (SEMPRE POR ÚLTIMO)


// ✅ GET /estados/:uf/cidades
router.get('/:uf/cidades', (req, res) => {
    const uf = req.params.uf

    const resultado = getCidades(uf)

    if (!resultado) {
        return res.status(404).json({ erro: 'Estado não encontrado' })
    }

    return res.status(200).json(resultado)
})


// ✅ GET /estados/:uf
router.get('/:uf', (req, res) => {
    const uf = req.params.uf

    const resultado = getDadosEstado(uf)

    if (!resultado) {
        return res.status(404).json({ erro: 'Estado não encontrado' })
    }

    return res.status(200).json(resultado)
})


module.exports = router