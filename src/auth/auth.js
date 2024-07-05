import { useEffect} from "react";
import { useNavigate } from 'react-router-dom'
function Auth()
{
    const navigate=useNavigate()
    useEffect(()=>{
    var path=window.location.pathname
    if(path=="/admin"||path=="/manageusers")
    {
        if(!localStorage.getItem("token")||localStorage.getItem("role")!="admin")
        {
          navigate("/logout")
        }
    }
    else if(path=="/user")
    {
if(!localStorage.getItem("token")||localStorage.getItem("role")!="user")
{
    navigate("/logout")
}
    }
    else
    {
navigate("/")
    }
},[])

    return(<>
    
    </>)
}
export default Auth