import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import AboutUs from './components/About'
import Cards from './components/Cards'
import Info from './components/Info'
import Desarrollo from './components/Desarrollo'
import Galeria from './components/Galeria'
import Ubicacion from './components/Ubicacion'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [vistaActiva, setVistaActiva] = useState('inicio');

  // Scroll suave al hacer click en links con hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Cambiar vista según el hash
      if (hash === '#galeria') {
        setVistaActiva('galeria');
      } else {
        setVistaActiva('inicio');
      }

      // Scroll suave al elemento
      if (hash) {
        const elemento = document.querySelector(hash);
        if (elemento) {
          setTimeout(() => {
            elemento.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Ejecutar al cargar la página

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <Navbar />
      
      {vistaActiva === 'inicio' ? (
        <>
          <Hero />
          <AboutUs />
          <Nosotros />
          <Cards />
          <Info />
          <Desarrollo />
          <Ubicacion />
          <FAQ />
          <WhatsAppButton />
        </>
      ) : (
        <Galeria />
      )}
      
      <Footer />
    </>
  );
}

export default App;