import mongoose from "mongoose";

const connetDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB CONNECTED")
    })

    await mongoose.connect(`mongodb://localhost:27017/federal`)
}

export default connetDB;