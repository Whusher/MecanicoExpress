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
      <div className="bg-white flex justify-center items-center">
        {/* Columna izquierda para el contenido */}
        <div className="w-1/2 text-center max-w-2xl mx-auto px-4 ">
          <h1 className="md:text-5xl font-bold text-blue-700 text-2xl">Mecánico Express</h1>
          <h2 className="text-2xl font-bold mb-3 text-red-700">Taller Mecánico en Querétaro</h2>
          <h3 className="text-lg mb-4 font-semibold text-black">MECÁNICO EXPRESS “TE DA LO QUE NECESITAS”</h3>

          <p className="text-m mb-2 font-semibold text-black">
            Nuestra visión es lograr que todos nuestros clientes manejen seguros.
          </p>
          <p className="text-m mb-10 font-semibold text-black">
            Atendemos las marcas Chevrolet, GMC, VW, Nissan, Ford, Chrysler, Dodge, Jeep, Honda, Toyota.
          </p>
          <Link to="/CitasForm">
            <button className="transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 hover:shadow-blue-300 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl mb-4">
              AGENDA TU CITA AHORA
            </button>
          </Link>
        </div>

        {/* Columna derecha para la imagen */}
        <div className="w-1/2 h-auto flex justify-center items-center hidden md:flex">
          <img src="/main.png" alt="Imagen futura" className="w-full h-auto object-cover" />
        </div>
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
          <h2 className="text-lg mb-4 text-red-700">NOSOTROS BRINDAMOS SEGURIDAD Y CONFIANZA</h2>
          <p className="text-lg font-light mb-2 text-black mb-11">
            Damos interés genuino, te brindamos amistad y comprensión.<br />
            Estamos para ayudar, para serrvir. Y estamos siempre en busca <br />
            de la mejor solución posible.
          </p>
          <img src="/mecexpress.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Columna derecha */}
        <div className="w-full md:w-1/2 md:pl-4">
          <h1 className="text-black text-xl font-bold mb-2">¿Cómo trabajamos en Mecánico Express?</h1>
          <h2 className="text-lg mb-4 text-red-700">NOSOTROS ENTREGAMOS EVIDENCIA </h2>
          <p className="text-lg font-light mb-5 text-black">
            Mejoramos costos equilibrando la calidad y el valor del servicio, garantizando resultados.
            Aplicamos un estricto control de calidad para evitar reclamos, supervisando el trabajo de
            nuestros técnicos y utilizando refacciones de calidad original o superior
          </p>
          <img src="/taller.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>


      {/*Recuadros debajo de las imagenes*/}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Nosotros somos tu SENTIR</h3>
            <p className="text-lg text-black">
              Aquí recibes siempre una atención afectuosa, cálida y amable.<br />
              Nuestros empleados están siempre limpios al igual que nuestras instalaciones.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Ven a VER</h3>
            <p className="text-lg text-black">
              Las entregas las hacemos en tiempo y forma,<br />
              los autos están bien limpios.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Nos vas a ESCUCHAR</h3>
            <p className="text-lg text-black">
              Te llamamos para informarte el estado de tu auto y el plus de tu revisión.<br />
              Te hacemos llamada de seguimiento y recordamos tu servicio.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Porque quieres VIVIRLO</h3>
            <p className="text-lg text-black">
              Nuestros empleados están siempre limpios al igual que nuestras instalaciones.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Esto te da CONVICCIÓN</h3>
            <p className="text-lg text-black">
              Que en la entrega no quede ninguna duda de todo lo que se le hizo al auto.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Vas a DISFRUTAR</h3>
            <p className="text-lg text-black">
              Te vas a llevar tu auto con la certeza de que todo va a estar bien.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center border-4 border-blue-900 bg-gradient-to-t from-blue-500/70 to-red-500/90 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">Los clientes que se van por precio, regresan por el servicio</h3>
            <p className="text-lg text-black">
              “UN CLIENTE ES UNA PERSONA FELIZ DE RECIBIR LO QUE LE PODEMOS DAR”
            </p>
          </div>
        </div>
      </div>

      {/*Espacio para evitar que el footer tape el contenido*/}
      <div className="w-full">
        <p className="text">
          <br />
          <br />
          <br />
          <br />
        </p>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default MainContent;
