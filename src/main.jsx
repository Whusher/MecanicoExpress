import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
    <ToastContainer/>
  </AuthProvider>
);
