import mongoose from 'mongoose';


const connectDB = async () => {

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(` mongo DB database has been connected ${connectionInstance.connection.host}`);

    } 
    
    catch (error) {
        console.log(" mongodb connection error while connecting the database ",error);
        process.exit(1);    
    }
}

export default connectDB