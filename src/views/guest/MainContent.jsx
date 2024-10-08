//import Layout from "../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import '../../styles.css';
import ImageCarousel from "../../components/Carrusel";
import MapComponent from '../../components/MapComponent';
import { useAuth } from "../../contexts/AuthContext";

function MainContent() {
  const {state} = useAuth();
  const markers = [
    {
      position: [20.576156, -100.394317],
      popupText: "Ubicacion de Casa Blanca",
      link: "https://www.google.com.mx/maps/place/Chevy+Center+Plus/@20.5753614,-100.3945704,19.32z/data=!4m15!1m8!3m7!1s0x85d344d80c688ba1:0x223933f176c287d!2sRoque+Rubio+114,+Casa+Blanca,+76030+Santiago+de+Quer%C3%A9taro,+Qro.!3b1!8m2!3d20.5759145!4d-100.3943167!16s%2Fg%2F11cncjjq5q!3m5!1s0x85d344d80db378a9:0x9ba759d5325a2a17!8m2!3d20.5759396!4d-100.3943376!16s%2Fg%2F11csp7kq1w?entry=ttu",
    },
    {
      position: [20.638556269755455, -100.44697076085875],
      popupText: "Ubicacion de Satelite",
      link: "https://www.google.com.mx/maps/place/Mec%C3%A1nica+express/@20.6386198,-100.4469806,3a,75y,177.79h,107.91t/data=!3m6!1e1!3m4!1sLvl8lwCbPFGN3tEf7FCrkg!2e0!7i16384!8i8192!4m9!1m2!2m1!1sAv.+De+la+luz+%23203,+col+cosmos+sat%C3%A9lite!3m5!1s0x85d351cbfc976435:0xecaa21d8073d78b9!8m2!3d20.6385622!4d-100.4469764!16s%2Fg%2F11k156x70j?coh=205409&entry=ttu",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="bg-white flex flex-col md:flex-row justify-center items-center">
          {/* Columna izquierda para el contenido */}
          <div className="w-full md:w-1/2 text-center max-w-2xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-700">Mecánico Express</h1>
            <h2 className="text-xl md:text-3xl font-bold mb-3 text-red-700">Taller Mecánico en Querétaro</h2>
            <h3 className="text-md md:text-2xl mb-4 font-semibold text-red-700 md:text-black">
              MECÁNICO EXPRESS “TE DA LO QUE NECESITAS”
            </h3>

            <p className="text-sm md:text-lg mb-2 font-semibold text-black hidden md:block">
              Nuestra visión es lograr que todos nuestros clientes manejen seguros.
            </p>
            <p className="text-sm md:text-lg mb-10 font-semibold text-black">
              Atendemos las marcas Chevrolet, Mazda, GMC, VW, Nissan, Ford, Chrysler, Dodge, Jeep, Honda, Toyota, Kya.
            </p>
            <Link to={`${state.userToken ? '/citas' : '/login'}`}>
              <button className="transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 hover:shadow-blue-300 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl mb-4">
                AGENDA TU CITA AHORA
              </button>
            </Link>
          </div>

          {/* Columna derecha para la imagen */}
          <div className="w-full md:w-1/2 h-auto flex justify-center items-center md:hidden">
            <img src="/main.png" alt="Imagen futura" className="w-full h-auto object-cover mt-4" />
          </div>

          <div className="w-full md:w-1/2 h-auto flex justify-center items-center hidden md:flex">
            <img src="/main.png" alt="Imagen futura" className="w-full h-auto object-cover" />
          </div>
        </div>



        {/* Contenedor del carrusel */}
        <div className="bg-white">
          <div className="w-full flex justify-center items-center">
            <ImageCarousel />
          </div>
        </div>

        <div className="relative flex flex-col items-center px-4 py-4 bg-gradient-to-r from-black-100 to-blue-300 min-h-screen pb-20">
          {/* Fondo de imagen difuminada */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          {/* Contenido principal */}
          <div className="relative z-10 bg-100-gray bg-opacity-75  rounded-xl shadow-lg max-w-7xl mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row">
              {/* Columna izquierda */}
              <div className="w-full md:w-1/2 md:pr-4 mb-2 md:mb-0">
                <h1 className="text-white text-xl font-bold mb-">¿Qué ofrecemos en Mecánico Express?</h1>
                <h2 className="text-lg mb-4 text-red-700 font-semibold">NOSOTROS BRINDAMOS SEGURIDAD Y CONFIANZA</h2>
                <p className="text-lg font-light mb-14 text-white">
                  Damos interés genuino, te brindamos amistad y comprensión.<br />
                  Estamos para ayudar, para servir. Y estamos siempre en busca <br />
                  de la mejor solución posible.
                </p>
                <img src="/mecexpress.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
              </div>

              {/* Columna derecha */}
              <div className="w-full md:w-1/2 md:pl-4">
                <h1 className="text-white text-xl font-bold ">¿Cómo trabajamos en Mecánico Express?</h1>
                <h2 className="text-lg mb-4 text-red-700 font-semibold">NOSOTROS ENTREGAMOS EVIDENCIA </h2>
                <p className="text-lg font-light mb-7 text-white">
                  Mejoramos costos equilibrando la calidad y el valor del servicio, garantizando resultados.
                  Aplicamos un estricto control de calidad para evitar reclamos, supervisando el trabajo de
                  nuestros técnicos y utilizando refacciones de calidad original o superior.
                </p>
                <img src="/taller.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>

           {/* Contenedor para mapa */}
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="flex justify-center font-bold text-2xl text-white mb-4">¡Visítanos en nuestras sucursales!</h1>
            <div className="w-full">
              <MapComponent center={[20.6074, -100.4207]} markers={markers} />
            </div>
            <div className="mt-8 flex flex-col md:flex-row md:space-x-8 mb-8">
              {markers.map((marker, index) => (
                <div key={index} className="w-full md:w-1/2 md:mb-0">
                  <h1 className="text-lg font-semibold text-white">{marker.popupText}</h1>
                  <a
                    href={marker.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 hover:shadow-blue-300 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl">
                      Ver en maps
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

            {/* Recuadros debajo de las imágenes */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Nosotros somos tu SENTIR</h3>
                  <p className="text-lg text-white">
                    Aquí recibes siempre una atención afectuosa, cálida y amable.<br />
                    Nuestros empleados están siempre limpios al igual que nuestras instalaciones.
                  </p>
                </div>
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Ven a VER</h3>
                  <p className="text-lg text-white">
                    Las entregas las hacemos en tiempo y forma,<br />
                    los autos están bien limpios.
                  </p>
                </div>
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Nos vas a ESCUCHAR</h3>
                  <p className="text-lg text-white">
                    Te llamamos para informarte el estado de tu auto y el plus de tu revisión.<br />
                    Te hacemos llamada de seguimiento y recordamos tu servicio.
                  </p>
                </div>
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Porque quieres VIVIRLO</h3>
                  <p className="text-lg text-white">
                    Nuestros empleados están siempre limpios al igual que nuestras instalaciones.
                  </p>
                </div>
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Esto te da CONVICCIÓN</h3>
                  <p className="text-lg text-white">
                    Que en la entrega no quede ninguna duda de todo lo que se le hizo al auto.
                  </p>
                </div>
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Vas a DISFRUTAR</h3>
                  <p className="text-lg text-white">
                    Te vas a llevar tu auto con la certeza de que todo va a estar bien.
                  </p>
                </div>
                <div className="shadow-lg rounded-lg p-6 text-center border-1 border-blue-900 bg-gradient-to-tr from-red-600/30 via-blue-600/70 to-red-600/80 col-span-1 md:col-span-2 lg:col-span-3">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">Los clientes que se van por precio, regresan por el servicio</h3>
                  <p className="text-lg text-white">
                    “UN CLIENTE ES UNA PERSONA FELIZ DE RECIBIR LO QUE LE PODEMOS DAR”
                  </p>
                </div>
              </div>

              {/*Espacio para evitar que el footer tape el contenido*/}
              <div className="w-full">
                <p className="text">
                  <br />
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainContent;
