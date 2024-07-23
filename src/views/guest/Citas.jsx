import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ComponentSVG } from "../../assets/ComponentSVG";
import { Link } from "react-router-dom";
export default function Citas() {
  return (
    <>
      <Header />
      <div className="w-full max-h-3/4 p-8 bg-backgroundNormal rounded-lg shadow-xl shadow-cyan-700 flex flex-col md:flex-row justify-between items-center mx-auto md:mb-20 mt-10">
        <section className="text-white p-4 m-5 w-full md:w-1/2 text-lg">
          <h3 className="font-sans font-semibold text-2xl md:text-5xl my-5">
            Ahora puedes hacer tus citas aquí y acudir para cualquier servicio
          </h3>
          <article id="introduction" className="text-xl">
            <p className="text-slate-300">
              Regístrate y obtén <strong>beneficios</strong> como promociones, descuentos, acceso a tu historial y mucho más...
            </p>
            <p className="text-slate-300 mt-2">
              Tu automóvil en las mejores manos con expertos calificados y capacitados para resolver cualquier falla.
            </p>
          </article>
          <Link to={'/login'} className="text-center w-1/2 h-20 rounded bg-buttons font-bold text-slate-900 my-3  mx-auto p-3 flex hover:shadow-lg hover:shadow-blue-500/50 hover:text-gray-300 ">
            <div className="text-center m-3">
              Accede Ahora! 
            </div>
              <ComponentSVG.Dates24h/>
          </Link>
          <span className="text-teal-100/90">Tu tiempo importa y por ello trabajamos fuerte y eficiente para que no lo pierdas en otros talleres.</span>
        </section>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://carfromjapan.com/wp-content/uploads/2015/09/5e36a71053561005868200146efa6b30.jpg"
            alt="Imagen de servicio"
            className="w-full h-auto object-cover md:w-auto md:h-full"
          />
        </div>
        {//Spacing truqueado  
        }
      </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-lg">
            <br />
            <br />
            <br />
          </p>
        </div>
      <Footer />
    </>
  );
}
