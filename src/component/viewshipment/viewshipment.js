import { useState, useEffect } from "react";
import {userapiurl,categoryapiurl,subcatagoreyapiurl,shipapiurl} from './../../api.url.js'
import axios from "axios";
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
function Vsuser()
{
    const Params=useParams()
    const[sclist,setcatogery]=useState([])
    useEffect(()=>{
        axios.get(shipapiurl+"fetch?subcatnm="+Params.subcatnm).then((response)=>{
            setcatogery(response.data)
            console.log(response.data)
        }).catch((err)=>{
           console.log(err);
        })
    })
    return(<>    
    <section class="about_section">
      <div class="container">
        <div class="row-3">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <br/>
                <h1>View shipment  &gt;&gt;{Params.subcatnm}</h1>
                <br/>
              </div>
              <center>
              {

                sclist.map((row)=>(
<>

<div id="category_main" >
<table  border="2px" height="150px" width="600px">
                  <tr>
                    <td  width="35%" rowSpan="3">
                      <center>
                      <img src={`../asstes/uplode/shipicon/${row.shipmenticonnm}`} height="100" width="150"/>
                      </center>
                       </td>
                    <td><b>titel:{row.title}</b> </td>
                  </tr>
                  <tr>
                    
                    <td><b> discripsinon:{row.description}</b> </td>
                  </tr>
                  <tr>
                    <td> price:{row.basecost}
                    <br/>
                  &nbsp;&nbsp;<button><Link  to={`/viewbid/ ${row._id}`}> view bid</Link></button>&nbsp;&nbsp;
                    </td>
                  </tr>
                </table>             
                <br/>
                <br/>
   </div>
</>


                ))
              }
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
export default Vsuser;















