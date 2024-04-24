const mongoose = require ('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongodb)
        console.log('db connected successfuly')

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB