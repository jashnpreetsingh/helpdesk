const express = require('express')
const dotenv = require('dotenv').config()
const errorMiddleware = require('./middleware/errormiddleware/errorhandler.js')
const Port = process.env.PORT || 8000
const app = express()
const connectDB = require('./config/db.js')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectDB()
app.get('/', (req,res) =>{
    res.status(200).json({message:"Welcome to Helpdek"})
})

app.use('/api/users', require('./routes/userRoutes.js'))
app.use(errorMiddleware)

app.listen(Port, () => console.log(`Server started on Port ${Port}`))