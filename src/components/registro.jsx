import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Registro() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initializeForm());

  const handleChange = (input, event) => {
    setFormValues({ ...formValues, [input]: event.target.value });
  };

  const handleSubmit = () => {
    signUp(formValues)
      .then(() => navigate("/"))
      .catch((err) => {
        alert("No pudiste registrarte");
        console.log(err);
        navigate('/register')
      });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen bg-backgroundNormal">
      {/* Left: Register Form */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 bg-backgroundNormal">
        <h1 className="text-6xl font-sans mb-20 text-white font-semibold">
          Mecánico Express Querétaro
        </h1>
        <form>
          {/* Nombre */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Nombre
            </label>
            <input
              value={formValues.name}
              onChange={(e) => handleChange("name", e)}
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Apellidos */}
          <div className="mb-4">
            <label htmlFor="surname" className="block text-white">
              Apellidos
            </label>
            <input
              value={formValues.surname}
              onChange={(e) => handleChange("surname", e)}
              type="text"
              id="surname"
              name="surname"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Teléfono */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-white">
              Teléfono
            </label>
            <input
              value={formValues.phone}
              onChange={(e) => handleChange("phone", e)}
              type="text"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Correo electrónico */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Correo electrónico
            </label>
            <input
              value={formValues.email}
              onChange={(e) => handleChange("email", e)}
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Contraseña */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Contraseña
            </label>
            <input
              value={formValues.password}
              onChange={(e) => handleChange("password", e)}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
        </form>
        {/* Botón de registro */}
        <button
          onClick={handleSubmit}
          className="bg-gray-500 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-5"
        >
          REGISTRARSE
        </button>
        {/* Link de inicio de sesión */}
        <div className="mt-6 text-blue-500 text-center">
          <p className="text-white">
            ¿Ya tienes cuenta?{" "}
            <a
              //href="mailto:syncro_cargo@gmail.com"
              className="hover:underline text-blue-500"
              onClick={() => navigate("/Login")}
            >
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
      {/* Right: Image */}
      <div className="w-full lg:w-1/2 h-screen hidden lg:flex justify-center items-center">
        <img src="/registro.png" alt="" className="object-cover h-full" />
      </div>
    </div>
  );
}

function initializeForm() {
  return {
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
  };
}

export default Registro;
