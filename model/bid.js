import UniqueValidator from "mongoose-unique-validator";
import  mongoose from 'mongoose'
var bidschema=mongoose.Schema({
    _id: Number,
  pid: Number,
  uid: String,
  bidcost: {
    type: Number,
    required: [true,"Bid cost is required"],
  },
  info: String 
})
bidschema.plugin(UniqueValidator)
var bidschemaModel=mongoose.model("bid",bidschema)
export default bidschemaModel 
