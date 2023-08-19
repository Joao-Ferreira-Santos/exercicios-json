import express from 'express'
import { exercicio1Somar, exercicio1Subtrair } from './exercicios/exercicio-1.js'
import { exercicio2 } from './exercicios/exercicio-2.js'
import { exercicio3 } from './exercicios/exercicio-3.js'

const app = express()
app.use(express.json())
const port = 3000

app.post('/api/exercicio1Somar', (req, res) => {
    const result = exercicio1Somar(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/exercicio1Subtrair', (req, res) => {
    const result = exercicio1Subtrair(req.body.num1, req.body.num2)

    res.status(200).json({
        message: `resultado: ${result}`
    })
})

app.post('/api/exercicio2', (req, res) => {
    const result = exercicio2(req.body.horaTrabalhador, req.body.horasTrabalhadas)

    res.status(200).json({
        message: `O salário que irá receber no fim do mês equivale a: ${result}`
    })
})

app.post('/api/exercicio3', (req, res) => {
    const result = parseInt(exercicio3(req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5))

    res.status(200).json({
        message: `A media dos pesos das 5 pessoas equivale a: ${result}`
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})