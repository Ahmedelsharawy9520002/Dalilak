import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Roadmaps from './components/Roadmaps';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import RoadmapDetail from './components/tracks';
import { useState, useEffect} from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toast.css";
import './i18n';
import useLanguageSettings from './useLanguageSettings';

function App() {
  useLanguageSettings();
    
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const [currentUser, setCurrentUser] = useState(null)
  const location = useLocation();

  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar theme={theme} switchTheme={switchTheme} currentUser={currentUser} />}
      <Routes>
        <Route path="/Dalilak" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Roadmaps" element={<Roadmaps />} />
        <Route path="/Dashboard" element={<Dashboard completedSteps={[]} stepsCount={10} />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
        <Route path="/tracks/:title" element={<RoadmapDetail />} />

      </Routes>
      {!hideNavbar && <Footer/>}
      <ToastContainer position="top-center" autoClose={3000} pauseOnHover draggable closeOnClick icon={false}/>
    </>
  )
}

export default App