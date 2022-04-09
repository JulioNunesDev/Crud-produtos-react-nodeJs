const mongoose = require('mongoose')


const Produtos = new mongoose.Schema({
    produtoName: {type: String, required: true},
    qtProdutos: {type: Number, required: true}
})

const produtos = mongoose.model("ProdutoData", Produtos)
module.exports = produtos