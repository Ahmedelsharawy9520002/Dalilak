import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import profilepic from '../images/profilepic.webp'
import { BrowserRouter, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../styles/navBar.css'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Logo from "../assets/Logo.jpg";
import { BookOpen, Menu, X, Sun, Moon, Languages } from "lucide-react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import { useTranslation } from 'react-i18next';
function Navbar({ theme, switchTheme, currentUser }) {
  const { t, i18n } = useTranslation(); 

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <div className="  p-3  d-flex  justify-content-between  navbar navbar_content">
        <div className="container ">
          <Link to="/Dalilak" className="flex items-center gap-2 group logo ">
            <span className="booklogo"><BookOpen  /></span> <span className="Logoname">{t('brandName')}</span>
          </Link>

          <div className="d-flex gap-5 navbar navbarwords ">
            <div>
              <NavLink to="/Dalilak" className={({ isActive }) => isActive ? "active-link" : ""} >
                {t('nav.home')}
              </NavLink>
            </div>
            <div>
              <NavLink to="/About" className={({ isActive }) => isActive ? "active-link" : ""}>
                {t('nav.about')}
              </NavLink>
            </div>
            <div>
              <NavLink to="/Roadmaps" className={({ isActive }) => isActive ? "active-link" : ""}>
                {t('nav.roadmaps')}
              </NavLink>
            </div>
            <div>
              <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
                {t('nav.dashboard')}
              </NavLink>
            </div>
            <div>
              <NavLink to="/Contact"className={({ isActive }) => isActive ? "active-link" : ""}>
              {t('nav.contact')}
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
            <button className="navbarthemebtn" onClick={switchTheme}><Sun className="sun"/></button>
            <button className="navbarlanguagebtn" onClick={toggleLanguage}>
                          <Languages className="lang" />
                          <span className="ennavbar"> {t('nav.langBtn')}</span>
                        </button>            
            {
              !currentUser &&( 
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
              currentUser &&( 
              <>
                <div class="dropdown">
                  <button class="btn dropdown-toggle border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={profilepic} alt="profilepic" className="rounded-circle" style={{height:"30px", width:"30px"}}/>
                  </button>
                  <ul class="dropdown-menu" style={{background:"var(--btn-shadow)"}}>
                    <li className="d-flex"><Link to="./Dashboard" class="dropdown-item rounded mb-1" style={{color:"var(--text-hover)", background:"var(--btn-shadow)"}}>{currentUser}</Link></li>
                  
                    <li><Link to="/login" class="dropdown-item bg-danger rounded" style={{color:"var(--text-hover)"}}>Log Out</Link></li>
                  </ul>
                </div>
              </>
            )}

          </div>


        </div>
          
        </div>
    </>
  );
}

export default Navbar;
