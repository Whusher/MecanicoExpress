import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuth } from '../../contexts/AuthContext';

const appointments = [
  {
    title: "Cambio de Aceite",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "Atendida",
  },
  {
    title: "Revisión de Frenos",
    date: "2023-06-16",
    time: "2:00 PM",
    status: "Perdida",
  },
  {
    title: "Alineación y Balanceo",
    date: "2023-06-17",
    time: "11:00 AM",
    status: "Atendida",
  },
];

function UserProfile() {
  const { state } = useAuth();
  const { nameUser, emailUser } = state;

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-4">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg"
              alt="Profile"
              className="rounded-full w-24 h-24 mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold">{nameUser}</h1>
              <p className="text-lg">{emailUser}</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Detalles del Perfil</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold">Nombre Completo:</span>
              <span>{nameUser}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Correo Electrónico:</span>
              <span>{emailUser}</span>
            </div>
          </div>
          <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Editar Perfil
          </button>
        </div>

        {/* Appointment History */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Historial de Citas</h2>
          <div className="space-y-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{appointment.title}</h3>
                  <p>{appointment.date} a las {appointment.time}</p>
                </div>
                <span
                  className={`px-4 py-2 rounded-lg ${
                    appointment.status === "Atendida"
                      ? "bg-green-600 text-white"
                      : appointment.status === "Perdida"
                      ? "bg-red-600 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Configuración de la Cuenta</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Cambiar Contraseña
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600 mt-4">
            Cerrar Sesión
          </button>
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

      </main>
      <Footer />
    </>
  );
}

export default UserProfile;
