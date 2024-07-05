import '../model/connection.js';
import subcatageorySchemaModel from '../model/subcatageroymodel.js';
import rs from "randomstring"
import jwt from "jsonwebtoken"
import url from 'url'
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var  save = async(req,res)=>{
var userdetail=req.body;
var subcaticon=req.files.caticon
var subcaticonnm=subcaticon.name;
userdetail.subcaticonnm=subcaticonnm;
var uplodepath=path.join(__dirname,"../../ship/public/asstes/uplode/subcaticon",subcaticonnm)
var userlist=await  subcatageorySchemaModel.find()
var l=userlist.length;
var _id=l==0?1:userlist[l-1]._id+1;
userdetail={...userdetail,"_id":_id}

try
{
    var a=await subcatageorySchemaModel.create(userdetail)
    res.status(201).json({"status":true})
    subcaticon.mv(uplodepath);
}
catch
{
    res.status(201).json({"status":false})
}
}

 export var login=async(req,res)=>{
 var conditionobj=req.body;
 var  conditionobj={...conditionobj,"status":1}
 var userlist = await subcatageorySchemaModel.find(conditionobj)
 //console.log(userlist)
 var l=userlist.length;
 if(l!=0)
 {
    var paylode={"subject":userlist[0].email}
    //console.log(paylode)
    var key=rs.generate()
    //console.log(key)
    var token=jwt.sign(paylode,key)
    return res.status(201).json({"token":token,"userdetail":userlist[0]})
 }
 else
 {
    res.status(500).json({"ststus":false})
 }
}
export var userdelete= async(req,res)=>{
    var conditionobj=req.body;
    //console.log(conditionobj);
  
    var userlist=await subcatageorySchemaModel.find(conditionobj);
    var l=userlist.length;
    if(l!=0)
    {
        var a=await subcatageorySchemaModel.deleteMany(conditionobj)
        if(a)
        {
        res.status(201).json({"status":true})
        }
        else
        {
            res.status(500).json({"status":false})
        }
    }
    else
    {
        res.status(404).json({"status":"record not found"})
    }
}

export var fetch=async(req,res)=>{
 var conditionobj=url.parse(req.url,true).query
 console.log(conditionobj)
 var userlist=await subcatageorySchemaModel.find(conditionobj)
// console.log(userlist)
 if(userlist.length!=0)
 {
    res.status(201).json(userlist)
 }   
 else
 {
    res.status(500).json({"ststus":false})
 }
}
export var userupdate=async(req,res)=>{

    let userDetails = await subcatageorySchemaModel.findOne(req.body.condition_obj)
  //  console.log(userDetails)
    if(userDetails){
       let user=await subcatageorySchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj});   
       if(user)
        return res.status(201).json({"msg":"success"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});

}