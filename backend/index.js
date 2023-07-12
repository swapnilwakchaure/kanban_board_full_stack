require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { connection } = require('./connect/db');
const { AuthModel } = require('./models/auth');



const app = express();
app.use(express.json());
app.use(cors());



const upload = multer({ dest: 'uploads/' });



app.post('/upload', upload.single('image'), async (request, response) => {
    const body = request.body;

    try {
        const newUser = new AuthModel(body);
        await newUser.save();
    } catch (error) {
        response.send({
            'message': 'Cannot able to get the data',
            'error': error
        })
    }
});



app.listen((process.env.port), async () => {
    try {
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch (error) {
        console.log(`Failed to start the server ${error}`);
    }
});