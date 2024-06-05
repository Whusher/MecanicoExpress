//import Layout from "../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import ImageCarousel from "../../components/Carrusel";

function MainContent() {
  return (
    <>
      <Header />

      <div className="bg-white">
        <div className="text-center max-w-2xl mx-auto px-4 py-2">
          <h1 className="text-5xl font-bold text-blue-700">Mecánico Express</h1>
          <h2 className="text-2xl font-bold mb-3 text-red-700">Taller Mecánico en Querétaro</h2>
          <h3 className="text-lg font-semibold mb-4 text-black">MECÁNICO EXPRESS “TE DA LO QUE NECESITAS”</h3>
          
          <p className="text-m font-semibold mb-2 text-black">
            Nuestra visión es lograr que todos nuestros clientes manejen seguros.
          </p>
          <p className="text-m font-semibold mb-10 text-black">
            Atendemos las marcas Chevrolet, GMC, VW, Nissan, Ford, Chrysler, Dodge, Jeep, Honda, Toyota.
          </p>
          <Link to="/CitasForm">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl mb-4">
              AGENDA TU CITA AHORA
            </button>
          </Link>
        </div>

        {/* Contenedor del carrusel */}
      <div className="bg-white">
        <div className="w-full flex justify-center items-center">
          <ImageCarousel />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row">
  {/* Columna izquierda */}
  <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0">
  <h1 className="text-black text-xl font-bold mb-3">¿Qué ofrecemos en Mecánico Express?</h1>
    <p className="text-lg font-light mb-2 text-black">
    NOSOTROS BRINDAMOS SEGURIDAD Y CONFIANZA <br/>
    <br/>
      Damos interés genuino, te brindamos amistad y comprensión.<br/>
      Estamos para ayudar, para serrvir. Y estamos siempre en busca <br/>
      de la mejor solución posible.
    </p>
  </div>

  {/* Columna derecha */}
  <div className="w-full md:w-1/2 md:pl-4">
    <h1 className="text-black text-xl font-bold mb-3">¿Cómo trabajamos en Mecánico Express?</h1>
    <p className="text-lg font-light mb-2 text-black">
      NOSOTROS ENTREGAMOS EVIDENCIA <br/>
      <br/>
      Mejoramos costos equilibrando la calidad y el valor del servicio, garantizando resultados. 
      Aplicamos un estricto control de calidad para evitar reclamos, supervisando el trabajo de 
      nuestros técnicos y utilizando refacciones de calidad original o superior
    </p>
  </div>
</div>

{/* Imagen */}
<div className="w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden">
  <img src="/taller.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
</div>
      
<div className="w-full md:w-1/2 md:pl-4">
    <p className="text-lg">
       <br/>
      <br/>
      <br/>
    </p>
  </div>
      </div>
      <Footer />
    </>
  );
}

export default MainContent;