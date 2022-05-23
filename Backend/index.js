var express = require('express')
const connectToMongo = require('./database')
var cors = require('cors')
const dotenv = require('dotenv').config()
var app = express()
const PORT =  process.env.PORT || 5000
connectToMongo();
app.use(express.json());
app.use(cors())
app.use('/api/auth', require('./routes/auth'));
app.use('/api/problems', require('./routes/problems')); 

app.listen(PORT, () =>{
    console.log(`Server is runing at port ${PORT}`)
})
