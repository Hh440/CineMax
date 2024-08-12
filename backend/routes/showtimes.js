const express = require('express')

const router = express.Router();

const prisma = require('../prisma');


router.get('/showtimes', async (req, res) => {
    try {
        const { movieId, theatreId } = req.query;

        const showtimes = await prisma.showtime.findMany({
            where: {
                ...(movieId && { movieId }),
                ...(theatreId && { theatreId })
            },
            include: {
                movie: true,
                theatre: true,
            },
        });

        res.status(200).json(showtimes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching showtimes' });
    }
});

router.post('/post-showtimes', async (req, res) => {
    try {
        const { ticketPrice, startDate, endDate, movieId, theatreId } = req.body;

        const newShowtime = await prisma.showtime.create({
            data: {
                ticketPrice,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                movie: { connect: { id: movieId } },
                theatre: { connect: { id: theatreId } },
            },
        });

        res.status(201).json(newShowtime);
    } catch (error) {
        res.status(500).json({ error: 'Error creating showtime' });
    }
});

module.exports = router;