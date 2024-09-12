import mongoose from "mongoose"
import dotenv from 'dotenv/config';



const connectToDb = async() => {
    
    try {
        // console.log(`${process.env.DB_NAME}`);
        
        const initialConnection = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
        console.log("Mongodb Connected:",initialConnection.connection.host);
    } catch (error) {
        console.log("MongoDb connection failed: ", error);
        process.exit(1)
    }

    
}

export default connectToDb