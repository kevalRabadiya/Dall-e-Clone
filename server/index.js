import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./db/connect.js";
import dalleRoutes from './routes/dalleRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
    });
});
const startserver = async () => {
    try {
        connectDB(process.env.MONGO_URL)
        app.listen(8081, () => console.log("server started port 8081"))
    } catch (e) {
        console.log(e);
    }
}

startserver();