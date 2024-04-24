const express = require ('express')
const bodyparser = require('body-parser')
const connectDB = require('./db/db')
const studentRoute = require('./routes/studentRoute')
require('dotenv').config()
const app = express();
const port = process.env.PORT
// const fs = require("fs")


connectDB()




app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(studentRoute)









app.listen(port,() =>{
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})