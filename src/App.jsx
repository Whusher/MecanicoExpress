import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './views/MainContent'; // Importa tus componentes de páginas
//import Citas from './pages/Citas';
import Servicios from './views/Servicios';
//import Promociones from './pages/Promociones';
import Login from './components/Login';
import Refacciones from './views/Refac';
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/refacciones" element={<Refacciones />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}


export default App;
