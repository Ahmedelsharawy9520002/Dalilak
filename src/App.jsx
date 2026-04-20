import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from "react-router-dom";
import Roadmaps from './components/Roadmaps';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Messages from './components/Messages';
import RoadmapDetail from './components/tracks';
import ForgotPassword from './components/ForgotPassword';
import { ProgressProvider } from './context/ProgressContext';
import { useState, useEffect} from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/toast.css";
import './i18n';
import useLanguageSettings from './useLanguageSettings';
import { AnimatePresence } from "framer-motion";

function App() {
  useLanguageSettings();
    
  const [theme, setTheme] = useState('dark');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : {name:null, role:null};
  });
  const location = useLocation();

  return (
    <>
      <Navbar theme={theme} switchTheme={switchTheme} currentUser={currentUser.name} role={currentUser.role} />
      <AnimatePresence mode="wait">
      <ProgressProvider key={currentUser?.email || "guest"}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Roadmaps" element={<Roadmaps />} />
        <Route path="/Dashboard" element={<Dashboard currentUser={currentUser.name} />} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/Dalilak" element={<Signup setCurrentUser={setCurrentUser} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tracks/:title" element={<RoadmapDetail />} />
        <Route path="/messages" element={<Messages />} />

      </Routes>
      </ProgressProvider>
      </AnimatePresence>
      <Footer/>
      <ToastContainer position="top-center" autoClose={3000} pauseOnHover draggable closeOnClick icon={false}/>
    </>
  )
}

export default App