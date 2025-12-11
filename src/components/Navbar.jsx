import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../styles/navBar.css'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logo from "../assets/Logo.jpg";
import { BookOpen, Menu, X, Sun, Moon, Languages } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import Dropdown from 'react-bootstrap/Dropdown';
import profilepic from '../images/profilepic.webp'
import { CgProfile } from "react-icons/cg";

function Navbar(props) {
  return (
    <>
      <div className="  p-3  d-flex  justify-content-between  navbar navbar_content">
        <div className="container ">
          <Link to="/Dalilak" className="flex items-center gap-2 group logo ">
            <span className="booklogo"><BookOpen  /></span> <span className="Logoname">dalilak</span>
          </Link>

          <div className="d-flex gap-5 navbar navbarwords ">
            <div>
              <NavLink to="/Dalilak" className={({ isActive }) => isActive ? "active-link" : ""} >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/About" className={({ isActive }) => isActive ? "active-link" : ""}>
                About
              </NavLink>
            </div>
            <div>
              <NavLink to="/Roadmaps" className={({ isActive }) => isActive ? "active-link" : ""}>
                Roadmaps
              </NavLink>
            </div>
            <div>
              <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
                Dashboard
              </NavLink>
            </div>
            <div>
              <NavLink to="/Contact"className={({ isActive }) => isActive ? "active-link" : ""}>
              Contact
              </NavLink>
              
            </div>
          </div>
          {/* <div className="d-flex align-items-center gap-2 ">
            
            <button className="navbarthemebtn"><Sun  className="sun"/></button>
            <button className="  navbarlanguagebtn"><Languages className="lang" /><span className="ennavbar"> EN</span></button>
            <button className=" navbarloginbtn">Login</button>
            <button className=" navbarsignupbtn">Sign Up</button>
              
          </div> */}

          <div className="d-flex align-items-center gap-2 ">
            <button className="navbarthemebtn" onClick={props.switchTheme}><Sun className="sun"/></button>
            <button className="navbarlanguagebtn"><Languages className="lang" /><span className="ennavbar"> EN</span></button>
            
            {
              !props.currentUser &&( 
              <>
                <Link to="/login">
                  <button className="navbarloginbtn">Login</button>
                </Link>

                <Link to="/signup">
                  <button className="navbarsignupbtn">Sign Up</button>
                </Link>
              </>
            )}

            {
              props.currentUser &&( 
              <>
                <div class="dropdown">
                  <button class="btn dropdown-toggle border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={profilepic} alt="profilepic" className="rounded-circle" style={{height:"30px", width:"30px"}}/>
                  </button>
                  <ul class="dropdown-menu" style={{background:"var(--btn-shadow)"}}>
                    <li className="d-flex"><a class="dropdown-item rounded mb-1" href="#" style={{color:"var(--text-hover)", background:"var(--btn-shadow)"}}>{props.currentUser}</a></li>
                  
                    <li><Link to="/login" class="dropdown-item bg-danger rounded" style={{color:"var(--text-hover)"}}>Log Out</Link></li>
                  </ul>
                </div>
              </>
            )}
            {console.log(props.currentUser)}
            
          </div>


        </div>
          
        </div>
    </>
  );
}

export default Navbar;
