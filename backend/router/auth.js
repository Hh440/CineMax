const express = require('express');
const prisma = require('../prisma');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });

       
        if (existingUser) {
            return res.status(409).json({ message: 'Email is already registered' });
        }


        const hashedPassword = password
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword }
        });

        res.status(201).json(user);
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.post('/credentials', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Invalid Credentials' });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || !user.password) {
            return res.status(401).json({ error: 'Invalid Credentials' });
        }

        

        if (password!=user.password) {
            return res.status(401).json({ error: 'Invalid Credentials' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
