import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Database connection was successful");
    } catch (error) {
        console.log("Error in database connection: \n", error);
    }
};

export default {dbConnection};