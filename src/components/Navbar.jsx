import React, { useState, useEffect } from "react";
import profilepic from '../images/profilepic.webp'
import DalilakLogo from '../images/Dalilak.png'
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navBar.css'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { X, Sun, Moon, Languages, Menu } from "lucide-react";

function Navbar({ theme, switchTheme, currentUser, role }) {
  const { t, i18n } = useTranslation(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navLinks = (
    <>
      {!(role === "admin") && (
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMenu}>
          {t('nav.home')}
        </NavLink>
      )}
      {!(role === "admin") && (
        <NavLink to="/About" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMenu}>
          {t('nav.about')}
        </NavLink>
      )}
      <NavLink to="/Roadmaps" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMenu}>
        {t('nav.roadmaps')}
      </NavLink>
      <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMenu}>
        {t('nav.dashboard')}
      </NavLink>
      {!(role === "admin") && (
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMenu}>
          {t('nav.contact')}
        </NavLink>
      )}
      {role === "admin" && (
        <NavLink to="/messages" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={closeMenu}>
          Messages
        </NavLink>
      )}
    </>
  );

  return (
    <>
      {/* ── DARK OVERLAY ── */}
      {isMenuOpen && (
        <div className="sidebar-overlay" onClick={closeMenu} />
      )}

      {/* ── MOBILE SIDEBAR ── */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={closeMenu}>
            <span className="booklogo">
              <img src={DalilakLogo} alt="Dalilak" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            </span>
            <span className="Logoname">{t('brandName')}</span>
          </Link>
          <button className="sidebar-close-btn" onClick={closeMenu} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navLinks}
        </nav>

        <div className="sidebar-footer">
          <button className="navbarthemebtn" onClick={switchTheme} title="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="navbarlanguagebtn" onClick={toggleLanguage} title="Toggle language">
            <Languages size={18} />
            <span style={{ fontSize: '13px', fontWeight: 600 }}>{t('nav.langBtn')}</span>
          </button>
        </div>
      </div>

      {/* ── DESKTOP + MOBILE TOP NAVBAR ── */}
      <motion.nav
        className="navbar_content"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar-inner">

          {/* LEFT: Hamburger + Logo */}
          <div className="navbar-left">
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
            <Link to="/" className="logo-link">
              <span className="booklogo">
                <img src={DalilakLogo} alt="Dalilak" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
              </span>
              <span className="Logoname">{t('brandName')}</span>
            </Link>
          </div>

          {/* CENTER: Desktop Nav Links */}
          <div className="navbar-center">
            {navLinks}
          </div>

          {/* RIGHT: Controls */}
          <div className="navbar-right">
            <button className="navbarthemebtn" onClick={switchTheme} title="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="navbarlanguagebtn" onClick={toggleLanguage} title="Toggle language">
              <Languages size={18} />
              <span className="lang-label">{t('nav.langBtn')}</span>
            </button>

            {!currentUser && (
              <>
                <Link to="/login">
                  <button className="navbarloginbtn">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="navbarsignupbtn">Sign Up</button>
                </Link>
              </>
            )}

            {currentUser && (
              <div className="dropdown">
                <button className="btn border-0 p-0 ms-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img
                    src={profilepic}
                    alt="profile"
                    className="rounded-circle"
                    style={{ height: '32px', width: '32px', objectFit: 'cover', border: '2px solid var(--accent-border)' }}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end custom-dropdown">
                  <li>
                    <Link to="/Dashboard" className="dropdown-item custom-dropdown-item">
                      <span>👤</span> {currentUser}
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" style={{ borderColor: 'var(--dropdown-border)' }} /></li>
                  <li>
                    <Link to="/login" className="dropdown-item custom-dropdown-item danger">
                      <span>🚪</span> Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
