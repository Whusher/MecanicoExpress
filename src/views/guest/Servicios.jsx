import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../contexts/AuthContext";
function Servicios() {
    const {state} = useAuth()
    return (
        <>
        <Header/>
        <h1>Hola {state.emailUser}</h1>
        <div className="flex justify-between max-w-7xl mx-auto px-4 py-8">
            {/* Columna izquierda (Recuadro negro) */}
            <div className="w-1/2 max-w-lg bg-black p-6 rounded-lg text-white ">
               
                    <h2 className="text-2xl font-bold mb-">En Mecánico Express Querétaro</h2>
                     <h2 className="text-2xl font-bold mb-10">contamos con multiples servicios:</h2>
                    <p className="text-lg mb-4 font-semibold">
                    • Cambio de aceite <br />
                    • Afinación de motor <br />
                    • Afinación de transmición <br />
                    • Sistema de frenos <br />
                    • Suspención <br />
                    • Sistema de enfriamiento <br />
                    • Clutch <br />
                    • Reparaciones mayores <br />
                    • Puntos de seguridad <br />
                    </p>
                </div>
            

            {/* Columna derecha (imagen) */}
            <div className="w-1/2 flex justify-center items-center">
                <img src="/service.png" alt="Imagen" className="w-full max-w-xl h-auto" />
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Servicios;