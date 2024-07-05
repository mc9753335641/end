import { categoryapiurl,subcatagoreyapiurl } from '../../api.url';
import { useEffect,useState } from 'react';
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';
function Addsubcatagory()
{
    const[file,setfile]=useState()
    const [catname,setcatname]=useState([])
    const [subcatname,setsubcatname]=useState()
    const [output,setoutput]=useState()
    const [clist,setcategorydetailes]=useState([])
    useEffect(()=>{
    axios.get(categoryapiurl+"fetch").then((res)=>{
        setcategorydetailes(res.data)
    }).catch((error)=>{
        console.log(error)
    })
})
const handelchange=(event)=>{
setfile(event.target.files[0])
}
const handelsumbit=()=>{
    var fromdata=new FormData()
    fromdata.append('catnm',catname);
    fromdata.append('subcatnm',subcatname);
    fromdata.append('caticon',file);
    const config = {
        'content-type': 'multipart/form-data'}
        axios.post(subcatagoreyapiurl+"save",fromdata,config).then((res)=>{
        setoutput("setcatagory successfully.......");
        setcatname("");
        setsubcatname("");
        }).catch((error)=>{
        console.log(error)
       })
      }
     return(<>    
    <section class="about_section">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box">
<div class="heading_container">
<br/>
<h1>Add SubCategory Here!!!</h1>
<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catname} onChange={e=>setcatname(e.target.value)}>
      <option>Select Category</option>
     {clist.map((row)=>(
        <option>{row.catnm}</option>
     ))}
          </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <input type="text" class="form-control"  value={subcatname} onChange={e=>setsubcatname(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="file">SubCategory Icon:</label>
    <input type="file" class="form-control"   onChange={handelchange}/>
  </div>
  <br/>
  <button onClick={handelsumbit} type="button" class="btn btn-danger">Add SubCategory</button>
  <br/><br/>
</form>
<Link to="/admin/viewsubcat"><button>view sub category</button></Link>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>)
}
export default Addsubcatagory;