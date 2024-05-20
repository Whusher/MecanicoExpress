import React, { createContext, useReducer, useMemo } from "react";
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
            emailUser: action.email
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
      emailUser: null,
      isSignOut: false,
      isLoading: true,
    }
  );

  const authContext = useMemo(
    () => ({
      state,
      signIn: async (loginData) => {
        // Mostramos la data que nos llega desde el formulario
        console.log(loginData);
        //Forzamos el error
        let error = 'fallo'
        throw error;
        //Despachamos el estado cuando se cumpla el inicio de sesion segun la API
        //dispatch({ type: "SIGN_IN", token: "pollito", email: 'pollito@mail.com' }); // Update state with the received token
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
        console.log(data);
        // Logic for sign up
        dispatch({ type: "SIGN_IN", token: "pollito" });
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
