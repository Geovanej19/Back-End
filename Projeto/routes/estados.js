const express = require('express')
const router = express.Router()
const { getListaDeEstados, getDadosEstado, getCidades, getEstadosRegiao, getCapitalPais } = require('../Modulo/funcoes.js')

// GET /estados
router.get('/', (req, res) => {
    const resultado = getListaDeEstados()
    res.json(resultado)
})

// GET /estados/capital-pais  ← deve vir ANTES de /:uf
router.get('/capital-pais', (req, res) => {
    const resultado = getCapitalPais()

    if (!resultado) {
        return res.status(404).json({ erro: 'Nenhuma capital encontrada' })
    }

    res.json(resultado)
})

// GET /estados/regiao/:regiao  ← deve vir ANTES de /:uf
router.get('/regiao/:regiao', (req, res) => {
    const resultado = getEstadosRegiao(req.params.regiao)

    if (!resultado) {
        return res.status(404).json({ erro: 'Região não encontrada' })
    }

    res.json(resultado)
})

// GET /estados/:uf
router.get('/:uf', (req, res) => {
    const resultado = getDadosEstado(req.params.uf)

    if (!resultado) {
        return res.status(404).json({ erro: 'Estado não encontrado' })
    }

    res.json(resultado)
})

// GET /estados/:uf/cidades
router.get('/:uf/cidades', (req, res) => {
    const resultado = getCidades(req.params.uf)

    if (!resultado) {
        return res.status(404).json({ erro: 'Estado não encontrado' })
    }

    res.json(resultado)
})

module.exports = router