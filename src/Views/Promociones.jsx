import Header from "../components/Header";
import Footer from "../components/Footer";

function Promociones() {
    return (
        <>
            <Header />
            <h1 className="text-2xl flex justify-center font-bold mb-4">
                CONOCE LAS PROMOCIONES QUE MÉCANICO EXPRESS TIENE PARA TÍ
            </h1>
            
                {/* Contenedor de la promoción */}
                <div className="w-full max-w-4xl p-8 bg-black rounded-lg shadow-lg flex justify-between items-center">
                    {/* Columna izquierda */}
                    <div className="w-1/2 p-4">
                        <h1 className="text-4xl text-white font-bold mb-4">Servicio completo</h1>
                        <p className="text-lg text-white mb-6">
                            Dale mantenimiento a tu vehículo para mantenerlo
                            en óptimas condiciones y viajar seguro.
                        </p>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white text-s font-bold py-2 px-4 rounded-xl mb-4">
                            Agendar servicio
                        </button>
                        <p className="text-lg text-white">
                            Por un precio de tan solo: <span className="font-bold text-2xl">$900</span>
                        </p>
                    </div>

                    {/* Columna derecha (imagen) */}
                    <div className="w-1/2 flex justify-center items-center p-4">
                        <img src="/promo.png" alt="Promoción" className="object-cover h-full rounded-lg shadow-lg" />
                    </div>
                </div>
            
            <Footer />
        </>
    );
}

export default Promociones;
