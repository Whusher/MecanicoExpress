import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuth } from '../../contexts/AuthContext';
import {AppointmentService} from "../../components/EndpointRoute";
import { useEffect, useState } from 'react';

function UserProfile() {
  const { state } = useAuth();
  const { nameUser, lastNameUser, emailUser, cellphoneUser } = state;
  const [appointments, setUserAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      console.log(state.userToken);
      try {
        const response = await fetch(`${AppointmentService}/myappointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: state.userToken,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserAppointments(data.results);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getAppointments();
  }, [state.userToken]);

  const getStatusLabel = (status) => {
    switch (status) {
      case 0:
        return { label: "Cancelada", style: "bg-red-600 text-white" };
      case 1:
        return { label: "Aceptada", style: "bg-green-600 text-white" };
      case 2:
        return { label: "Pendiente", style: "bg-yellow-500 text-white" };
      case 3:
        return { label: "Atendida", style: "bg-blue-600 text-white" };
      default:
        return { label: "Desconocido", style: "bg-gray-600 text-white" };
    }
  };

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
              <span className="font-semibold">Apellidos:</span>
              <span>{lastNameUser}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Correo Electrónico:</span>
              <span>{emailUser}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Número telefónico:</span>
              <span>{cellphoneUser}</span>
            </div>
          </div>
          <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Editar Perfil
          </button>
        </div>

        {/* Appointment History */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Mis Citas</h2>
          <div className="space-y-4">
            {appointments.map((appointment, index) => {
              const statusInfo = getStatusLabel(appointment.status);
              return (
                <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{appointment.title}</h3>
                    <p>{appointment.date} a las {appointment.time}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg ${statusInfo.style}`}>
                    {statusInfo.label}
                  </span>
                </div>
              );
            })}
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
      </main>
      <Footer />
    </>
  );
}

export default UserProfile;
