const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000
const prisma = new PrismaClient();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check-connection', async (req, res) => {
  try {
    await prisma.$connect();
    res.json({ message : " Prisma connection established "});
  }
  catch(err) {
    console.log("Error occured while connecting to the database ", err );
    res.json( { error : " error occured while connecting to the database  ", details : e.message });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
