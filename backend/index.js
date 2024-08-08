const express = require('express')
const cors = require('cors')
const movieRoute = require('./routes/movie')
const theatreRoute = require('./routes/theatres')
const app = express()
const port = 5000
const authRoutes =require('./router/auth')

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('api/theatre', theatreRoute)
app.use('/api/movie', movieRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
