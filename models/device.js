import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type : {
         type : String,
         enum: ["light", "fan", "ac", "sensor", "other"], 
         required : true
    },
    status : {
        type : String,
        enum : ["active" , "inactive"],
        default : "inactive"
    },
    last_active_at : {
        type : Date,
        default : null
    } ,
    owner_id : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
        required : true
    }
} , 
{timestamps : true});

const Device = mongoose.model("Device" , deviceSchema);

export default Device ;