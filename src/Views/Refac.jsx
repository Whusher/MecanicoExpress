function Refacciones() {
    return (
        <div className="flex justify-between max-w-7xl mx-auto px-4 py-8">
            {/* Columna izquierda (Recuadro negro) */}
            <div className="w-1/2 bg-black p-6 rounded-lg text-white flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-10">REFACCIONES ORIGINALES</h2>
                    <p className="text-lg mb-4 font-semibold">
                        En Mécanico Express nos preocupamos por <br />
                        el mejor desempeño de tu automóvil es por <br />
                        eso que usamos Refacciones Originales que <br />
                        aunados a un adecuado mantenimiento <br />
                        preventivo aumentarán el rendimiento de tu <br />
                        vehículo.
                    </p>
                    <p className="text-lg mb-8 font-semibold">
                        Al utilizar Refacciones Originales se <br />
                        previene el deterioro prematuro de los <br />
                        sistemas del vehículo. Para mantener un <br />
                        vehículo funcionando en su mejor nivel y que <br />
                        éste mantenga mejor su valor en el tiempo, <br />
                        es preferible utilizar Refacciones Originales <br />
                        que nos brindan seguridad y confiabilidad.
                    </p>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg">
                        Ver productos
                    </button>
                </div>
            </div>
            
            {/* Columna derecha (imagen) */}
            <div className="w-1/2 flex justify-center items-center">
                <img src="/refac.png" alt="Imagen" className="w-full max-w-xl h-auto" />
            </div>
        </div>
    );
}

export default Refacciones;