import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages Guest
import Home from './views/guest/MainContent'; 
import Servicios from './views/guest/Servicios';
import Promociones from './views/guest/Promociones';
import Login from './components/Login';
import Registro from './components/Registro';
import Refacciones from './views/guest/Refac';
import Citas from './views/guest/Citas';
import Nosotros from './views/guest/Nosotros';
//Pages User Logged

//Context API
import { useAuth } from './contexts/AuthContext';

function App() {
  const {state} = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {
          state.userToken ?(
            <Route path="/" element={<h1>Holaaa</h1>} />
          ):(
            <>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/login" element={<Login />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/refacciones" element={<Refacciones />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/nosotros" element={<Nosotros />} />
            </>
          )
        }
      </Routes>
    </Router>
  );
}


export default App;
