import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Nosotros() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center px-4 py-16 bg-gradient-to-r from-black-100 to-blue-300 min-h-screen pb-20">
        {/* Imagen difuminada de fondo */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/fondo.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center px-4">
          {/* Título */}
          <h1 className="text-5xl font-extrabold mb-4 text-center text-white">
            Conócenos
          </h1>

          {/* Descripción */}
          <p className="text-lg text-center mb-8 max-w-4xl text-white">
            En Mecánico Express Querétaro, nos apasiona ofrecer un servicio de alta calidad para asegurar que tu vehículo esté siempre en óptimas condiciones. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
          </p>

          {/* Imagen del taller*/}
          <div className="w-full max-w-2xl mb-8 rounded-lg overflow-hidden">
            <img src="/taller.png" alt="Nuestro equipo" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Texto en recuadros */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-4xl gap-8">
            <div className="md:w-1/3 p-6 rounded-lg shadow-md border-t-4 border-red-700 bg-gradient-to-t from-blue-500/70 to-red-500/90">
              <h2 className="text-3xl font-bold mb-4 text-white">Misión</h2>
              <p className="text-lg text-white">
                Proveer servicios de mantenimiento y reparación automotriz de la más alta calidad, garantizando la seguridad y satisfacción de nuestros clientes.
              </p>
            </div>
            <div className="md:w-1/3 p-6 rounded-lg shadow-md border-t-4 border-red-700 bg-gradient-to-t from-blue-500/70 to-red-500/90">
              <h2 className="text-3xl font-bold mb-4 text-white">Visión</h2>
              <p className="text-lg text-white">
                Ser el taller mecánico líder en Querétaro, reconocido por nuestra integridad, calidad y excelente servicio al cliente.
              </p>
            </div>
            <div className="md:w-1/3 p-6 rounded-lg shadow-md border-t-4 border-red-700 bg-gradient-to-t from-blue-500/70 to-red-500/90">
              <h2 className="text-3xl font-bold mb-4 text-white">Valores</h2>
              <p className="text-lg text-white">
                Honestidad, responsabilidad, compromiso, y pasión por lo que hacemos.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-lg">
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

export default Nosotros;
