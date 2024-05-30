import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { validateEmail } from "../utils/ValidationMail";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initializeForm());

  const handleChange = (input, event) => {
    setFormValues({ ...formValues, [input]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (formValues.email !== '' && formValues.password !== '') {
      if (!validateEmail(formValues.email)) {
        toast.error('El correo proporcionado no es valido', { theme: 'dark' });
        setLoading(false);
        return;
      }
      try {
        const responsePromise = signIn(formValues);
        //Mostrar el spinner
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await responsePromise;
        if (response) {
          navigate('/');
        } else {
          toast.error('Contraseña o correo incorrectos', { theme: 'dark' });
        }
      } catch (error) {
        toast.error('Error al iniciar sesión', { theme: 'dark' });
      }
    } else {
      toast.info('Favor de rellenar todos los campos', { theme: 'dark' });
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-backgroundNormal">
      <div className="w-1/2 h-screen hidden lg:flex justify-center items-center bg-white">
        <img src="/loginnn.png" alt="" className="object-cover h-full" />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-backgroundNormal">
        <h1 className="text-6xl font-sans mb-4 text-white font-semibold">
          Mecánico Express Querétaro
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white">
              Correo electrónico
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
          <div className="mb-6 text-blue-500">
            <a
              href="mailto:syncro_cargo@gmail.com"
              className="hover:underline text-blue-300"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button
            type="submit"
            className="bg-gray-500 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-5 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? <ClipLoader color="#5687FF" loading={loading} size={24} /> : 'INICIAR SESIÓN'}
          </button>
        </form>
        <div className="mt-6 text-blue-500 text-center">
          <p className="text-white">
            ¿Aún no tienes cuenta?{" "}
            <a
              className="hover:underline text-blue-500"
              onClick={() => navigate("/registro")}
            >
              Regístrate
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
