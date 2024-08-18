
const express = require('express')

const router = express.Router();

const prisma = require('../prisma');


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


router.get('/check-connection', async (req, res) => {
  try {
    await prisma.$connect();
    res.json({ message : " Prisma connection established "});
  }
  catch(err) {
    console.log("Error occured while connecting to the database ", err );
    res.json( { error : " error occured while connecting to the database  ", details : e.message });
  }
})

router.post('/add-movie', async(req, res) => {
  const body = req.body;

  try{
    const movie = await prisma.movie.create({
      data : {
        title : body.title,
        image : body.image,
        language : body.language,
        genre : body.genre,
        director : body.director,
        trailerUrl : body.trailer,
        description : body.description,
        duration : body.duration,
        startDate : body.startDate || new Date(),
        endDate : body.endDate || new Date()
        // i am a little confused on how to work with showtimes and reservations
        //will showtime and reservations need to updated on their own ???
      }
    })

    res.json({message : "Movie added in the database", data : movie});
    console.log("Movie addded ", movie);
  }
  catch(e){
    res.json({error : "Error occured while adding the movie in the database", error : e});
    console.log("error while adding the film in the database", e);
  }
});

router.post('/update-movie-details/:id', async (req, res)=> {
  const id = req.params.id;

  const existingMovie = await prisma.movie.findFirst({where : {id : id}});

  const body = req.body;

  try{
    const updatedMovie = await prisma.movie.update({
      where: { id: id },
      data: {
        title: body.title || existingMovie.title,
        image: body.image || existingMovie.image,
        language: body.language || existingMovie.language,
        genre: body.genre || existingMovie.genre,
        director: body.director || existingMovie.director,
        trailer: body.trailer || existingMovie.trailer,
        trailerUrl:body.trailerUrl||existingMovie.trailerUrl,
        description: body.description || existingMovie.description,
        duration: body.duration || existingMovie.duration,
        startDate: body.startDate ? new Date(body.startDate) : existingMovie.startDate, // Ensure date format
        endDate: body.endDate ? new Date(body.endDate) : existingMovie.endDate // Ensure date format
      }
    });

    res.json({message : "Movie updated in the database", data : updatedMovie});
    console.log("Movie updated ", updatedMovie);
  }
  catch(e){
    res.json({error : "Error occured while updating the movie details"});
    console.log("error while updating the movie details in the database", error);
  }
});


router.post('/delete-movie/:id', async (req, res)=> {
  const id = req.params.id;

  try{
    const deletedMovie = await prisma.movie.delete({where : {id : id}});
    res.json({message : "Movie removed from the database", data : deletedMovie});
    console.log("Movie Deleted ", deletedMovie);
  }
  catch(e){
    if (e.code === 'P2025') {
      res.status(404).json({ error: "Movie not found" });
    } else {
      res.status(500).json({ error: "Error occurred while deleting the movie" });
    }
    console.log("Error while deleting the movie from the database", e);
  }
});



router.get('/movies',async(req,res)=>{
  
  try{
    const movies= await prisma.movie.findMany({
        select:{
            id:true,
            image:true,
            title:true,
            language:true

        }
    })

    console.log(movies)

   return res.json({movies})
}catch(e){
    console.error("Error fetching Movies:",e)
    return res.status(500).json({error:"Internal server error"})
}

})



router.get('/:id',async(req,res)=>{

  const id= req.params.id
  try{
      const movie= await prisma.movie.findUnique({
          where:{
              id:id
          },select:{
             id:true,
              image:true,
              title:true,
              trailer:true,
              trailerUrl:true,
              language:true,
              genre:true,
              director:true,
              duration:true,
              description:true,
              startDate:true,
              endDate:true,
              theatres: {
                select: {
                  id: true,
                  name: true,
                  city: true,
                  ticketPrice: true,
                  seats: true,
                  image: true,
                  address: true,
                }
              } 
              
          }
      })

      if(movie){
          return res.json({movie})
      }else{
          res.status(400).json({error:'Movie not found'})
      }

  }catch(e){
      console.error('Error fetching the Movie:',e)
      res.status(500)
      return res.json({error:'Error fetching the  Movie data',details:e.message})
  }

})

module.exports = router;