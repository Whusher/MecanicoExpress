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
import UserDates from './views/loggedUser/UserDates';
//Context API
import { useAuth } from './contexts/AuthContext';

function App() {
  const {state} = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        {
          state.userToken ?(
            <>
            <Route path="/citas" element={<UserDates/>} />
            </>
          ):(
            <>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/promociones" element={<Promociones />} />
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
