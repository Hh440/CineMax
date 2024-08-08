const express = require('express')

const router = express.Router();

const prisma = require('../prisma');

router.post('/add-theatre', async (req, res) => {
    try{
        const body = req.body;
        const theatre = await prisma.theatre.create({data : {
            name : body.name,
            city : body.city,
            ticketPrice : body.ticketPrice,
            seats : body.seats,
            image : body.image
        }});

        res.status(411).json({msg : "success. Theatre added successfully"});
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
            image : body.image || existingTheatre.image
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

module.exports = router;