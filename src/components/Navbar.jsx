import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../App.css"
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logo from "../assets/Logo.jpg";
function Navbar() {
  return (
    <>
      <div className="  p-3  d-flex  justify-content-between  navbar navbarcontainer">
        <div className="container">
          <div>
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          <div className="d-flex gap-5 navbar navbarwords">
            <div>
              <NavLink to="/" >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink to="/About" >
                About
              </NavLink>
            </div>
            <div>
              <NavLink to="/Roadmap" >
                Roadmap
              </NavLink>
            </div>
            <div>
              <NavLink to="/Contact">
              Contact
              </NavLink>
              
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 ">
              <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="searchinput"
              />
              <Button variant="none" className="navbarsearch">Search</Button>
          </div>

        </div>
          
        </div>
    </>
  );
}

export default Navbar;
