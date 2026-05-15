import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import AboutUs from './components/About'
import Cards from './components/Cards'
import Info from './components/Info'
import Desarrollo from './components/Desarrollo'
import FacebookFeed from './components/FacebookFeed'
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
      } else if (hash === '#experiencias') {
        setVistaActiva('experiencias');
      } else {
        // Volver a vista inicio para cualquier otro hash
        setVistaActiva('inicio');
      }

      // Scroll suave al elemento después de cambiar vista
      if (hash) {
        setTimeout(() => {
          const elemento = document.querySelector(hash);
          if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
          } else {
            // Si no encuentra el elemento, scroll al top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

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
      ) : vistaActiva === 'experiencias' ? (
        <>
          <FacebookFeed />
          <WhatsAppButton />
        </>
      ) : (
        <>
          <Galeria />
          <WhatsAppButton />
        </>
      )}
      
      <Footer />
    </>
  );
}

export default App;