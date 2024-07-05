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
import Dates from './views/loggedUser/Dates'
import HistoryUsers from './views/loggedUser/HistoryUsers'
import Profile from './views/loggedUser/Profile'
//Context API
import { useAuth } from './contexts/AuthContext';

function App() {
  const {state} = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        {
          state.userToken ?(
            <>
            <Route path="/citas" element={<UserDates/>} />
            <Route path="/CitasUsers" element={<Dates/>} />
            <Route path="/History" element={<HistoryUsers/>} />
            <Route path="/Profile" element={<Profile/>} />
            </>
          ):(
            <>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/refacciones" element={<Refacciones />} />
            <Route path="/citas" element={<Citas />} />
            </>
          )
        }
      </Routes>
    </Router>
  );
}


export default App;
