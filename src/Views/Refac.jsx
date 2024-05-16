function Refacciones() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="md:flex justify-between">
          {/* Columna izquierda (Recuadro negro) */}
          <div className="md:w-1/2 bg-black p-6 rounded-lg text-white md:mr-4 mb-4 md:mb-0">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 md:mb-10">REFACCIONES ORIGINALES</h2>
              <p className="text-base md:text-lg mb-4 md:mb-8">
                En Mécanico Express nos preocupamos por el mejor desempeño de tu automóvil es por eso que usamos Refacciones Originales que aunados a un adecuado mantenimiento preventivo aumentarán el rendimiento de tu vehículo.
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-8">
                Al utilizar Refacciones Originales se previene el deterioro prematuro de los sistemas del vehículo. Para mantener un vehículo funcionando en su mejor nivel y que éste mantenga mejor su valor en el tiempo, es preferible utilizar Refacciones Originales que nos brindan seguridad y confiabilidad.
              </p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg">
                Ver productos
              </button>
            </div>
          </div>
  
          {/* Columna derecha (imagen) */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img src="/refac.png" alt="Imagen" className="w-full max-w-xl h-auto" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Refacciones;
  