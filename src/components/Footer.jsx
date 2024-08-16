import { BrandSVG } from "../assets/BrandSVG";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-backgroundNormal md:fixed bottom-0 left-0 w-full z-10">
      {/* Contenido para pantallas grandes */}
      <div className="hidden md:flex w-full h-16 p-10 text-white mt-5">
        <div className="flex items-center mr-auto ml-0">
          <a href="https://wa.me/+5214424762052" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <BrandSVG.WhatsApp />
          </a>
          <p className="mt-4 ml-2 text-xl">
            &copy; Mecanico Express {date.getFullYear()}.
          </p>
        </div>

        <div className="flex items-center ml-auto mr-0 text-right">
          <p className="text-xl font-semibold">
            SIGUENOS EN NUESTRAS REDES SOCIALES<span className="block text-center">Y OBTEN RECOMPENSAS</span>
          </p>
          <span className="px-2">
            <a href="https://www.instagram.com/mecanicoexpressqro?igsh=MWtkM2FjeDR0Mzlwag==" target="_blank" rel="noopener noreferrer">
              <BrandSVG.Instagram />
            </a>
          </span>
          <span className="px-2 ">
          <a href="https://www.tiktok.com/@mecanicoexpressqro?_t=8n5d88l5abu&_r=1" target="_blank" rel="noopener noreferrer">
            <BrandSVG.Tiktok />
            </a>
          </span>
          <span className="px-2 ">
          <a href="https://www.facebook.com/ChevyCenterQueretaro?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <BrandSVG.Facebook />
            </a>
          </span>
        </div>
      </div>

      {/* Contenido para pantallas móviles */}
      <div className="max-w-2xl mx-auto text-white pb-10 md:hidden lg:hidden">
        <div className="text-center">
          <h3 className="text-3xl mb-3 p-4">¡Tu coche más seguro que nunca!</h3>
          <p>¡Contáctanos ahora!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center my-10">
            <div className="flex items-center border rounded-lg px-4 py-2 mx-2">
              <a href="https://wa.me/+5214424762052" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <BrandSVG.WhatsApp />
              </a>
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Escríbenos</p>
                <p className="text-sm md:text-base">Enviar Whatsapp</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 mx-2">
              <a href="https://www.facebook.com/ChevyCenterQueretaro?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <BrandSVG.Facebook />
              </a>
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Síguenos en Facebook</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 mx-2">
              <a href="https://www.instagram.com/mecanicoexpressqro?igsh=MWtkM2FjeDR0Mzlwag==" target="_blank" rel="noopener noreferrer">
                <BrandSVG.Instagram />
              </a>
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Síguenos en Instagram</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 mx-2">
              <a href="https://www.tiktok.com/@mecanicoexpressqro?_t=8n5d88l5abu&_r=1" target="_blank" rel="noopener noreferrer">
                <BrandSVG.Tiktok />
              </a>
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Síguenos en Tiktok</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
