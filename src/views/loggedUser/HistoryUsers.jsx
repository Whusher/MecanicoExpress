import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const appointmentHistory = [
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
  {
    title: "Revisión general",
    date: "2023-06-17",
    time: "11:00 AM",
    status: "Perdida",
  },
];

function AppointmentHistory() {
  const [history] = useState(appointmentHistory);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-gradient-to-r from-gray-200 to-gray-100 p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 m-4 p-2 border-b-4 border-indigo-500 inline-block">
            Historial de tus citas
          </h1>
        </div>
        <div className="flex-grow">
          <ShowAppointmentHistory history={history} />
        </div>
      </main>
      <Footer />
    </>
  );
}

function ShowAppointmentHistory({ history }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {history.map((appointment, index) => (
        <div
          key={index}
          className="bg-white w-full max-w-4xl rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center mx-auto my-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
        >
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-gray-800 text-3xl font-semibold mb-2">{appointment.title}</h2>
            <p className="text-lg text-gray-600 mb-2">Fecha: {appointment.date}</p>
            <p className="text-lg text-gray-600 mb-2">Hora: {appointment.time}</p>
            <p
              className={`text-xl font-bold ${
                appointment.status === "Atendida"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {appointment.status}
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center p-6">
            <img
              src={
                appointment.status === "Atendida"
                  ? "/atendida.png"
                  : "/perdida.png"
              }
              alt={appointment.status}
              className="w-32 h-32 rounded-full shadow-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentHistory;
