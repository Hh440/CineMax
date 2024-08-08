const { PrismaClient } = require('@prisma/client')
const express = require('express')
const cors = require('cors')
const movieRoute = require('./routes/movie')

const app = express()
const port = 3000
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/movie', movieRoute);


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
