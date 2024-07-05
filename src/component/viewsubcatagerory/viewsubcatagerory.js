import { useState, useEffect } from "react";
import {userapiurl,categoryapiurl,subcatagoreyapiurl} from './../../api.url.js'
import axios from "axios";
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
function Viewsubcat()
{
 const Params=useParams()
    const[clist,setcatogery]=useState([])
    useEffect(()=>{
        axios.get(subcatagoreyapiurl+"fetch?catnm="+Params.catnm).then((response)=>{
            setcatogery(response.data)
            //console.log(response.data)
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
                <h1>View  sub Category &gt;&gt;{Params.catnm}</h1>
                <br/>
              </div>
              <center>
              <div id="category_main" >
                {
                  clist.map((row)=>(
                    <div className="container" id="p1">
                      <div className="row">                                    
                    <div className="col">
                    <div class="category_part" >
                    <table className="table" border="2"><tr><th>id</th><th> category name</th><th>subcategory</th><th>img</th><th>view shipment</th></tr>
                      <tr>
                        <td>{row._id}</td>
                        <td>{row.catnm}</td>
                        <td> {row.subcatnm}</td>
                        <td><img src={`../asstes/uplode/subcaticon/${row.subcaticonnm}`} height="100" width="150"  /></td>
                        <td><button><Link to ={`/viewship/ ${row.subcatnm}`}>view shipment</Link></button></td>
                        </tr>
                      
                      </table>
                    </div>    
                  
                    </div>
                    </div>
                    </div>
                  ))
                }
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
export default Viewsubcat;