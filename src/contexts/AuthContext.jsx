import React, { createContext, useReducer, useMemo } from "react";
import { AuthService } from "../components/EndpointRoute";

const AuthContext = createContext();

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "SIGN_IN":
          return {
            ...prevState,
            userToken: action.token,
            isSignOut: false,
            nameUser: action.name,
            lastNameUser: action.lastName,
            emailUser: action.email,
            cellphoneUser: action.cellphone
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            userToken: null,
            emailUser: null,
            isSignOut: true,
          };
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        default:
          return prevState;
      }
    },
    {
      userToken: null,
      nameUser: null,
      lastNameUser: null,
      cellphoneUser: null,
      emailUser: null,
      isSignOut: false,
      isLoading: true,
    }
  );

  const authContext = useMemo(
    () => ({
      state,
      signIn: async (loginData) => {
        try {
          // Mostramos la data que nos llega desde el formulario
          console.log("Login data:", loginData);

          // Hacer la petición a la API
          const response = await fetch(`${AuthService}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              correo: loginData.email,
              password: loginData.password,
            }),
          });
          if (response.ok) {
            const data = await response.json();
            // Almacenamos datos del token en localStorage
            localStorage.setItem("userToken", data.token);
            localStorage.setItem("userName", data.name);
            localStorage.setItem("lastNameUser", data.lastName);
            localStorage.setItem("userEmail", data.email);
            localStorage.setItem("cellphoneUser", data.phone);
            // Despachamos el estado cuando se cumpla el inicio de sesión según la API
            dispatch({
              type: "SIGN_IN",
              token: data.token,
              email: data.email,
              name: data.name,
              lastName: data.lastName,
              cellphone: data.phone,
            });
            return true;
          } else {
            // const errorData = await response.json();
            // console.error("Error:", errorData.message);
            return false;
          }
        } catch (error) {
          console.error("Fetch error:", error);
          return false;
        }
      },
      signOut: async () => {
        // Logica para el cierre de sesion
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("lastNameUser");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("cellphoneUser");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        const capitalizeFirstLetter = (string) => {
          if (!string) return "";
          return string.charAt(0).toUpperCase() + string.slice(1);
        };
        try {
          const response = await fetch(`${AuthService}/signup`, {
            method: "POST", // POST ya que se hace la creación de un elemento
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
              telefono: parseInt(data.phone),
              nombre: capitalizeFirstLetter(data.name),
              apellido: capitalizeFirstLetter(data.surname),
            }),
          });
          if (response.ok) {
            const responseData = await response.json();
            // Almacenamos el token en localStorage
            localStorage.setItem("userToken", responseData.token);
            localStorage.setItem("userName", responseData.name);
            localStorage.setItem("userEmail", data.email);
            dispatch({ // REQUIERE SETEO CON DATOS PROPORCIONADOS POR LA API
              type: "SIGN_IN",
              token: responseData.token,
              email: data.email,
              name: responseData.name,
            });
            return true;
          } else {
            return false;
          }
        } catch (err) {
          return false;
        }
      },
    }),
    [state]
  );

  // Get a previous session
  React.useEffect(() => {
    const restoreToken = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const name = localStorage.getItem("userName");
        const email = localStorage.getItem("userEmail");
        const lastName = localStorage.getItem("lastNameUser");
        const phone = localStorage.getItem("cellphoneUser");
        if (token) {
          // Update the state with restored token
          dispatch({
            type: "RESTORE_TOKEN",
            token: token,
          });
          dispatch({
            type: "SIGN_IN",
            token: token,
            name: name,
            email: email,
            lastName: lastName,
            cellphone: phone
          });
        } else {
          throw new Error("Token not found");
        }
      } catch (error) {
        console.log("Session not available to restore", error);
      }
    };

    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};
