const express = require('express')
const app = express()

app.use(express.json())

app.get('/livro', (req, res) => {
    res.status(200).json({status: "ok, funcionou !!"})
})

app.post('/livros', (req, res) => {
    const {nome, versao } = req.query
    if (nome || versao) {
        const 
    }

    app
})