import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { userapiurl } from '../../api.url.js';
import { useNavigate } from 'react-router-dom'
function Login()
{
  const navigate = useNavigate()
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();
  const handleSubmit=()=>{
  var userDetails={"email":email,"password":password}
  axios.post(userapiurl+"login",userDetails).then((response)=>{
  setOutput("login success.....")
  var users=response.data.userDetails;
  console.log(users)
  localStorage.setItem("_id",users._id);
  localStorage.setItem("name",users.name);
  localStorage.setItem("email",users.email);
  localStorage.setItem("mobile",users.mobile);
  localStorage.setItem("address",users.address);
      localStorage.setItem("city",users.city);
      localStorage.setItem("gender",users.gender);
      localStorage.setItem("info",users.info);
      localStorage.setItem("role",users.role);
      localStorage.setItem("token",response.data.token);
      users.role==="admin" ? navigate("/admin") : navigate("/user");
    }).catch((error)=>{
      setOutput("Invalid user or verify your account....");
      //alert("fail")
      setEmail("");
      setPassword("");    
    });
  }
  
  return(
    

    <>
      <div class="container mt-3">
  <form>
  <font color="black">{output}</font>
 
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center text-info">Login</h2>
      </div>
     
      <div class="col-sm-6 form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email." value={email}   onChange={e=>setEmail(e.target.value)}required />
      </div>
     
     
     
     <div class="col-sm-6 form-group">
        <label for="pass">Password</label>
        <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password." value={password} onChange={ e => setPassword(e.target.value) }required />
      </div>
      <div class="col-sm-12 form-group mb-0">
        <button class="btn btn-primary float-right" type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </form>
</div>







    
    </>
  )
}
export default Login
// function Login()
// {
//   const [set,setdata]=useState([])
//   var arr=[];
//   var obj;
//   useEffect(()=>{
//   axios.get("https://child.onrender.com/api/sciencefiction").then((res)=>{
//     var user=res.data
    
//    user.map((row)=>{
//     obj={}
//     if(typeof row=='object')
//     {
//       Object.keys(row).map((r1)=>{
//         if(typeof row[r1]=='object')
//         {
// Object.keys(row[r1]).map((r2)=>{
//   if(typeof row[r1][r2]=='object')
//   {
//     Object.keys(row[r1][r2]).map((r3)=>{
//       if(typeof row[r1][r2][r3]=='object')
//       {
//         Object.keys(row[r1][r2][r3]).map((r4)=>{
//           if(typeof row[r1][r2][r3][r4]=='object')
//           {
// Object.keys(row[r1][r2][r3][r4]).map((r5)=>{
//   obj[r5]=row[r1][r2][r3][r4][r5]
// })
//           }
//         else
//         {
//            obj[r4]=row[r1][r2][r3][r4]
//         }
//         })
//       }
//       else
//           obj[r3]=row[r1][r2][r3]
//     })
//   }
// obj[r2]=row[r1][r2]
// })
//         }
//         else
//         {
//         obj[r1]=row[r1]
//         }
       
//       })
//     }
    
//   arr.push(obj)
//   console.log(arr)
//   setdata(arr)
//    })
    
//   })
  
//   }) 
//   return (<>
//    {set.map((row)=>(
//     <>
//     <h1>{row._id}</h1>
//     <h1>{row.__v}</h1>
//     <h1>{row.Status}</h1>
//     {row.map((p1)=>(
// <h1>{p1[row]}</h1>
//     ))}
//         </>
//   ))}

  
  
//   </>)
// }
// export default Login