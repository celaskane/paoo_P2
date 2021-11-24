require('dotenv').config()
const Recomendacao = require ('./models/recomendacao')
const mongoose = require ('mongoose')
const express = require ('express')
const app = express()
app.use(express.json())
const cors = require ('cors')
app.use(cors())


//const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_ADDRESS, MONGODB_DATABASE } = process.env


//mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.${MONGODB_ADDRESS}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)

mongoose.connect(`mongodb+srv://20212_fatec_ipi_paoo_mean_recomendacoes:20212_fatec_ipi_paoo_mean_recomendacoes@cluster0.lljdd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => console.log("Conexão OK"))
.catch((e) => console.log ("Conexão NOK: " + e))




app.get ('/api/recomendacoes', (req, res) => {
    Recomendacao.find()
    .then((documents) => {
        console.log(documents)
        res.status(200).json({
            recomendacoes: documents,
            mensagem: "Tudo OK" 
        })
    })
})

app.get('/api/recomendacoes/:id', (req, res) => {
    Recomendacao.findById(req.params.id)
    .then(rec => {
        if (rec)
            rec.status(200).json(rec)
        else
            res.status(404).send({mensagem: "Sem recomendação"})
    })
})


app.post('/api/recomendacoes', (req, res) => {
    const recomendacao = new Recomendacao({
        corpo: req.body.corpo,
        tempo: req.body.tempo
    })
    recomendacao.save()
    .then((recomendacaoInserida) => {
        console.log(recomendacao)
        res.status(201).json({
            mensagem: "recomendação inserido",
            id: recomendacaoInserida._id
        })
    })
})

app.put('/api/recomendacoes/:id/', (req, res) => {
    const recomendacao = new Recomendacao({
        _id: req.params.id,
        corpo: req.body.corpo,
        tempo: req.body.tempo
    })

    Recomendacao.updateOne(
        {_id: req.params.id}, 
        recomendacao
    )
    .then((resultado) => {
        console.log(resultado)
        res.status(200).json({mensagem: 'Atualização realizada com sucesso'})
    })

})

//DELETE localhost:3000/api/clientes/123456
//DELETE localhost:3000/api/clientes/abc
app.delete('/api/recomendacoes/:id', (req, res) => {
    // DELETE FROM tb_clientes WHERE id = 123456
    Recomendacao.deleteOne({_id: req.params.id})
    .then((resultado) => {
        console.log (resultado)
        res.status(200).json({mensagem: 'Recomendação removido'})
    })
})


module.exports = app