import react from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { userapiurl } from "../api.url";
import { useNavigate } from "react-router-dom";
function Uchange()
{
    const navigate=useNavigate()
    const[opassword,setopassword]=useState()
    const [npassword,setnpassword]=useState()
    const[cpassword,setcpassword]=useState()
    const [output,setoutput]=useState()
    const handleSubmit=()=>{
axios.get(userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((res)=>{

  if(npassword==cpassword)
{
    let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cpassword}};      
    axios.patch(userapiurl+"update",updateDetails).then((response)=>{
      navigate("/logout")  
    }).catch((error)=>{
      console.log(error);    
    });
}
else
{
    setoutput("new and old password mismatch")
    setcpassword("")
    setnpassword("")
}
}).catch((error)=>{
    //console.log(error)
    setoutput("invalid password")
    setopassword("")
})
    }
    return(<>
    
    
    
    
    <div class="container mt-3">
  <form>
  <font color="black">{output}</font>
 
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">Login</h2>
      </div>
     
      <div class="col-sm-6 form-group">
        <label for="password">old password</label>
        <input type="password" class="form-control" name="password" id="password" placeholder="Enter your old password." value={opassword}   onChange={e=>setopassword(e.target.value)}required />
      </div>
     
     
     
     <div class="col-sm-6 form-group">
        <label for="pass"> new Password</label>
        <input type="Password" name="npassword" class="form-control" id="pass" placeholder="Enter your new password." value={npassword} onChange={ e => setnpassword(e.target.value) }required />
      </div> 
       <div class="col-sm-6 form-group">
        <label for="pass"> conferm Password</label>
        <input type="Password" name="cpassword" class="form-control" id="pass" placeholder="Enter your conferm password." value={cpassword} onChange={ e => setcpassword(e.target.value) }required />
      </div>
 
      <div class="col-sm-12 form-group mb-0">
        <button class="btn btn-primary float-right" type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </form>
</div>
    
    
    </>)
}
export default Uchange