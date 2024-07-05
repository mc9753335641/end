import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userapiurl } from "../../api.url";
function Profile ()
{
const Navigate =useNavigate()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [address,setAddress]=useState()
    const [city,setCity]=useState()
    const [gender,setGender]=useState()
    const [mobile,setMobile]=useState()
useEffect(()=>{
axios.get(userapiurl+"fetch?email="+localStorage.getItem("email")).then((res)=>{
    var userinfo = res.data[0];
    setName(userinfo.name)
    setEmail(userinfo.email)
    setAddress(userinfo.address)
    setCity(userinfo.city)
    setGender(userinfo.gender)
    setMobile(userinfo.mobile)
}).catch((err)=>{console.log(err)})
},[])
const newSubmit=()=>
{
    
    
 const updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"name":name,"email":email,"address":address,"city":city,"gender":gender,"mobile":mobile}};
 axios.patch(userapiurl+"update",updateDetails).then((res)=>{
     Navigate("/admin")

 }).catch((err)=>{
     console.log(err)
 })
}

    return(
        <>
        
        <h1> admin edit profile</h1>









        <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
            <h1 class="text-white display-3">Edit profile</h1>
            <div class="d-inline-flex align-items-center text-white">
                <p class="m-0"><a class="text-white" href="">Home</a></p>
                <i class="fa fa-circle px-3"></i>
                <p class="m-0">Ragister</p>
            </div>
        </div>
    </div>
    {/* Header End */}
{/*validatios */}
<div class="container mt-3">
  <form >
    {/* <font color="red">{output}</font> */}
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">Edit profile</h2>
      </div>
      <div class="col-sm-6 form-group">
        <label for="name-f">Name</label>
        <input type="text" class="form-control" name="fname"  placeholder="Enter your first name." value={name}  onChange={e=>setName(e.target.value)}/>
     <span id="name" class="text-danger"></span>
      </div>
      <div class="col-sm-6 form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email"  placeholder="Enter your email."value={email}  onChange={e=>setEmail(e.target.value)}/>
        <span id="email" class="text-danger"></span>
      </div>
      <div class="col-sm-6 form-group">
        <label for="address-1">Address</label>
        <input type="address" class="form-control" name="address" id="address" placeholder="Locality/House/Street no." value={address} onChange={e=>setAddress(e.target.value)}/>
      </div>
      
      <div class="col-sm-6 form-group">
        <label for="Country">city</label>
        <select class="form-control custom-select browser-default"value={city } onChange={e=>setCity(e.target.value)}name="city" > 
         <option  value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
          <option   value="Wallis and Futuna">Wallis and Futuna</option>
          <option  value="Western Sahara">Western Sahara</option>
          <option  value="Yemen">Yemen</option>
          <option  value="Zambia">Zambia</option>
          <option  value="Zimbabwe">Zimbabwe</option>
        </select>
        <span id="city" class="text-danger"></span>
      </div>
     
      <div class="col-sm-6 form-group">
        <label for="sex">Gender</label>
        <select  class="form-control browser-default custom-select" value={gender} onChange={ e => setGender(e.target.value) } name="gender">       
          <option value="female">Female</option>
          <option value="male">male</option>
        </select>
        <span id="gender" class="text-danger"></span>
      </div>
     
      <div class="col-sm-4 form-group">
        <label for="tel">mobile</label>
        <input type="tel" name="mobile" class="form-control" id="tel" placeholder="Enter Your Mobile Number."value={mobile} onChange={ e => setMobile(e.target.value)  }/>
        <span id="mobile" class="text-danger"></span>
      </div>
      
      <div class="col-sm-12 form-group mb-0">
        <button class="btn btn-primary float-right" type='button' onClick={newSubmit}>Submit</button>
      </div>
    </div>
  </form>
</div>














        </>
    )
}
export default Profile