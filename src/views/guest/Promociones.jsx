import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaGift } from 'react-icons/fa';

const services = [
  {
    title: "Express Pack",
    description: "Servicio menor.",
    details: [
      "ESCANEO DE MOTOR",
      "CAMBIO DE ACEITE",
      "FILTRO DE MOTOR",
      "LIMPIEZA DE FILTROS AIRE Y GASOLINA",
      "CALIBRADO DE BUJIAS",
      "REVISION DE FRENOS",
      "REVISION DE BANDAS",
      "REVISION DE FUGAS (TODAS)",
      "CORRECCION DE NIVELES DE LIQUIDOS"
    ],
    courtesy: [
      "Cambio de focos exteriores fundidos (no incluye foco de alta y baja)",
      "Corrección de líquido de chisgueteros",
      "Lavado de motor y carrocería"
    ],
    image: "https://noticias.coches.com/wp-content/uploads/2015/02/taller-mecanico-1074x483.jpg",
  },

  {
    title: "Fantastic Pack",
    description: "Servicio mayor",
    details: [
      "ESCANEO DE MOTOR",
      "LIMPIEZA DE CUERPO DE ACELERACIÓN",
      "LAVADO DE INYECTORES",
      "CAMBIO DE BUJÍAS CONVENCIONALES",
      "CAMBIO DE FILTRO DE GASOLINA",
      "CAMBIO DE ACEITE Y FILTRO DE MOTOR",
      "REVISION DE BANDA DE TIEMPO",
      "REVISION DE BANDAS EXTERIORES: ALTERNADOR",
      "REVISIÓN DE FRENOS DELANTEROS (DISCO)",
      "REVISION, LIMPIEZA Y AJUSTE DE FRENOS TRAS",
      "REVISION DE FUGAS (TODOS LOS FLUIDOS)",
      "REVISION DE SISTEMA DE ENFRIAMIENTO",
    ],
    courtesy: [
      "Cambio de focos ext. Fundidos (No incluye foco de alta y baja)",
      "Corrección de líquidos y chisgueteros",
      "Lavado de motor y carrocería",
    ],
    image: "https://cdn.prod.website-files.com/60aea4e5ac6df63edce0b8b4/6171fda6b62c984e33fa7d3a_Autoseguro-Crabi-Blog-Cat-Reparacion-de-Automoviles.jpg",
  },
  {
    title: "Amazing Pack",
    description: "Servicio plus",
    details: [
      "ESCANEO DE MOTOR",
      "LIMPIEZA DE CUERPO DE ACELERACIÓN",
      "LAVADO DE INYECTORES",
      "CAMBIO DE BANDA DE DISTRIBUCIÓN",
      "CAMBIO DE BUJÍAS CONVENCIONALES",
      "CAMBIO DE FILTRO DE AIRE",
      "CAMBIO DE FILTRO DE GASOLINA",
      "CAMBIO DE ACEITE Y FILTRO DE MOTOR",
      "CAMBIO DE LÍQUIDO DE FRENOS",
      "CAMBIO DE LÍQUIDO DE DIRECCIÓN HIDRÁULICA",
      "CAMBIO DE ACEITE DE TRANSMISIÓN STD",
      "PURGADO DE ANTICONGELANTE",
      "REVISIÓN DE FRENOS DELANTEROS (DISCO)",
      "LIMPIEZA Y AJUSTE DE FRENOS TRASEROS",
      "CORRECCIÓN DE NIVELES DE LÍQUIDOS",
    ],
    courtesy: [
      "Cambio de focos exteriores fundidos (no incluye foco de alta y baja)",
      "Revisión de limpiadores y chisgueteros",
      "Lavado de motor y carrocería",
    ],
    image: "https://th.bing.com/th/id/OIP.Op5lHZD_Rm07JEvI-pp9fwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Prevention Pack",
    description: "Servicio de transmisión",
    details: [
      "TRANSMISIÓN (ESTÁNDAR)",
      "CAMBIO DE ACEITE",
      "LIMPIEZA DE SELECTOR",
      "AJUSTE DE VELOCIDADES",
      "EMPACADO DE CÁRTER",
      "TRANSMISIÓN (AUTOMÁTICOS) INCLUYE KIT",
      "CAMBIO DE ACEITE",
      "CAMBIO DE FILTRO",
      "CAMBIO DE EMPAQUES",
      "SOPLETEADO INTERNO",
      "LAVADO INTERIOR",
    ],
    courtesy: [
      "Revisión de limpiadores y chisgueteros",
      "Lavado de motor y carrocería",
    ],
    image: "https://emprendedores.es/wp-content/uploads/iStock-1130307955-1024x683.jpg",
  },
  {
    title: "Velocity Pack",
    description: "Banda de distribución",
    details: [
      "CAMBIO DE BANDA DE TIEMPO",
      "REVISIÓN DE POLEAS DE BANDAS DE DISTRIBUCIÓN",
      "REVISIÓN DE BOMBA DE AGUA",
      "VERIFICACIÓN DE FUGAS EN RETENES DE ACEITE",
      "REVISIÓN Y AJUSTE DE BANDA ALTERNADOR/MOTOR",
      "REVISIÓN DE POLEAS DE BANDA DE MOTOR",
    ],
    courtesy: [
      "Revisión de banda del auto"
    ],
    image: "https://cdn-images.motor.es/image/m/1320w.webp/fotos-noticias/2020/08/por-que-el-velocimetro-del-coche-marca-mas-velocidad-que-el-gps-202070136-1597738425_1.jpg",
  },
  {
    title: "Security Pack",
    description: "Frenos delanteros/traseros",
    details: [
      "CAMBIO DE BALATAS DELANTERAS CON RECTIFICADO DE DISCOS",
      "CAMBIO DE BALATAS TRASERAS RECTIFICADO (TAMBOR O DISCOS)",
      "AJUSTE Y LIMPIEZA DE FRENOS TRASEROS",
      "AJUSTE DE FRENO DE MANO (ESTACIONAMIENTO)",
      "REVISIÓN Y REENGRASADO DE BALEROS TRASEROS",
      "RELLENADO DE LÍQUIDO DE FRENOS",
      "ENGRASADO DE PERNOS DE CALIPER",
    ],
    courtesy: [
      "Corrección de líquido y chisgueteros",
      "Lavado de motor y carrocería",
    ],
    image: "https://www.mibolsillo.com/__export/1692919572204/sites/debate/img/2023/08/24/inflar-llantas-autos-1.jpg_554688468.jpg",
  },

];

function Packs() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-gradient-to-b from-red-700 via-slate-900 to-black">
        <h1 className="text-5xl font-extrabold text-white text-center my-6 mx-4 bg-clip-text bg-gradient-to-r from-red-400 via-yellow-500 to-red-600">
          SERVICIOS DE MECÁNICO EXPRESS
        </h1>
        <div className="flex-grow">
          <ShowServices title="Express Pack" data={services} />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-lg">
            <br />
            <br />
            <br />
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ShowServices({  data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {data.map((item, index) => (
        <div key={index} className="bg-gradient-to-t from-zinc-600 to-gray-900 w-full max-w-2xl rounded-xl shadow-lg mx-auto my-6 p-6 text-white">
          <div className="flex flex-col items-center">
            <img src={item.image} alt="Servicio" className="object-cover h-48 w-full rounded-lg shadow-lg mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-center">{item.title}</h1>
            <p className="text-lg mb-4 text-center">{item.description}</p>
            <div className="text-left w-full">
              <h3 className="text-xl text-red-500 font-semibold">Incluye:</h3>
              <ol className="list-disc ml-6 mb-4">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex items-center"><FaCheckCircle className="inline-block text-green-500 mr-2" />{detail}</li>
                ))}
              </ol>
              <h3 className="text-xl text-blue-500 font-semibold">Estupenda cortesía:</h3>
              <ol className="list-disc ml-6">
                {item.courtesy.map((courtesyItem, index) => (
                  <li key={index} className="flex items-center"><FaGift className="inline-block text-purple-500 mr-2" />{courtesyItem}</li>
                ))}
              </ol>
            </div>
            <Link to="/citas">
              <button className="transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg mt-6">
                Agendar servicio
              </button>
            </Link>
          </div>
        </div>
        
      ))}
      
    </div>    
  );
  
}

export default Packs;
