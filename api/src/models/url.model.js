import { mongoose } from "mongoose";

const urlSchema = new mongoose.Schema({
    name:{
        type:String
    },
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
    },
    urlCode:{
        type:String,
        unique:true
    }
},{timestamps:true})

const URL = mongoose.model("URL",urlSchema);

export default URL;