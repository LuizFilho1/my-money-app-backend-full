const port = process.env.PORT || 80

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended:true}))//toda requisição
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () =>{
    console.log(`Backend is running on port ${port}`)
})

module.exports = server