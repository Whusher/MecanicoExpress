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
            //Nombre provicional
            nameUser: action.name,
            emailUser: action.email,
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
            // Despachamos el estado cuando se cumpla el inicio de sesión según la API
            dispatch({
              type: "SIGN_IN",
              token: data.token,
              email: loginData.email,
              name: data.name,
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
        // Logic for close session delete no necessary items
        dispatch({ type: "SIGN_OUT" });
        try {
          //await SecureStore.deleteItemAsync("userToken"); // Remove the token from SecureStore
        } catch (err) {
          console.log(err);
        }
        console.log("CERROOOOO SESION UN cabron");
      },
      signUp: async (data) => {
        const capitalizeFirstLetter = (string) => {
          if (!string) return "";
          return string.charAt(0).toUpperCase() + string.slice(1);
        };
        try {
          const response = await fetch(`${AuthService}/signup`, {
            method: "POST", //POST ya que se hace la creacion de un elemento
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
            dispatch({ //REQUIERE SETEO CON DATOS PROPORCIONADOS POR LA API
              type: "SIGN_IN",
              token: 'tokenExample', //Falta sacar el token de autenticacion de la sesion
              email: data.email,
              name: data.name,
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
        //const token = await SecureStore.getItemAsync("userToken");
        const token = false;
        if (token) {
          // Update the state with restored token
          dispatch({ type: "RESTORE_TOKEN", token: token });
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
