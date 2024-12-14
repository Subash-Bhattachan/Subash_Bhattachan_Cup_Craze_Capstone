
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 5000;
const app = express();

import bodyParser from "body-parser";
import cupRoutes from "./routes/cupRoutes.mjs";
import materialRoutes from "./routes/materialRoutes.mjs";
import reviewRoutes from "./routes/reviewRoutes.mjs";

app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/cups', cupRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/reviews', reviewRoutes);


// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});