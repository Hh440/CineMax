const { PrismaClient } = require('@prisma/client')
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());


class Movie {
  constructor(title = "", image = "", language = "", genre = "", director = "", trailer = "", description = "", duration = "", startDate = "", endDate = "") {
    this.title = title;
    this.image = image;
    this.language = language;
    this.genre = genre;
    this.director = director;
    this.trailer = trailer;
    this.description = description;
    this.duration = duration;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}


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

app.post('/add-movie', async(req, res) => {
  const body = req.body;

  try{
    const movie = await prisma.movie.create({
      data : {
        title : body.title,
        image : body.image,
        language : body.language,
        genre : body.genre,
        director : body.director,
        trailer : body.trailer,
        description : body.description,
        duration : body.duration,
        trailer : body.trailer,
        startDate : body.startDate,
        endDate : body.endDate,
        // i am a little confused on how to work with showtimes and reservations
        //will showtime and reservations need to updated on their own ???
      }
    })

    res.json({message : "Movie added in the database", data : movie});
    console.log("Movie addded ", movie);
  }
  catch(e){
    res.json({error : "Error occured while adding the movie in the database"});
    console.log("error while adding the film in the database", error);
  }
});

app.post('/update-movie-details/:id', async (req, res)=> {
  const id = req.params.id;

  const movie = await prisma.movie.findFirst({where : {id : id}});

  const body = req.body;

  var updateDetails = new Movie();

  

  
  try{
    const movie = await prisma.movie.create({
      data : {
        title : body.title,
        image : body.image,
        language : body.language,
        genre : body.genre,
        director : body.director,
        trailer : body.trailer,
        description : body.description,
        duration : body.duration,
        startDate : body.startDate,
        endDate : body.endDate,
        // i am a little confused on how to work with showtimes and reservations
        //will showtime and reservations need to updated on their own ???
      }
    })

    res.json({message : "Movie added in the database", data : movie});
    console.log("Movie addded ", movie);
  }
  catch(e){
    res.json({error : "Error occured while adding the movie in the database"});
    console.log("error while adding the film in the database", error);
  }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
