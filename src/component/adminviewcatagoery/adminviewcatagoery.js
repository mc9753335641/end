import { useState, useEffect } from "react";
import {userapiurl,categoryapiurl} from './../../api.url.js'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function AdminviewShipment()
{
    const navigate =useNavigate()
   const[clist,setcatogery]=useState([])
  const handleChange=(id)=>{
    let deleteDetails={"data":{"_id":id}};
    axios.delete(categoryapiurl+"delete",deleteDetails).then((res)=>{
        navigate("/acat")
    }).catch((err)=>{
        console.log(err)
    })
    console.log(id );
  } 
   useEffect(()=>{
        axios.get(categoryapiurl+"fetch").then((response)=>{
        setcatogery(response.data)
        }).catch((err)=>{
           console.log(err);
        })
    },[])
    return(<>    
    <section class="about_section">
      <div class="container">
        <div class="row-3">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <br/>
                <h1>View Category &gt;&gt;</h1>
                <br/>
              </div>
              <center>

              <div id="category_main" >
                { 
                  clist.map((row)=>(                     
                    <div class="category_part" >
                      <table className="table" border="2"><tr><th>id</th><th>name</th><th>img</th><th>subcategory</th><th> delete</th></tr>
                      <tr>
                        <td>{row._id}</td>
                        <td>{row.catnm}</td>
                        <td><img src={`asstes/uplode/caticon/${row.caticonnm}`} height="100" width="150" /></td>
                        <td> <button style={{backgroundColor:"white", color:"blue"}}><Link to ={`/viewsubcat/ ${row.catnm}`}>subcatageory</Link></button></td>
                        <td><button onClick={()=>handleChange(row._id)
                        }> delete</button></td>
                        </tr>
                      
                      
                      </table>
                    </div>    
                    
                  ))
                }
              <table/>
              </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br/><br/>
    {/* end about section */}

</>
    
)
}
export default AdminviewShipment;