const express = require('express')
const cors = require('cors')

const app = express()

// ✅ Middlewares
app.use(cors({ origin: '*' }))
app.use(express.json()) // 👈 importante para APIs (POST/PUT futuramente)

// ✅ Rotas
const estadosRoutes = require('./routes/estados')
app.use('/estados', estadosRoutes)

// ✅ Rota raiz (evita "Cannot GET /")
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API de Estados rodando 🚀',
        endpoints: {
            estados: '/estados',
            estado: '/estados/SP',
            cidades: '/estados/SP/cidades',
            regiao: '/estados/regiao/Sul',
            capital: '/estados/capital-pais'
        }
    })
})

//  Rota não encontrada
app.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada' })
})

// ✅ Servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})


// http://localhost:3000/estados — lista todas as siglas
// http://localhost:3000/estados/RJ — dados de São Paulo
// http://localhost:3000/estados/RJ/cidades — cidades de São Paulo