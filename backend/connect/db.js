require('dotenv').config();
const mongoose = require('mongoose');



const connection = mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(`Failed to connect to MongoDB, ${error}`))



module.exports = { connection };