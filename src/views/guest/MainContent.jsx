//import Layout from "../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function MainContent() {
  return (
    <>
      <Header />
      <div className="flex justify-between max-w-7xl mx-auto px-4 py-8">
        {/* Columna izquierda */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-1">Mecánico Express</h1>
          <h2 className="text-3xl font-semibold mb-10">
            Taller Mecánico en Querétaro
          </h2>
          <p className="text-lg font-semibold mb-2">
            Nuestra visión es lograr que todos <br />
            nuestros clientes manejen seguros.
          </p>
          <p className="text-lg font-semibold mb-20">
            Atendemos las marcas Chevrolet, GMC, <br />
            VW, Nissan, Ford, Chrysler, Dodge, Jeep, <br />
            Honda, Toyota.
          </p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl">
            AGENDA TU CITA AHORA
          </button>
        </div>

        {/* Columna derecha (imagen) */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="/main.JPG"
            alt="Imagen"
            className="w-full max-w-2xl h-auto"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainContent;
