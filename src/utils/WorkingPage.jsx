import { ClimbingBoxLoader } from 'react-spinners';

export default function WorkingPage() {
  return (
    <div className="flex flex-col items-center px-4 py-16 bg-gradient-to-r from-black-100 to-blue-300 min-h-screen pb-20">
      <h1 className="font-bold text-2xl text-red-700">
        Estamos Trabajando en esta Página...
      </h1>
      <picture className="center">
        <img
          className="w-[300px] h-[300px]"
          src="https://static.vecteezy.com/system/resources/previews/002/351/882/large_2x/men-at-work-symbol-free-vector.jpg"
          alt="PAGE 404"
        />
      </picture>
      <div className='relative my-10'>
        <ClimbingBoxLoader size={40} color="#36d7b7" />
      </div>
      <p className='text-black font-semibold my-2 py-5' >Disculpa los inconvenientes :)</p>
    </div>
  );
}
