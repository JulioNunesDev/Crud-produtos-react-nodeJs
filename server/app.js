const express = require('express')
const app = express()
const port = process.env.PORT || 3131
require('./config/database')
const Produtos = require('./models/produtos')
const cors = require('cors')

// midds Json
app.use(express.json())
app.use(cors())



app.post('/insert', async(req, res)=>{
    const nameProduto = req.body.nameProduto
    const quantidade = req.body.quantidade
  const produto = new Produtos({produtoName: nameProduto, qtProdutos: quantidade})
  
  try {
      await produto.save()
      res.status(200).json({msg: 'produto criado'})
  } catch (error) {
      res.status(500).json({msg: 'error ao criar produto'})
  }
})

app.put('/update', async(req, res)=>{
    const newProduto = req.body.newProduto
    const id = req.body.id

    try {
        
   await Produtos.findById(id, (err, newUpdateValue)=>{
    newUpdateValue.produtoName = newProduto
    newUpdateValue.save()
    res.send('updated')
    })

    } catch (error) {
        console.log(error)
    }
    
})

app.delete('/delete/:id', async(req, res)=>{
    const id = req.params.id

    await Produtos.findByIdAndRemove(id).exec()
    res.send('deleted')
})


app.get('/read', async(req, res)=>{
     Produtos.find({}, (err, result)=>{
    if(err) return res.send(err)

    res.send(result)
    })

})

app.listen(port,(err)=>{
    `servidor rodando na porta: ${port}, ${err}`
})