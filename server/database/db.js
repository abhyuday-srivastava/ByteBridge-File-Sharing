import mongoose from "mongoose";

const DBConnection = async () => {
    const MONODB_URI = `mongodb+srv://abhyuday:abhyu904452@bytebridge.jdhwh6c.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONODB_URI, {useNewUrlParser: true});
        console.log('DB connected successfully');
    } catch (error) {
        console.error('Error while connecting to DB', error.message);
    }
}

export default DBConnection;