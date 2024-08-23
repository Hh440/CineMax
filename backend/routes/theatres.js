const express = require('express')

const router = express.Router();

const prisma = require('../prisma');

router.post('/add-theatre', async (req, res) => {
    try{
        const body = req.body;
        console.log(body)
        const theatre = await prisma.theatre.create({data : {
            name : body.name,
            city : body.city,
            ticketPrice : body.ticketPrice,
            seats : body.seats,
            image : body.image,
            Address:body.Address
        }});
        console.log(theatre)

        res.status(200).json({msg : "success. Theatre added successfully", id : theatre.id});
        console.log("success. Theatre added successfully");
    }
    catch(e)
    {
        res.status(503).json({msg : "Problem occured", error : e});
        console.log("There was a problem in adding Theatre ", e);
    }
});

router.post('/update-theatre/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const body = req.body;
        const existingTheatre = await prisma.theatre.findFirst({where : {id : id}});

        const theatre = await prisma.theatre.create({data : {
            name : body.name || existingTheatre.name,
            city : body.city || existingTheatre.city,
            ticketPrice : body.ticketPrice || existingTheatre.ticketPrice,
            seats : body.seats || existingTheatre.seats,
            image : body.image || existingTheatre.image,
            Address:body.Address || existingTheatre.Address
        }});

        res.status(411).json({msg : "success. Theatre details updated successfully", theatre : theatre});
        console.log("success. Theatre details updated successfully ", theatre);
    }
    catch(e)
    {
        res.status(503).json({msg : "Error occured while updating Theatre details", error : e});
        console.log("There was a problem in updating Theatre details", e);
    }
});

router.post('/delete-theatre/:id', async (req, res) => {
    const id = req.params.id;

    try{
        const deletedTheatre = await prisma.theatre.delete({where : {id : id}});
        res.json({message : "Theatre removed from the database", data : deletedTheatre});
        console.log("Theatre Deleted ", deletedTheatre);
    }
    catch(e){
        if (e.code === 'P2025') {
        res.status(404).json({ error: "Theatre not found" });
        } else {
        res.status(500).json({ error: "Error occurred while deleting Theatre." });
        }
        console.log("Error while deleting the Theatre from the database", e);
    }
});



router.get('/theatres',async(req,res)=>{

    try{
        const theaters= await prisma.theatre.findMany({
            select:{
                id:true,
                image:true,
                name:true,
                seats:true,
                Address:true,
                ticketPrice:true

            }
        })

        console.log(theaters)

       return res.json({theaters})
    }catch(e){
        console.error("Error fetching Theaters:",e)
        return res.status(500).json({error:"Internal server error"})
    }
})


router.get('/:id',async(req,res)=>{
    const id= req.params.id
    try{
        const theatre= await prisma.theatre.findUnique({
            where:{
                id:id
            },select:{
                id:true,
                name:true,
                city:true,
                ticketPrice:true,
                image:true,
                seats:true,
                Address:true,
                showtimes:true,
                //reservations:true,
                movies:true,
                screenings:true,
                createdAt:true,
                updatedAt:true
            }
        })

        if(theatre){
            console.log(theatre)
            return res.json({theatre : theatre})
        }else{
            res.status(400).json({error:'Theatre not found'})
        }

    }catch(e){
        console.error('Error fetching the theater:',e)
        res.status(500)
        return res.json({error:'Error fetching the theater data',details:e.message})
    }
});

router.post('/:id/add-movie', async (req, res) => {
    const { id } = req.params;
    const { movieId } = req.body;
  
    try {
      const theatre = await prisma.theatre.update({
        where: { id },
        data: {
          movies: {
            connect: { id: movieId },
          },
        },
        include: { movies: true },
      });
  
      res.json(theatre);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add movie to theatre" });
    }
  });
  

module.exports = router;