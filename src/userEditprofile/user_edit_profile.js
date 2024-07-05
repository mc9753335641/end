import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userapiurl } from "../api.url";

function Uprofile ()
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
     Navigate("/user")

 }).catch((err)=>{
     console.log(err)
 })
}

    return(
        <>
        
        









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
        <h2 class="text-center text-info"> user Edit profile</h2>
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
export default Uprofile



















































































// function Uprofile()
// {
//     const[data, setdata]=useState([])
//     var  arr=[];
//     var obj
//       useEffect(()=>{
//             axios.get("https://child.onrender.com/api/sciencefiction/").then((res)=>{
//         var user=res.data;
        
//         user.map((row)=>{
//           obj={}
//           if(typeof row=='object')
//           {
//             Object.keys(row).map((r1)=>{
// if(typeof row[r1]=='object')
// {
//   Object.keys(row[r1]).map((r2)=>{
//     if(typeof row[r1][r2]=='object')
//     {
//       Object.keys(row[r1][r2]).map((r3)=>{
//         if(typeof row[r1][r2]==Object)
//         {
//           Object.keys(row[r1][r2][r3]).map((r4)=>{
//             obj[r4]=row[r1][r2][r3][r4]
//           })
//         }
//         else
//         {
//         obj[r3]=row[r1][r2][r3]
//         }
//       })
//     }
//     else
//   {
//     obj[r2]=row[r1][r2]
//   }
//   })
// }
//             else
//               obj[r1]=row[r1]
//             })
//           }
//           arr.push(obj)
//         setdata(arr)
//         console.log(arr)
//         })    
        
        
//       }).catch((err)=>{
//              console.log(err)
 
//          })
//     },[])
//     return(<>
//     {data.map((row)=>(
//       <>
//       <div class="card" style={{"width": "18rem"}}>
//   <div class="card-body">
//     <h5 class="card-title">information</h5>
//     <img src="{row.0}" class="card-img-top" alt="..."/>
//     <p class="card-text">id=={row._id}</p>
//     <p class="card-text">title=={row.Title}</p>
//     <p class="card-text">Status=={row.Status}</p>
//     <p class="card-text">0=={row.1}</p>
//     <p class="card-text">__v=={row.__v}</p>
//     <p class="card-text">id=={row._id}</p>
    
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//       </>
//     ))}
    
//     </>)
// }
// export default Uprofile
// function Uprofile() {

//   const [ userDetails , setUserDetails ] = useState([]);
//   var arr=[];
//   var obj;
//   useEffect(()=>{
//     var api_url="https://jsonplaceholder.typicode.com/users";
//     axios.get(api_url).then((response)=>{
//       var users=response.data;
      
//       users.map((row)=>{
//         obj={};
//         Object.keys(row).map((k)=>{
//           if(typeof row[k]=='object')
//           {
//             Object.keys(row[k]).map((k1)=>{
//               if(typeof row[k][k1]=='object')
//               {
//                 Object.keys(row[k][k1]).map((k2)=>{
//                   obj[k2]=row[k][k1][k2];
//                 });  
//               }
//               else
//                 obj[k1]=row[k][k1];
//             });
//           }
//           else
//             obj[k]=row[k];
//         });
//         arr.push(obj);
//         //setUserDetails(arr);
//         console.log(arr)
//       });              
//     }).catch((err)=>{
//       console.log(err);  
//     });
//   },[]);

//   return (
// <>
// <div id="content">
// <h1>View & Manage User Details</h1>
// <table>
// <tr>
//   <th>ID</th>
//   <th>Name</th>
//   <th>Street</th>
//   <th>Lat</th>
//   <th>CP</th>
//   <th>BS</th>
// </tr>  

// {
//   userDetails.map((row)=>(
//     <tr>
//       <td>{row.id}</td>
//       <td>{row.name}</td>
//       <td>{row.street}</td>
//       <td>{row.lat}</td>
//       <td>{row.catchPhrase}</td>
//       <td>{row.bs}</td>
//     </tr>
//   ))
// }

// </table>
// </div>
// </>
//   );
// }

// export default Uprofile;




