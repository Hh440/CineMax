const express = require('express');
// const { PrismaClient } = require('@prisma/client');
const prisma = require('../prisma');
const router = express.Router();


// GET /reservations: Get all reservations for a logged-in user
router.get('/get-reservations', async (req, res) => {
    try {
        

        const reservations = await prisma.reservation.findMany({
           
            select: {
               movieName:true,
               orderId:true,
               TIme:true,
               ticketPrice:true
            },
        });

        console.log(reservations)

        res.status(200).json({reservations});
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching reservations' });
    }
});

// POST /reservations: Create a new reservation
router.post('/add-reservation', async (req, res) => {
    try {
        
        const {ticketPrice,movieName,Time,date } = req.body;

        // Fetch showtime details to calculate total price
        /*const showtime = await prisma.showtime.findUnique({
            where: { id: showtimeId },
            include: {
                movie: true,
                theatre: true,
            },
        });

        if (!showtime) {
            return res.status(404).json({ error: 'Showtime not found' });
        }

        */

        // Calculate total price
        //const total = showtime.ticketPrice * seats;

        // Create reservation
        const reservation = await prisma.reservation.create({
            data: {
                date: new Date(),
                // startAt: showtime.startDate,
                //seats,
                orderId: `ORD-${Math.random().toString(36).substring(2, 15)}`, // Random Order ID
                ticketPrice: ticketPrice,
                movieName:movieName,
                TIme:Time
                //total,
                //movieId: showtime.movieId,
                //theatreId: showtime.theatreId,
                //showtimeId: showtime.id,
                //userId,
                //name,
                //phone,
            },
        });

        console.log(reservation)

        res.status(201).json(reservation);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error creating reservation', details: error.message });
    }
});

// DELETE /reservations/:id: Cancel a reservation
/*
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const reservationId = req.params.id;

        // Find the reservation to check if it belongs to the logged-in user
        const reservation = await prisma.reservation.findUnique({
            where: { id: reservationId },
        });

        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        if (reservation.userId !== req.user.id) {
            return res.status(403).json({ error: 'Unauthorized to cancel this reservation' });
        }

        // Delete reservation
        await prisma.reservation.delete({ where: { id: reservationId } });

        res.status(200).json({ message: 'Reservation cancelled successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error cancelling reservation', details: error.message });
    }
});
*/

module.exports = router;
