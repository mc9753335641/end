import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
function Nav()
{
const[nav,setnav]=useState()
useEffect(()=>{
if(localStorage.getItem("role")=="admin")
    {
        setnav(<div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 display-5 text-uppercase text-primary"><i class="fa fa-truck mr-2"></i>Faster</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <a  class="nav-item nav-link active"><Link to="/admin"> Admin Home</Link></a>
                    <a  class="nav-item nav-link"><Link to="/manageuser">manageuser</Link></a>
                    <a  class="nav-item nav-link"><Link to="/Change">Change password</Link></a>
                    <a  class="nav-item nav-link"><Link to="/eprofile"> Edit profile</Link></a>
                     
                    {/* <a  class="nav-item nav-link"><Link to="/service">Service</Link></a> */}
                    {/* <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a> */}
                    <div class="nav-item dropdown"> 
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">catagory</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a  class="dropdown-item"><Link to="/acat">add catogary</Link></a>
                            <a  class="dropdown-item"><Link to="/ascat">add  sub catogary</Link></a>
                        </div>
                    </div>
                     {/* <a  class="nav-item nav-link"><Link to="/ragister">Ragister</Link></a> */}
                     <a  class="nav-item nav-link"><Link to="/addship">Addshipment</Link></a>
                    <a  class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    
                </div>
                {/* <a href="" class="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a> */}
            </div>
        </nav>
    </div>

)}
    else if(localStorage.getItem("role")=="user")
    {
        setnav(<div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 display-5 text-uppercase text-primary"><i class="fa fa-truck mr-2"></i>Faster</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <a  class="nav-item nav-link active"><Link to="/user"> User Home</Link></a>
                    <a  class="nav-item nav-link"><Link to="/uchange">Change password</Link></a>
                    <a  class="nav-item nav-link"><Link to="/uprofile"> User Edit profile</Link></a>
                    <a  class="nav-item nav-link"><Link to="/viewcategory">viewcategory</Link></a>
                    
                    {/* <a  class="nav-item nav-link"><Link to="/about">about</Link></a>
                    <a  class="nav-item nav-link"><Link to="/service">Service</Link></a>
                    <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    <div class="nav-item dropdown"> */}
                        {/* <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a> */}
                        {/* <div class="dropdown-menu rounded-0 m-0"> */}
                            {/* <a href="blog.html" class="dropdown-item">Blog Grid</a> */}
                            {/* <a href="single.html" class="dropdown-item">Blog Detail</a> */}
                        {/* </div> */}
                    {/* </div> */}
                    {/* <a  class="nav-item nav-link"><Link to="/ragister">Ragister</Link></a> */}
                    <a  class="nav-item nav-link"><Link to="/logout">logout</Link></a>
                </div>
                <a href="" class="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
            </div>
        </nav>
    </div>)
    }
    else
    {
        setnav(<div class="container-fluid p-0">
           <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
            <h1 class="m-0 display-5 text-uppercase text-primary"><i class="fa fa-truck mr-2"></i>Faster</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <a  class="nav-item nav-link active"><Link to="/">   Home</Link></a>
                    <a  class="nav-item nav-link"><Link to="/about">about</Link></a>
                    <a  class="nav-item nav-link"><Link to="/service">Service</Link></a>
                    <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    {/* <div class="nav-item dropdown"> */}
                        {/* <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a> */}
                        {/* <div class="dropdown-menu rounded-0 m-0"> */}
                            {/* <a href="blog.html" class="dropdown-item">Blog Grid</a> */}
                            {/* <a href="single.html" class="dropdown-item">Blog Detail</a> */}
                        {/* </div> */}
                    {/* </div> */}
                    
                    <a  class="nav-item nav-link"><Link to="/ragister">Ragister</Link></a>
                    <a  class="nav-item nav-link"><Link to="/login">login</Link></a>
                    
                </div>
                <a href="" class="btn btn-primary py-2 px-4 d-none d-lg-block">Get A Quote</a>
            </div>
        </nav>
    </div>)
    }
   })
    return(

        <>
       {nav}    
        </>
    )
}
export default Nav