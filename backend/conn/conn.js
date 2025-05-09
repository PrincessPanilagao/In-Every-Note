// Handling MongoDB Connection
const mongoose = require("mongoose");

const conn = async () => {
    try {
        console.log("Connecting to MongoDB:", process.env.MONGO_URI);
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log("DB Connected");
    }
    catch (error) {
        console.log(error);
    }
};

conn();