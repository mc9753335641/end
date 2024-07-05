import './ragister.css'
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { userapiurl } from '../../api.url.js'

function Ragister()
{
  
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();
  const [ output , setOutput ] = useState();
  const newSubmit=()=>{
   var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender}; 
    axios.post(userapiurl+"save",userDetails).then((response)=>{    
      setOutput("User registered successfully.....");
      setName("")
      setEmail("")
      setPassword("")
      setMobile("")
      setAddress("")
      setGender("")
      setCity("")
    }).catch((error)=>{
      if(userDetails.name==undefined||userDetails=="")
      {
        document.getElementById("name").innerText="name is reqired";
      }
      else if (userDetails.name.length<=2)
      {
        document.getElementById("name").innerText="length is gatter then 2"
      }
      else
      {
        document.getElementById("name").innerText=""
      }
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

      if(userDetails.email == undefined || userDetails.email == ""){
        document.getElementById('email').innerText='This field is required';
      }
      else if(validateEmail(userDetails.email)) {
        document.getElementById('email').innerText='';
      }else{
        document.getElementById('email').innerText='Please enter valid email address.';
      }


//password validation
const validatePassword = (pass)=>{
  return pass.match(
    "^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$"
  );
};

if(userDetails.password == undefined || userDetails.password == ""){
document.getElementById('pass').innerText='This field is required';
}
else if(validatePassword(userDetails.password)) {
document.getElementById('pass').innerText='';
}else{
document.getElementById('pass').innerText='please enter minimum eight characters, at least one letter and one number';
}
//mobile validation
if(userDetails.mobile == undefined || userDetails.mobile == ""){
  document.getElementById('mobile').innerText='This field is required';
  }
   else if(userDetails.mobile.length == 10) {
     document.getElementById('mobile').innerText='';
    } else{
      document.getElementById('mobile').innerText='Please enter 10 digits mobile no.';
   }
//--------------------------------------------//
if(userDetails.address== undefined || userDetails.address== ""){
  document.getElementById('address').innerText='This filed is required';
}
else{
document.getElementById('address').innerText='';
}
//-------------------------------------------------//
//city validation
             if(userDetails.city == undefined || userDetails.city == ""){
                     document.getElementById('city').innerText='This filed is required';
                }
                  else{
                  document.getElementById('city').innerText='';
              }

//---------------------------------------------//
//gender validation      
             if(userDetails.gender == undefined || userDetails.gender == ""){
                 document.getElementById('gender').innerText='This filed is required';
              }
           else{
                document.getElementById('gender').innerText='';
            }        
      


   });
  };
    return(
        <>    
         {/* Header Start */}
    <div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5">
            <h1 class="text-white display-3">Ragister</h1>
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
    <font color="red">{output}</font>
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">Register</h2>
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
      <div class="col-sm-6 form-group">
        <label for="pass">Password</label>
        <input type="Password" name="password" class="form-control"  placeholder="Enter your password."value={password} onChange={ e => setPassword(e.target.value) }/>
        <span id="pass" class="text-danger"></span>
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
export   default  Ragister