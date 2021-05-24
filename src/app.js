const path = require('path')
const express = require('express')
const cors = require('cors')


const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(cors())

//configration for frontend
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
  res.render('index')
})



const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server running in port ${port}`))