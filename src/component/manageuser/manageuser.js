import './manageuser.js';
import { useState , useEffect } from 'react';
import { userapiurl } from '../../api.url.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Manageusers() {
const navigate = useNavigate();
const [ userDetails , setUserDetails ] = useState([]); 
useEffect(()=>{
axios.get(userapiurl+"fetch?role=user").then((response)=>{
setUserDetails(response.data);    
}).catch((err)=>{
console.log(err);
  });   
  });
  const changeStatus=(_id,status)=>{
    if(status=="verify")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};      
      axios.patch(userapiurl+"update",updateDetails).then((response)=>{
        navigate("/manageuser")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
    else if(status=="block")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};      
      axios.patch(userapiurl+"update",updateDetails).then((response)=>{
        navigate("/manageuser")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
    else
    {
      let deleteDetails={"data":{"_id":_id}};      
      axios.delete(userapiurl+"delete",deleteDetails).then((response)=>{
        navigate("/manageuser")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
  } 

  return (
<>
    {/* about section */}
  
    <section class="about_section">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box">
              
<div class="heading_container">
<br/><h1>View & Manage Users Details</h1>
</div>

<center>              
<table class="table table-bordered" >

<tr>
<th>RegID</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>  
<th>Status</th>
<th>Action</th>
</tr>

{
  userDetails.map((row)=>(
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td>
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>
      <td>
      { row.status==1 && <font color="green">Verified</font> }
      { row.status==0 && <font color="orange">Not Verified</font> }  
      </td>
      <td>
      { row.status==1 && <font onClick={()=>{ changeStatus(row._id,'block') }} color="blue">Change Status</font> }
      { row.status==0 && <font onClick={()=>{ changeStatus(row._id,'verify') }} color="blue">Change Status</font> }
      <br/>
      <font onClick={()=>{ changeStatus(row._id,'delete') }} color="red">Delete</font>
      </td>
    </tr>  
  ))
}

</table>              
</center>

            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}

</>
  );
}
export default Manageusers;

