import React from "react";
import { useState,useEffect, } from "react";
import { userapiurl,subcatagoreyapiurl,categoryapiurl, shipapiurl } from "../../api.url";
import axios from "axios";
function Addshipment()
{
    
    const [file, setFile] = useState();
    const [title , setTitle] = useState();
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [description , setDescription] = useState();
    const [basecost , setBaseCost] = useState();
    const [output , setOutput] = useState();
    const [ cList , setCategoryDetails ] = useState([]);
    const [ scList , setSubCategoryDetails ] = useState([]);
    useEffect(()=>{
    
        axios.get(categoryapiurl+"fetch").then((response)=>{
            setCategoryDetails(response.data)
        }).catch((err)=>{
           console.log(err);
        })
    })



    const handelchange=(event)=>{
    
setFile(event.target.files[0])
    }

    const fetchsubcat=(c)=>{
      alert("subcatagero")
        setCatName(c)
        axios.get(subcatagoreyapiurl+"fetch?catnm="+c).then((response)=>{
            setSubCategoryDetails(response.data)
        }).catch((err)=>{
           console.log(err);
        })
    }


const handelsumbit=(event)=>{
    var formData = new FormData();
    formData.append('title', title);
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('description', description);
    formData.append('basecost', basecost);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(shipapiurl+"save", formData, config).then((response) => {
      setTitle("");
      setCatName("");
      setSubCatName("");
      setDescription("");
      setBaseCost("");
      setOutput("Shipment Added Successfully....");
    });





    }
    return(<>
    
    
    
    
    
    
    
    
    
    
    
    {/* about section */}
    <section class="about_section">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
<br/>
<h1>Add Shipment!!!</h1>
<font style={{"color":"blue"}} >{output}</font>
<form>
  <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
  </div>
  <br/>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control"  value={catName} onChange={e=>fetchsubcat(e.target.value)}>
    <option>Select Category</option>   
    {
        cList.map((row)=>(
<option>   {row.catnm}</option>
        ))
    }
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <select class="form-control"  value={subCatName} onChange={e=>setSubCatName(e.target.value)} >
    <option>Select Sub Category</option>
    {
        scList.map((row)=>(
<option>{row.subcatnm}</option>
        ))
    }
    </select>
  </div>
  <br/>
  <div class="form-group">
    <label for="desc">Description:</label>
    <textarea class="form-control"  value={description} onChange={e=>setDescription(e.target.value)}></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label for="bs">Base cost:</label>
    <input type="text" class="form-control" value={basecost} onChange={e=>setBaseCost(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Shipment Icon:</label>
    <input type="file" class="form-control"  onChange={ handelchange} />
  </div>
  <br/>
  <button  type="button" class="btn btn-danger" onClick={handelsumbit}>Add Shipment</button>
  <br/><br/>
</form>

          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}

</>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
)
}
export default Addshipment