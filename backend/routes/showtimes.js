const express = require('express')

const router = express.Router();

const prisma = require('../prisma');
/*

router.get('/:id', async (req, res) => {
    try {
        const { movieId, theatreId } = req.query;

        const showtimes = await prisma.showtime.findMany({
            where: {
                ...(id && { id }),
                ...(movieId && { movieId }),
                ...(theatreId && { theatreId })
            },
            include: {
                movie: true,
                theatre: true,
            },
        });
        console.log(showtimes)

        res.status(200).json(showtimes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching showtimes' });
    }
});

*/

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const showtimes = await prisma.showtime.findMany({
            where: {
                OR: [
                    { movieId: id },
                    { theatreId: id }
                ]
            },
            include: {
                movie: true,
                theatre: true,
            },
        });

        res.status(200).json({ showtimes });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        res.status(500).json({ error: 'Error fetching showtimes' });
    }
});

router.post('/post-showtimes', async (req, res) => {
    try {
        const { ticketPrice, startDate, endDate, movieId, theatreId } = req.body;

        console.log("movieId:", movieId);
        console.log("theatreId:", theatreId);

        if (!movieId || !theatreId) {
            return res.status(400).json({ error: 'movieId and theatreId are required' });
        }


        const newShowtime = await prisma.showtime.create({
            data: {
                ticketPrice,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                movieId: { connect: { id: movieId } },
                theatreId: { connect: { id: theatreId } },
            },
        });
        res.status(201).json(newShowtime);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error creating showtime', error : error});
    }
});

module.exports = router;