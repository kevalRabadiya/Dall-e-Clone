import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('connected to database'))
        .catch((err) => {
            console.error('failed to connect with database');
            console.error(err);
        });
};

export default connectDB;