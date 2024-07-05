import mongoose from "mongoose"
import uniqueValidator from 'mongoose-unique-validator'

var subcatageorySchema=mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"catnm is required"],
        trim:true,
        lowercase:true,
    },
    subcatnm:{
        type:String,
        required:[true,"caticonnm is required"],
        trim:true,
        unique:true,
    
    },
    subcaticonnm:{
        type:String,
        required:[true,"subcaticonnm is required"],
        trim:true,
        



    }
})
subcatageorySchema.plugin(uniqueValidator);
var subcatageorySchemaModel=mongoose.model("subcatagaory",subcatageorySchema);
export default subcatageorySchemaModel;