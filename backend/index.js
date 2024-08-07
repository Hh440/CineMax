const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const authRoutes =require('./router/auth')




app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
