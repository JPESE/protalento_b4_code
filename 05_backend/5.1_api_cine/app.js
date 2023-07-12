const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
mongoose.connect('mongodb+srv://johanna_pc:<password>@atlascluster.5ccqixp.mongodb.net/?retryWrites=true&w=majority') 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//control+c para matar el console log y volver a la carpeta//
//creo la base en mongo atlas y me conecto