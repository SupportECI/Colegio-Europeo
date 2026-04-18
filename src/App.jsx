import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import AboutUs from './components/About'
import Cards from './components/Cards'
import Info from './components/Info'
import Desarrollo from './components/Desarrollo'
import Ubicacion from './components/Ubicacion'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Nosotros />
      <Cards />
      <Info />
      <Desarrollo />
      <Ubicacion />
      <FAQ />
      <Footer />
      
    </>
  );
}

export default App;