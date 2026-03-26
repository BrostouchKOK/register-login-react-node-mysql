import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import db from "./config/db.js"
import authRouter from "./routes/authRoute.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth',authRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${process.env.PORT}`.bgMagenta)
})