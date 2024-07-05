import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail } from "../utils/ValidationMail";

function Registro() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initializeForm());
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleChange = (input, event) => {
    setFormValues({ ...formValues, [input]: event.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      formValues.email === "" ||
      formValues.name === "" ||
      formValues.phone === "" ||
      formValues.password === "" ||
      formValues.surname === ""
    ) {
      setLoading(false);
      toast.error("Todos los campos son obligatorios", { theme: "dark" });
      return; //Finaliza la funcion si los cmapos estan vacios
    }
    if (formValues.phone.length > 10 || formValues.phone.length < 10) {
      setLoading(false);
      toast.error("El número de teléfono debe tener 10 digitos", {
        theme: "dark",
      });
      return;
    }
    if (!validateEmail(formValues.email)) {
      toast.error("Favor de ingresar un email valido");
      setLoading(false);
      return;
    }
    try {
      //Bloque de peticion al contexto
      const response = await signUp(formValues);
      await new Promise((resolve) => setTimeout(resolve, 4000)); //Tiempo de espera para el cliente
      if (response) {
        setLoading(false);
        toast.success("Registro Exitoso !", {theme: 'dark'});
        navigate("/login");
      } else {
        throw "Error code 500";
      }
    } catch (err) {
      toast.error("Error al registrarse...         Intentar mas tarde !", {theme: 'dark'});
      setLoading(false);
    }
    setLoading(false);
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
            <label htmlFor="name" className="block font-semibold text-white">
              Nombre
            </label>
            <input
              value={formValues.name}
              onChange={(e) => handleChange("name", e)}
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-500 "
              autoComplete="off"
            />
          </div>
          {/* Apellido */}
          <div className="mb-4">
            <label htmlFor="surname" className="block font-semibold text-white">
              Apellido
            </label>
            <input
              value={formValues.surname}
              onChange={(e) => handleChange("surname", e)}
              type="text"
              id="surname"
              name="surname"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-500 "
              autoComplete="off"
            />
          </div>
          {/* Teléfono */}
          <div className="mb-4">
            <label htmlFor="phone" className="block font-semibold text-white">
              Teléfono
            </label>
            <input
              value={formValues.phone}
              onChange={(e) => handleChange("phone", e)}
              type="number"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-500 "
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
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-500 "
              autoComplete="off"
            />
          </div>
          {/* Contraseña */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-white">
              Contraseña
            </label>
            <input
              value={formValues.password}
              onChange={(e) => handleChange("password", e)}
              type={!visiblePassword ? "password" : "text"}
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 pr-10 focus:outline-none focus:border-blue-500 focus:shadow-md focus:shadow-blue-500"
              autoComplete="off"
            />
            {visiblePassword ? (
              <svg
                onClick={togglePasswordVisibility}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-black absolute right-3 top-1/2 transform  cursor-pointer"
              >
                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
              </svg>
            ) : (
              <svg
                onClick={togglePasswordVisibility}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-black absolute right-3 top-1/2 transform  cursor-pointer"
                style={{ width: "24px", height: "24px" }}
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </form>
        {/* Botón de registro */}
        {loading ? (
          <div className="my-6 flex flex-row items-center">
            <p className="text-center p-3 font-bold text-white mb-10">
              Registrandose...
            </p>
            <PropagateLoader size={17} color="#36d7b7" />
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            className={`bg-gray-500 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-5`}
          >
            REGISTRARSE
          </button>
        )}
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
      <div className="w-full lg:w-1/2 h-screen flex lg:h-full hidden lg:flex justify-center items-center bg-backgroundRegister">
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
