import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Contact from './components/Team';
import Roadmap from './components/Roadmap';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Roadmap" element={<Roadmap />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
