import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { errorHandler } from './middlewares/error.middleware';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import dataRoutes from './routes/data.routes';


dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const db = mongoose.connection;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes);

// Error handling middleware
app.use(errorHandler);


connectDB();

// Watch for changes in the "data" collection
db.once("open", () => {
    console.log("Connected to MongoDB");
    const changeStream = db.collection("datas").watch();

    changeStream.on("change", (change) => {
        console.log("Change detected:", change);

        // Broadcast the change to all connected clients
        io.emit("dataUpdated", change);
    });
});

export default app;