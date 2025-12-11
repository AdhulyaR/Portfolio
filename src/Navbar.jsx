import React from "react"
import { Link,Outlet } from "react-router-dom"

function Navbar(){
    return(
        <>
        <ul className="nav justify-content-center">
            <li className="nav-items">
               <Link className="nav-link active" to='/'>Home</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/About'>About</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/Contact'>Contact</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/Project'>Project</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/Resume'>Resume</Link>
            </li>
        </ul>
       <div className="container">
         <Outlet/>
       </div>
        </>
    )
}
export default Navbar;