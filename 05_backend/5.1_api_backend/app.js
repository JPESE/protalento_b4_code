const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const mongoConnect = async () => {
  try {
      await mongoose.connect(
          // WINDOWS 
          'mongodb+srv://password y contraseña mias@atlascluster.5ccqixp.mongodb.net/?retryWrites=true&w=majority'
      )
      console.log(`Successfull connection, `)
  }
  catch (err) {
      console.log(err)
      process.exit(1)
  }
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//control+c para matar el console log y volver a la carpeta//
//creo la base en mongo atlas y me conecto