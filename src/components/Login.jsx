import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { ToastContainer, toast } from "react-toastify";
//import { validateEmail } from "../utils/ValidationMail";
import { useAuth } from "../contexts/AuthContext";
function Login() {
  const { signIn } = useAuth();

  const navigation = useNavigate();
  //Declaracion de objeto formulario
  const [formValues, setFormValues] = useState(initializeForm());

  //Manejo de cambios en el input
  const handleChange = (input, event) => {
    //traer el form y setear el dato segun el campo
    setFormValues({ ...formValues, [input]: event.target.value });
  };

  const handleSubmmit = () => {
    signIn(formValues)
      .then(navigation("/"))
      .catch((err) => {
        alert("No pudiste iniciar sesion");
        console.log(err);
        navigation('/login')
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-backgroundNormal">
      {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:flex justify-center items-center bg-white">
        <img src="/login.png" alt="" className="object-cover h-full" />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-backgroundNormal">
        <h1 className="text-6xl font-sans mb-4 text-white font-semibold">
          Mecánico Express Querétaro
        </h1>
        <form>
          {/* <!-- Username Input --> */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-white">
              Correo electronico
            </label>
            <input
              value={formValues.email}
              onChange={(e) => handleChange("email", e)}
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* <!-- Password Input --> */}
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
          {/* <!-- Forgot Password Link --> */}
          <div className="mb-6 text-blue-500">
            <a
              href="mailto:syncro_cargo@gmail.com"
              className="hover:underline text-blue-300"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        {/* <!-- Login Button --> */}
        <button
          onClick={handleSubmmit}
          className="bg-gray-500 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-5"
        >
          INICIAR SESION
        </button>
        {/* <!-- Sign up  Link --> */}
        <div className="mt-6 text-blue-500 text-center">
          <p className="text-white">
            Aun no tienes cuenta?{" "}
            <a
              href="mailto:syncro_cargo@gmail.com"
              className="hover:underline text-blue-500"
              onClick={() => navigation("Home")}
            >
              Registrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function initializeForm() {
  return {
    email: "",
    password: "",
  };
}

export default Login;
