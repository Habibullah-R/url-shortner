import express, { urlencoded } from "express"
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import db from "./db/db.js"
import urlRoutes from "./routes/url.routes.js"
import path from "path";
import { fileURLToPath } from "url";

const app = express()

db();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors())
app.use(express.json({limit:"16kb"}));
app.use(urlencoded({extended:true,limit:"16kb"}))
app.use(express.static(path.join(__dirname, "../../client/dist")));

app.use("/url",urlRoutes);


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  });

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`)
})