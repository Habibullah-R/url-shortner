import { mongoose } from "mongoose";

const urlSchema = new mongoose.Schema({
    longUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String
    },
    accessCount:{
        type:Number,
        default:0
    }
},{timestamps:true})

const URL = mongoose.model("URL",urlSchema);

export default URL;