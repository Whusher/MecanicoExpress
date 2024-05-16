import { BrandSVG } from "../assets/BrandSVG";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-backgroundNormal md:fixed bottom-0 left-0 w-full z-10">
      {/* Contenido para pantallas grandes */}
      <div className="hidden md:flex w-full p-5 text-white">
            <div className="flex items-center mr-auto ml-0">
              <BrandSVG.WhatsApp />
              <p className="mt-4 ml-2 text-xl">
                &copy; Mecanico Express {date.getFullYear()}.
              </p>
            </div>

            <div className="flex items-center ml-auto mr-0 text-right">
              <p className="text-xl font-semibold">
                SIGUENOS EN NUESTRAS REDES SOCIALES<span className="block text-center">Y OBTEN RECOMPENSAS</span> 
              </p>
              <span className="px-2">
                <BrandSVG.Instagram />
              </span>
              <span className="px-2 ">
                <BrandSVG.Gmail />
              </span>
                <BrandSVG.Facebook />
              <span className="px-2 ">
              </span>
            </div>
      </div>
      <div className="max-w-2xl mx-auto text-white">
        <div className="max-w-2xl mx-auto text-white pb-10">
          {/* Contenido para pantallas móviles */}
          <div className="text-center md:hidden lg:hidden">
            <h3 className="text-3xl mb-3">Tu coche más seguro que nunca</h3>
            <p> Contactanos ahora!</p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <BrandSVG.WhatsApp />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Escribenos</p>
                  <p className="text-sm md:text-base"> Enviar Whatsapp</p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <BrandSVG.Facebook />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Siguenos en Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
