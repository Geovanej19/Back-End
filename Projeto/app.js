const express = require('express')
const app = express()

const estadosRoutes = require('./routes/estados')

app.use('/estados', estadosRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})


// Http://localhost:3000/estados — lista todas as siglas
// http://localhost:3000/estados/RJ — dados de São Paulo
// http://localhost:3000/estados/RJ/cidades — cidades de São Paulo