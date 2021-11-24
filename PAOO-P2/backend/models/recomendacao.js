const mongoose = require ('mongoose')

const recomendacaoSchema = mongoose.Schema({
    corpo: {type:String, required: true},
    tempo: {type: Date, required: false, format: 'dd-MM-yyyy'}
})

module.exports = mongoose.model('Recomendacao', recomendacaoSchema)