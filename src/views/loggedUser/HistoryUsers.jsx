// src/pages/HistorialDates/index.jsx
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AppointmentService, DetailService } from "../../components/EndpointRoute";
import { useAuth } from "../../contexts/AuthContext";
import GeneratePDF from "../../components/GeneratePDF";
import { ComponentSVG } from "../../assets/ComponentSVG";

function HistorialDates() {
  const [userAppointments, setUserAppointments] = useState([]);
  const { state } = useAuth(); 
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
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
          setUserAppointments(data.results);
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await fetch(`${DetailService}/services`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setServices(data.results);
        } else {
          console.error("Failed to fetch services");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchAppointments();
    fetchServices();
  }, [state.userToken]); 

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-gradient-to-tr from-gray-200 to-gray-100 p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 m-4 p-2 border-b-4 border-indigo-500 inline-block">
            Historial de Citas
          </h1>
        </div>
        <div className="flex-grow">
          {userAppointments.length === 0 ? (
            <h2 className="text-center text-2xl mt-8">Sin historial</h2>
          ) : (
            <ShowAppointments appointments={userAppointments} services={services} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function ShowAppointments({ appointments, services }) {
  const handleGeneratePDF = (appointment) => {
    GeneratePDF(appointment);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {appointments.map((appointment, index) => (
        <div
          key={index}
          className="bg-white w-full max-w-4xl rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center mx-auto my-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-gray-800 text-3xl font-semibold mb-2">
              {services.map((service) =>
                appointment.servicio_id === service.id ? service.nombre : null
              )}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Fecha: <span className="font-bold text-black">{appointment.fecha.slice(0, 10)}</span>
            </p>
            <p className="text-lg text-gray-600 mb-2">Hora: {appointment.hora.slice(0, 5)}</p>
            <div className="text-xl font-semibold text-black-600 mb-2">
              --- Vehiculo ---
              <ul className="text-md font-normal text-gray-500">
                <li>
                  {appointment.marca[0].toUpperCase() + appointment.marca.slice(1)} {appointment.modelo} {appointment.año}
                </li>
              </ul>
            </div>
            <p
              className={`text-xl font-bold ${appointment.status === 3 ? "text-green-500" :
                  appointment.status === 4 ? "text-red-500" : ""
                }`}
            >
              {appointment.status === 3 && "Atendida"}
              {appointment.status === 4 && "Perdida"}
            </p>
            <p className="font-semibold text-indigo-800 text-xl my-3">
              Sucursal: {appointment.sucursal_id === 1 ? "Casa Blanca" : "Av de la Luz"}
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center pb-6">
            <div className="mt-4">
              <button className="flex items-center justify-center bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-all duration-300" onClick={() => handleGeneratePDF(appointment)}>
                <ComponentSVG.Document />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistorialDates;
