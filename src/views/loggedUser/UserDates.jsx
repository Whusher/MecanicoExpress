import { useState, useMemo, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LogoList from "../../assets/CarLogo.json";
import { ComponentSVG } from "../../assets/ComponentSVG";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AppointmentService, DetailService } from "../../components/EndpointRoute";
import { validateTime } from "../../utils/ValidationDates";
import { validateDate } from "../../utils/ValidationDates";

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

const sucursales = [
  {
    id: 1,
    name: 'Casa Blanca'
  },
  {
    id:2,
    name: 'Av de la Luz'
  }
]

const tipoVehicle = [
  "Van",
  "Carga",
  "Coupe",
  "Sedan"
]

export default function UserDates() {
  const [marca, setMarca] = useState("");
  const navigate = useNavigate();
  const [servicios, setServicios] = useState([]);
  const {state} = useAuth();
  const [formData, setFormData] = useState({
    nombre: state.nameUser,
    apellido: state.lastNameUser,
    marca: "",
    modelo: "",
    tipo: "",//Sedan Coupe Van
    año: "",
    correo: state.emailUser,
    numero: state.cellphoneUser,
    fecha: "",
    hora: "",
    cliente_id: state.userToken, // Añade el ID del cliente
    sucursal_id: "", // Añade el ID de la sucursal
    servicio_id: "", // Añade el ID del servicio
  });

  useEffect(()=>{
   //Funcion auto invocada
   const getServicios = async()=>{
    const response = await fetch(`${DetailService}/services`,{
      method: 'GET',  
      headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.ok){
        const data = await response.json();
        setServicios(data.results)
      }
    }
    getServicios();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateDate(formData.fecha)) {
      toast.error('La fecha seleccionada no es válida. No se pueden hacer citas en días pasados.');
      return;
    }
  
    if (!validateTime(formData.hora)) {
      toast.error('Por favor ingresa una hora válida (entre 9:00 y 15:59).');
      return;
    }
  
    try {
      const response = await fetch(`${AppointmentService}/creation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      console.log(JSON.stringify(formData));
  
      if (!response.ok) {
        throw new Error('Error en la solicitud al servidor');
      }
  
      const data = await response.json();
  
      if (data) {
        toast('Cita registrada con éxito', { theme: 'dark' });
        // Limpiar el formulario o redirigir a otra página
        setFormData({
          nombre: "",
          tipo: "",
          año: "",
          modelo: "",
          correo: "",
          numero: "",
          fecha: "",
          hora: "",
          cliente_id: "",
          sucursal_id: "",
          servicio_id: "",
        });
        navigate('/CitasUsers');
      } else {
        toast('Error al registrar la cita... Intentalo más tarde', { theme: 'dark' });
      }
    } catch (error) {
      toast('Error al registrar la cita', { theme: 'dark' });
    }
  };
  

  // Indexar las marcas por nombre para mejorar la búsqueda
  const indexedMarcas = useMemo(() => {
    const indexed = {};
    LogoList.forEach((logo) => {
      indexed[logo.name.toLowerCase()] = logo;
    });
    return indexed;
  }, []);

  const selectedLogo = indexedMarcas[marca.toLowerCase()];

  return (
    <>
      <Header />
      <nav className="flex justify-center bg-backgroundNormal ">
        <Link to="/History">
          <button className="mx-10 px-4 hover:text-cyan-400 font-sans font-semibold text-white hover:rounded-xl p-3 mb-2">
            <ComponentSVG.HistorialDates /> Historial
          </button>
        </Link>
        <Link to="/CitasUsers">
          <button className="mx-10 px-4 hover:text-cyan-400 font-sans font-semibold text-white hover:rounded-xl p-3 mb-2">
            <ComponentSVG.Dates24h />
            Mis citas
          </button>
        </Link>
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="servicio_id"
                  className="block text-white font-semibold"
                >
                  Servicio
                </label>
                <select
                  type="text"
                  id="servicio_id"
                  name="servicio_id"
                  className="w-full p-2 border border-white font-semibold rounded mt-1"
                  placeholder="Describe el servicio requerido"
                  value={formData.servicio_id}
                  onChange={handleChange}
                >
                  <option value={0}>Selecciona una opcion</option>
                  {
                    servicios.map((service,index)=>{
                      return <option key={index} value={service.id}>{service.nombre}</option>
                    })
                  }
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="sucursal"
                  className="block text-white font-semibold"
                >
                  Sucursal
                </label>
                <select
                  id="sucursal_id"
                  name="sucursal_id"
                  className="w-full p-2 border border-white font-semibold rounded mt-1"
                  placeholder="Describe el servicio requerido"
                  onChange={handleChange}
                >
                  <option>Selecciona una sucursal</option>
                  {
                    sucursales.map((suc, index)=>{
                      return(
                        <option key={index} value={suc.id}>
                          {suc.name}
                        </option>
                      )
                    })
                  }
                </select>
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
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="apellido"
                  className="block text-white font-semibold"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  className="w-full p-2 border border-white font-semibold rounded mt-1"
                  placeholder="Tu apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="correo"
                  className="block text-white font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Tu email"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numero"
                  className="block text-white font-semibold"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="numero"
                  name="numero"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Tu número de teléfono"
                  value={formData.numero}
                  onChange={handleChange}
                />
              </div>
              <strong className="my-4 block "> ---- Detalles Vehiculo ----</strong>
              <div className="mb-4">
                <label
                  htmlFor="marca"
                  className="block font-semibold"
                >
                  Marca
                </label>
                <select
                  id="marca"
                  name="marca"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={formData.marca}
                  onChange={(e) => {
                    setMarca(e.target.value);
                    handleChange(e);
                  }}
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
                  htmlFor="tipo"
                  className="block font-semibold"
                >
                  Tipo de Vehiculo
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={formData.tipo}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value={0}>Selecciona uno</option>
                  {tipoVehicle.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
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
                  value={formData.modelo}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="año"
                  className="block font-semibold"
                >
                  Año
                </label>
                <input
                  type="number"
                  id="año"
                  name="año"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="Año del vehículo"
                  value={formData.año}
                  onChange={handleChange}
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
                  value={formData.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hora" className="block text-gray-700">
                  Hora de la cita
                </label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  value={formData.hora}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 hover:shadow-blue-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Agendar Cita
              </button>
            </form>
          </div>
          <div className="md:w-1/2 bg-cover bg-center flex items-center justify-center relative">
            {selectedLogo ? (
              <img
                src={selectedLogo.image.source}
                alt={selectedLogo.name}
                className="max-w-full max-h-full object-contain p-2"
              />
            ) : (
              <div className="p-6 bg-gradient-to-b from-slate-600 to-zinc-300 text-white">
                Selecciona una marca para ver el logo del vehículo
              </div>
            )}
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
      <Footer />
    </>
  );
}
