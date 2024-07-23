import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
{/*import WorkingPage from "../../utils/WorkingPage"; */}
const promotions = [
  {
    title: "Servicio Completo",
    description: "Dale mantenimiento a tu vehículo para mantenerlo en óptimas condiciones y viajar seguro.",
    price: 900,
    details: ["Bujias", "Aceite Roshfrans 5w-30", "Refrigerante"],
    modelsApply: ["Aveo", "Spark", "Cruze"],
    image: "https://th.bing.com/th/id/OIP.Op5lHZD_Rm07JEvI-pp9fwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Cambio de Aceite y Filtro",
    description: "Cambia el aceite y el filtro de tu auto para asegurar un funcionamiento suave y prolongar la vida útil del motor.",
    price: 300,
    details: ["Aceite sintético 5w-30", "Filtro de aceite"],
    modelsApply: ["Civic", "Accord", "Fit"],
    image: "https://www.carkeys.co.uk/media/1083/oil_change.jpg?anchor=center&mode=crop&width=1200&height=800",
  },
  {
    title: "Revisión de Frenos",
    description: "Revisa y ajusta los frenos de tu vehículo para garantizar una conducción segura.",
    price: 400,
    details: ["Revisión de pastillas de freno", "Ajuste de frenos", "Limpieza de discos"],
    modelsApply: ["Corolla", "Camry", "Yaris"],
    image: "https://th.bing.com/th/id/OIP.Y8DOo21B0nviFg3t1jH0nwHaE7?rs=1&pid=ImgDetMain",
  },
  {
    title: "Alineación y Balanceo",
    description: "Alinea y balancea las llantas de tu vehículo para mejorar la estabilidad y prolongar la vida de tus neumáticos.",
    price: 350,
    details: ["Alineación de llantas", "Balanceo de neumáticos", "Revisión de suspensión"],
    modelsApply: ["Jetta", "Golf", "Passat"],
    image: "https://th.bing.com/th/id/OIP.0N72hlbH-PGIhRuL0Q4thgHaE8?rs=1&pid=ImgDetMain",
  },
  
];

const normals = [
  {
    title: "Revisión general",
    description: "Mantén tu auto limpio y presentable con nuestro servicio de lavado exterior.",
    price: 100,
    details: ["Lavado completo", "Secado a mano", "Aplicación de cera rápida"],
    modelsApply: ["Todos los modelos"],
    image: "https://th.bing.com/th/id/OIP.uui0y6RUvWUWF0KBVuhZ2gHaE9?rs=1&pid=ImgDetMain",
  },
  {
    title: "Revisión de Neumáticos",
    description: "Verificamos la presión y estado de tus neumáticos para asegurar una conducción segura.",
    price: 150,
    details: ["Verificación de presión", "Inspección visual", "Rotación de neumáticos"],
    modelsApply: ["Todos los modelos"],
    image: "https://th.bing.com/th/id/OIP.0N72hlbH-PGIhRuL0Q4thgHaE8?rs=1&pid=ImgDetMain",
  },
  {
    title: "Servicio de Aire Acondicionado",
    description: "Mantén tu aire acondicionado en óptimas condiciones para disfrutar de un viaje cómodo.",
    price: 600,
    details: ["Carga de gas refrigerante", "Limpieza de sistema", "Revisión de compresor"],
    modelsApply: ["Altima", "Sentra", "Versa"],
    image: "https://electrico.leon.cl/images/seccion6-2.png",
  },
  {
    title: "Revisión de Batería",
    description: "Revisa la batería de tu vehículo y asegúrate de que esté en buen estado para evitar sorpresas.",
    price: 200,
    details: ["Prueba de carga", "Limpieza de terminales", "Revisión de alternador"],
    modelsApply: ["Mazda 3", "Mazda 6", "CX-5"],
    image: "https://th.bing.com/th/id/OIP.uui0y6RUvWUWF0KBVuhZ2gHaE9?rs=1&pid=ImgDetMain",
  },
];

function Promociones() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen md:mb-40">
        <h1 className="text-2xl flex justify-center font-bold m-4">
          CONOCE LAS PROMOCIONES QUE MECÁNICO EXPRESS TIENE PARA TÍ
        </h1>
        <div className="flex-grow">
          <SectionTitle title="PROMOCIONES" />
          <ShowPromotions title="Promociones" data={promotions} colorBackground="bg-gradient-to-t from-zinc-600 to-gray-900" colorFont="text-white" />
          <SectionTitle title="PRECIOS REGULARES" />
          <ShowPromotions title="Precios Regulares" data={normals} colorBackground="bg-gray-500" colorFont="text-black" />
        </div>
      </main> 
      <Footer />
    </>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="flex justify-center my-8">
      <div className="relative inline-block">
        <h2 className="text-3xl font-bold px-6 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-lg">
          {title}
        </h2>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-full blur-lg opacity-50"></div>
      </div>
    </div>
  );
}

function ShowPromotions({ title, data, colorBackground, colorFont }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((item, index) => (
        <div key={index} className={`${colorBackground} w-full max-w-4xl rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-center mx-auto my-4 hover:shadow-gray-800`}>
          <div className="w-full md:w-1/2 p-4">
            <h1 className={`${colorFont} text-4xl font-bold mb-4`}>{item.title}</h1>
            <p className="text-lg text-white mb-6">{item.description}</p>
            <ol className={`list-disc ${colorFont} m-3 ml-5`}>
              <span className="text-red-500 font-semibold">Incluye:</span>
              {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ol>
            <Link to="/citas">
            <button className="transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl shadow-xl mb-4">
              Agendar servicio
            </button>
            </Link>
            <div className="text-lg text-white text-center">
              <span className="font-bold text-3xl">${item.price}.00 MXN</span>
              {title === "Promociones" && (
                <p className="text-red-500/70 line-through ml-4 md:inline">${item.price + parseInt(item.price/2)}.00 MXN</p>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <img src={item.image} alt="Promoción" className="object-cover h-full rounded-lg shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promociones;
