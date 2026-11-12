import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoTrustsUs from "./components/WhoTrustsUs";
import Services from "./components/Services";
import IntroVideo from "./components/IntroVideo";
import Fleet from "./components/Fleet";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingWsp from "./components/FloatingWsp";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#fab511] selection:text-[#6c1323] overflow-x-hidden antialiased">
      {/* Salto accesible al contenido principal */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#fab511] focus:text-[#5c0d12] focus:font-bold focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5c0d12]"
      >
        Saltar al contenido principal
      </a>

      {/* 1. HEADER / MENÚ PRINCIPAL */}
      <Header />

      {/* CONTENIDO PRINCIPAL */}
      <main id="main" role="main">
        {/* 2. HERO PRINCIPAL + FORMULARIO */}
        <Hero />

        {/* 3. ¿QUIÉNES CONFÍAN EN NOSOTROS? (Carrusel con 7 categorías: 4 en escritorio, 2 en móvil) */}
        <WhoTrustsUs />

        {/* 4. NUESTROS SERVICIOS (Formato 3x2) */}
        <Services />

        {/* 5. VIDEO PROMOCIONAL */}
        <IntroVideo />

        {/* 6. NUESTRA FLOTA (Camioneta, Van, Sprinter Corta, Sprinter Larga + Franja con íconos) */}
        <Fleet />

        {/* 7. ¿POR QUÉ ELEGIR JUVASA? */}
        <WhyChooseUs />

        {/* 8. EXPERIENCIAS DE NUESTROS CLIENTES (Carrusel de opiniones Google Maps) */}
        <Testimonials />

        {/* 9. CTA FINAL (¿Listo para reservar tu movilidad?) */}
        <FinalCTA />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <FloatingWsp />
    </div>
  );
}
