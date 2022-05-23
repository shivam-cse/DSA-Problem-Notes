const mongoose = require('mongoose');
require('dotenv').config()
const dbURL = process.env.dbURL

const connectToMongo = () =>{
    mongoose.connect(dbURL).then(() => {
        console.log("Database connected")
    }).catch((err) => console.log("no connection from database"));
}

module.exports = connectToMongo;
