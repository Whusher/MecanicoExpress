import { useNavigate} from "react-router-dom";
import { useState } from "react";
//import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from "../utils/ValidationMail";

function Login() {
  const navigation = useNavigate();
  //Declaracion de objeto formulario
  const [formValues, setFormValues] = useState(initializeForm());

  //Manejo de cambios en el input
  const handleChange = (input, event) => {
    //traer el form y setear el dato segun el campo
    setFormValues({ ...formValues, [input]: event.target.value });
  };

  const handleSubmit = async () => {
    if (formValues.email === "" || formValues.password === "") {
      //Campos Vacios
    //   return toast.error("Todos los campos son obligatorios", {
    //     theme: "dark",
    //   });
        alert('Todos los campos son obligatorios');
    }
    if (!validateEmail(formValues.email)) {
      //email no valido
      alert('Email invalido')
    //   return toast.error("Email invalido", {
    //     theme: "dark",
    //   });
    }
    //Realizar solicitud a la API
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-backgroundNormal">
      {/* <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block bg-white items-center">
        <img
          src='/Logo.png'
          alt=""
          className="object-cover w-200 h-1/6 center"
        />
        <img
          src='/onix.png'
          alt=""
          className="object-cover w-full h-1/2"
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-backgroundNormal">
        <h1 className="text-6xl font-sans mb-4 text-white font-semibold">Mecánico Express Querétaro</h1>
        <form >
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
          onClick={() => handleSubmit()}
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
              onClick={()=>navigation('Home')}
            >
              Solicitala
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
