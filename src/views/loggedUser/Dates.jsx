import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const appointments = [
  {
    title: "Cambio de Aceite",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "Aprobada",
  },
  {
    title: "Revisión de Frenos",
    date: "2023-06-16",
    time: "2:00 PM",
    status: "Rechazada",
  },
  {
    title: "Alineación y Balanceo",
    date: "2023-06-17",
    time: "11:00 AM",
    status: "Pendiente",
  },
  {
    title: "Revisión general",
    date: "2023-06-17",
    time: "11:00 AM",
    status: "Aprobada",
  },
];

function UserAppointments() {
  const [userAppointments, setUserAppointments] = useState(appointments);

  const handleDelete = (index) => {
    const updatedAppointments = userAppointments.filter((_, i) => i !== index);
    setUserAppointments(updatedAppointments);
  };

  const handleEdit = (index) => {
    console.log(`Editando cita en el índice ${index}`);
  };

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
          <ShowAppointments
            appointments={userAppointments}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

function ShowAppointments({ appointments, onDelete, onEdit }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {appointments.map((appointment, index) => (
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
                appointment.status === "Aprobada"
                  ? "text-green-500"
                  : appointment.status === "Rechazada"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {appointment.status}
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center items-center p-6">
            <button
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow-xl mr-4 hover:bg-red-600 transition-all duration-300"
              onClick={() => onDelete(index)}
            >
              Borrar
            </button>
            <button
              className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-full shadow-xl hover:bg-indigo-600 transition-all duration-300"
              onClick={() => onEdit(index)}
            >
              Editar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserAppointments;
