const mongoose = require('mongoose')
require('dotenv').config()




DB_USER = process.env.DB_USER
DB_PASS = process.env.DB_PASS
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.geygt.mongodb.net/alimentos?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(()=>{
    console.log('banco de dados, ON!')
})