const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
app.use(cors({origin : "*"}))
app.use(bodyParser.json())
app.get('/', function(req,res,next) {
    res.json({message : 'hello form first api node'})
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.json({message : "respone", data : req.body})
})


app.listen(3001, function() {
    console.log('connected to 3001 port')
})