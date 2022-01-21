// IMPORTANDO DEPENDÊNCIAS
const express = require('express')

//USANDO AS DEPENDÊNCIAS
const app = express()

//CONFIGURANDO PORTA DO SERVIDOR
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá imagem docker')
})

//INICIALIZANDO O SERVIDOR
app.listen(port, () => {
    console.log(`executando na porta: ${port}`)
})