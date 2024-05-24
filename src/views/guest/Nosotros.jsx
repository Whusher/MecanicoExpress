import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Nosotros() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center px-4 bg-gradient-to-r from-black-100 to-blue-300">
        {/* Título */}
        <h1 className="text-5xl font-extrabold mb-4 text-center text-blue-900">
          Conócenos
        </h1>

        {/* Descripción */}
        <p className="text-lg text-center mb-2 max-w-4xl text-gray-700">
          En Mecánico Express Querétaro, nos apasiona ofrecer un servicio de alta calidad para asegurar que tu vehículo esté siempre en óptimas condiciones. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
        </p>

        {/* Imagen */}
        <div className="w-full max-w-2xl mb-8 rounded-lg overflow-hidden">
          <img src="/taller.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Misión, Visión y Valores */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-4xl gap-8">
          <div className="md:w-1/3 p-6 bg-white rounded-lg shadow-md border-t-4 border-red-700">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Misión</h2>
            <p className="text-lg text-black-600">
              Proveer servicios de mantenimiento y reparación automotriz de la más alta calidad, garantizando la seguridad y satisfacción de nuestros clientes.
            </p>
          </div>
          <div className="md:w-1/3 p-6 bg-white rounded-lg shadow-md border-t-4 border-red-700">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Visión</h2>
            <p className="text-lg text-gray-600">
              Ser el taller mecánico líder en Querétaro, reconocido por nuestra integridad, calidad y excelente servicio al cliente.
            </p>
          </div>
          <div className="md:w-1/3 p-6 bg-white rounded-lg shadow-md border-t-4 border-red-700">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Valores</h2>
            <p className="text-lg text-gray-600">
              Honestidad, responsabilidad, compromiso, y pasión por lo que hacemos.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Nosotros;
