import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Roadmap from './components/Roadmap';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
