import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages Guest
import Home from './views/MainContent'; 
import Servicios from './views/Servicios';
import Promociones from './views/Promociones';
import Login from './components/Login';
import Registro from './components/registro';
import Refacciones from './views/Refac';
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
            <Route path="/servicios" element={<Servicios />} />
          ):(
            <>
            <Route path="/login" element={<Login />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/refacciones" element={<Refacciones />} />
            </>
          )
        }
      </Routes>
    </Router>
  );
}


export default App;
