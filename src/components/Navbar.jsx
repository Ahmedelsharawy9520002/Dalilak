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
import { useTranslation } from 'react-i18next';
function Navbar({ theme, switchTheme }) {
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
                        <Link to="/login">
              <button className="navbarloginbtn">{t('nav.login')}</button>
            </Link>

            <Link to="/signup">
              <button className="navbarsignupbtn">{t('nav.signup')}</button>
            </Link>
          </div>


        </div>
          
        </div>
    </>
  );
}

export default Navbar;
