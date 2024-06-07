import { useState, useMemo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LogoList from "../../assets/CarLogo.json";
import { ComponentSVG } from "../../assets/ComponentSVG";

const marcas = {
  chevrolet: "Chevrolet",
  ford: "Ford",
  kia: "Kia",
  volkswagen: "Volkswagen",
  nissan: "Nissan",
  toyota: "Toyota",
  honda: "Honda",
  mazda: "Mazda",
  hyundai: "Hyundai",
  renault: "Renault",
  fiat: "Fiat",
};

export default function UserDates() {
  const [marca, setMarca] = useState("");

  // Indexar las marcas por nombre para mejorar la búsqueda
  const indexedMarcas = useMemo(() => {
    const indexed = {};
    LogoList.forEach((logo) => {
      indexed[logo.name.toLowerCase()] = logo;
    });
    return indexed;
  }, []);
  const selectedLogo = indexedMarcas[marca.toLowerCase()]; // Buscar el logo seleccionado
  const [time, setCurrentTime] = useState(null);
  return (
    <>
      <Header />
      <nav className="flex justify-center bg-backgroundNormal ">
        <button className="mx-10 px-4 hover:text-cyan-400 font-sans font-semibold text-white hover:rounded-xl p-3 mb-2">
          <ComponentSVG.HistorialDates /> Historial
        </button>
        <button className="mx-10 px-4 hover:text-cyan-400 font-sans font-semibold text-white hover:rounded-xl p-3 mb-2">
          <ComponentSVG.Dates24h />
          Mis citas
        </button>
      </nav>
      <div
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo.jpg')" }}
      >
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg md:rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-6 bg-gradient-to-b from-slate-600 to-zinc-300 ">
            <h2 className="text-zinc-100 text-3xl py-3 font-bold text-center">
              Agenda tu cita
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="servicio"
                  className="block text-white font-semibold"
                >
                  Servicio
                </label>
                <input
                  type="text"
                  id="servicio"
                  name="servicio"
                  className="w-full p-2 border border-white font-semibold rounded mt-1"
                  placeholder="Describe el servicio requerido"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-white font-semibold"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full p-2 border border-white font-semibold rounded mt-1"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Tu email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="telefono"
                  className="block text-white font-semibold"
                >
                  Modelo
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Tu número de teléfono"
                />
              </div>
              <strong className="my-4 block "> ---- Detalles Vehiculo ----</strong>
              <div className="mb-4">
                <label htmlFor="marca"
                  className="block font-semibold"
                
                >Marca</label>
                <select
                  id="marca"
                  name="marca"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  defaultValue={marca}
                  onChange={(e) => setMarca(e.target.value)}
                >
                  <option value="Otro">Otro</option>
                  {Object.entries(marcas).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="modelo"
                  className="block font-semibold"
                >
                  Modelo
                </label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Modelo de tu auto ej.(mustang)"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="fecha" className="block text-gray-700">
                  Fecha de Cita
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hora" className="block text-gray-700">
                  Hora de la cita
                </label>
                <input
                  defaultValue={time}
                  onChange={(e) => setCurrentTime(e.target.value)}
                  type="time"
                  id="hora"
                  name="hora"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 hover:shadow-blue-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl mb-4"
              >
                AGENDAR
              </button>
            </form>
          </div>
          <div className="md:w-1/2 flex items-center p-5 justify-center">
            {selectedLogo && (
              <div key={selectedLogo.name}>
                <img
                  src={selectedLogo.image.source}
                  alt="Auto en el taller"
                  className="w-full h-full object-cover logo-image"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Spacing forzado */}
      <div className="hidden md:block w-full md:w-1/2 md:pl-4">
        <p className="text-lg">
          <br />
          <br />
          <br />
        </p>
      </div>

      <Footer />
    </>
  );
}
