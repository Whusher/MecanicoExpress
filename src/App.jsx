import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/MainContent'; // Importa tus componentes de páginas
//import Citas from './pages/Citas';
import Servicios from './views/Servicios';
//import Promociones from './pages/Promociones';
import Refacciones from './views/Refac';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/refacciones" element={<Refacciones />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
