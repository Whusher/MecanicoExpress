import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import {
  AppointmentService,
  DetailService,
} from "../../components/EndpointRoute";
import { useAuth } from "../../contexts/AuthContext";


//Cancel request
async function cancelAppointment(id,emailUser){
  try{
    const response = await fetch(`${AppointmentService}/cancelAppointment`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: emailUser,
        indexDate: id
      })
    })
    if(response.ok){
      toast('Cita cancelada exitosamente:',{theme: 'dark', });
      location.reload();
    }
  }catch(e){
    console.log(e);
    toast('Error al solicitar la cancelacion de la cita',{theme: 'colored'});
  }
}

function Dates() {
  const [userAppointments, setUserAppointments] = useState([
    { title: "Sin citas Pendientes", hora: null },
  ]);
  const { state } = useAuth();
  const [services, setServicios] = useState([]);
  const handleEdit = (index) => {
    console.log(`Editando cita en el índice ${index}`);
  };

  const getAppointments = async () => {
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

  useEffect(() => {
    getAppointments();
    const getServicios = async () => {
      const response = await fetch(`${DetailService}/services`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setServicios(data.results);
      }
    };
    getServicios();
  }, []);
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-gradient-to-tr from-gray-200 to-gray-100 p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 m-4 p-2 border-b-4 border-indigo-500 inline-block">
            Tus Próximas Citas
          </h1>
        </div>
        <div className="flex-grow">
          {userAppointments.length === 0 ? (
            <h2>Sin citas pendientes</h2>
          ) : (
            <ShowAppointments
              appointments={userAppointments}
              onEdit={handleEdit}
              services={services}
              user = {state.emailUser}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function ShowAppointments({ appointments, user, services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {appointments.map((appointment, index) => {
        return appointment.hora === null ? (
          <h1 key={index}>Sin citas Pendientes</h1>
        ) : (
          <div
            key={index}
            className="bg-white w-full max-w-4xl rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center mx-auto my-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            <div className="w-full md:w-2/3 p-6">
              <h2 className="text-gray-800 text-3xl font-semibold mb-2">
                {
                  //Get kind of service that we'll provide
                  services.map((service) =>
                    appointment.servicio_id === service.id
                      ? service.nombre
                      : null
                  )
                }
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Fecha:{" "}
                <span className="font-bold text-black">
                  {appointment.fecha.slice(0, 10)}
                </span>
              </p>
              <p className="text-lg text-gray-600 mb-2">
                Hora: {appointment.hora.slice(0, 5)}
              </p>
              <div className="text-xl font-semibold text-black-600 mb-2">
                --- Vehiculo ---
                <ul className="text-md font-normal text-gray-500">
                  <li>
                    {appointment.marca[0].toUpperCase() +
                      appointment.marca.slice(1)}{" "}
                    {appointment.modelo} {appointment.año}
                  </li>
                </ul>
              </div>
              <p
                className={`text-xl font-bold ${
                  appointment.status === 1
                    ? "text-yellow-500"
                    : appointment.status === 2
                    ? "text-green-500"
                    : ""
                }`}
              >
                {appointment.status === 1
                  ? " En espera de confirmacion... "
                  : " Aprobada "}
              </p>
              <p className="font-semibold text-indigo-800 text-xl my-3">
                Sucursal:{" "}
                {appointment.sucursal_id === 1 ? "Casa Blanca" : "Av de la Luz"}
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-center pb-6">
              <button
                className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-xl hover:bg-indigo-600 transition-all duration-300"
                onClick={async() => cancelAppointment(appointment.id,user)}
              >
                Solicitar la cancelacion de la cita
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dates;
