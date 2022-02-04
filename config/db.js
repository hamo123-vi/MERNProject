const mongoose = require('mongoose');

const connectDb = async () => {
        const conn = await mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true
            }
        );
        console.log("Connected to database!");
    
}

module.exports = connectDb;