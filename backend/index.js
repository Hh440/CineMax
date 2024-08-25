const express = require('express')
const cors = require('cors')
const movieRoute = require('./routes/movie')
const theatreRoute = require('./routes/theatres')
const showtimeRoute = require('./routes/showtimes')
const moviereservation = require('./routes/reservations')
const app = express()
const port = 5000
const authRoutes =require('./router/auth')

app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/theatre', theatreRoute)
app.use('/api/movie', movieRoute);
app.use('/api/showtimes', showtimeRoute);
app.use('/api/reservation',moviereservation)

app.get('/', (req, res)=>{
  res.status(200).json("Your server is running");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;