import { useState,useEffect } from "react";
import { shipapiurl,userapiurl,categoryapiurl,subcatagoreyapiurl,bidapiurl } from "../../api.url";
import axios from "axios";
import { Link ,useParams } from "react-router-dom";
import React from "react";
function Viewbid()
{
    const Params=useParams()
    const [output,setoutput]=useState()
    const [ncost,setncost]=useState()
    const [status,setstatus]=useState(true)
    const [sclist,setslist]=useState([])
    const [basecost,setbasecost]=useState()
    useEffect(()=>{
        axios.get(shipapiurl+"fetch?_id="+Params.id).then((response)=>{
            setslist(response.data[0])
            console.log(response.data)
            if(Date.now()-response.data[0].info>172800000)
            setstatus(false)          
        }).catch((error)=>{
           console.log(error)
        })
axios.get(bidapiurl+"fetch?="+Params._id).then((res)=>{
var min_Cost=res.data[0].bidcost;
//console.log(min_Cost);
for(row in min_Cost)
  {
    if(min_Cost>row.bidcost)
    min_Cost=row.bidcost;
  }
setbasecost(min_Cost)
}).catch((err)=>{
setbasecost(sclist.basecost)
}) 
  },[])

   
  const handleSubmit=()=>{
  var bidDetails={"pid":parseInt(sclist._id),"uid":localStorage.getItem("email"),"bidcost":parseInt(ncost)};
  //console.log(bidDetails)
  axios.post(bidapiurl+"save",bidDetails).then((response)=>{
    setoutput("bid implement successfully");
    setncost("")
  }).catch((error)=>{
   setoutput("bid implement not successfully");
   setncost("")
  })

}
    return(<>   
    <section class="about_section">
      <div class="container">
        <div class="row-3">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <br/>
                

                <h1>View bid  &gt;&gt;</h1>
                {status==false && <h1>Bid completed</h1>}
                {status==true && 
                <> 
                <h1>Bid  to get shipment</h1>
                <br/>
                <p style={{color:"blue"}}>{output}</p>
                <h2>Shipment ID : {sclist._id}</h2>
                <br/>
                <h2>Estimated cost for shipment : &#8377;{sclist.basecost }</h2>
                <br/>
                <h2>Current cost for shipment : &#8377;{basecost }</h2> 
                 <br/>
                <form>
                <h2>Your cost for shipment : <input type='text' value={ncost} onChange={ e => setncost(e.target.value) }/></h2>
                <br/>
                <button onClick={handleSubmit} type="button" >Save Quates</button>
                 </form>

                </>
                
                
                
                
                
                
                
                
                
                
                }
                <br/>
              </div>
              <center>
              <div id="category_main" >
                </div>
                      </center>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br/><br/>
    {/* end about section */}
    
    </>)
}
export default Viewbid;