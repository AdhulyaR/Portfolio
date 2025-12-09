import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <ul className="nav justify-content-center">
            <li className="nav-items">
               <Link className="nav-link active" to='/'>Home</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/'>About</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/'>Contact</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/'>Project</Link>
            </li>
            <li className="nav-items">
               <Link className="nav-link" to='/'>Resume</Link>
            </li>
        </ul>
        </>
    )
}
export default Navbar;