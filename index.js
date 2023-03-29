const express = require('express')
const app = express()
const {PORT, DB} = require('./config/config')
const mongoose = require('mongoose')

mongoose.connect(DB)
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Welcome to Yno Server
        PORT:${PORT}`)
    })
})
.catch(err=>{console.error(err)})

app.get('/', (req, res) =>{
    res.send('Hola Invocador')
})
app.use(express.json())
app.post('/', (req, res) =>{
    res.send(req.body)
})