import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Servicios() {
    return (
        <>
        <Header/>
        <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto px-4 py-8">
            {/* Columna izquierda (Recuadro negro) */}
            <div className="w-full md:w-1/2 bg-black p-6 rounded-lg text-white mb-8 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">En Mecánico Express Querétaro</h2>
                <h2 className="text-2xl font-bold mb-4">contamos con múltiples servicios:</h2>
                <ul className="text-lg font-semibold space-y-2 list-disc list-inside">
                    <li>Cambio de aceite</li>
                    <li>Afinación de motor</li>
                    <li>Afinación de transmisión</li>
                    <li>Sistema de frenos</li>
                    <li>Suspensión</li>
                    <li>Sistema de enfriamiento</li>
                    <li>Clutch</li>
                    <li>Reparaciones mayores</li>
                    <li>Puntos de seguridad</li>
                </ul>
            </div>

            {/* Columna derecha (imagen) */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src="/service.png" alt="Imagen" className="w-full max-w-xl h-auto rounded-lg shadow-lg" />
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Servicios;
