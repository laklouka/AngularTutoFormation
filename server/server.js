const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin : "*"}))
app.get('/', function(req,res,next) {
    res.json({message : 'hello form first api node'})
})


app.listen(3001, function() {
    console.log('connected to 3001 port')
})