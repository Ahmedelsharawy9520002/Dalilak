import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Roadmap from './components/Roadmap';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';


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
