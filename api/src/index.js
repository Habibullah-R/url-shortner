import express, { urlencoded } from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import db from "./db/db.js"
import urlRoutes from "./routes/url.routes.js"

const app = express()

db();

app.use(cors())
app.use(express.json({ limit: "10kb" }));
app.use(urlencoded({ extended: true, limit: "10kb" }));

app.use("/url",urlRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`)
})