import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../styles/navBar.css'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logo from "../assets/Logo.jpg";
import { BookOpen, Menu, X, Sun, Moon, Languages } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
function Navbar() {
  return (
    <>
      <div className="  p-3  d-flex  justify-content-between  navbar navbar_content">
        <div className="container ">
          <NavLink to="/Dalilak" className="flex items-center gap-2 group logo">
            <span className="booklogo"><BookOpen  /></span> <span className="Logoname">dalilak</span>
          </NavLink>

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
          <div className="d-flex align-items-center gap-2 ">
            
            <button className="navbarthemebtn"><Sun  className="sun"/></button>
            <button className="  navbarlanguagebtn"><Languages className="lang" /><span className="ennavbar"> EN</span></button>
            <button className=" navbarloginbtn">Login</button>
            <button className=" navbarsignupbtn">Sign Up</button>
              
          </div>

        </div>
          
        </div>
    </>
  );
}

export default Navbar;
