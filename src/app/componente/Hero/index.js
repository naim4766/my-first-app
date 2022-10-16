import { AiOutlinePlayCircle } from 'react-icons/ai';

function Hero() {
  return (
    <div className="relative">
        <img className="rounded-xl max-h-[400px ] object-cover" src="https://cdn.britannica.com/43/182843-050-B623067D/Gamora-Star-Lord-Drax-the-Destroyer-Rocket-Raccoon.jpg" loading="lazy"/>


        <div className="absolute bottom-5 flex flex-col justify-center w-[100%] items-center text-center ">
          <button className=" transition duration-[0.5s] mb-3 flex items-center  text-gray-200 bg-rose-600 py-2 rounded-[5px] px-2 hover:bg-green-600 "> <AiOutlinePlayCircle className='mr-2' size={25}/>watch tailor</button>

          <h1 className="text-4xl font-bold text-gray-50">Guardians of the Galaxy Vol.1</h1>

        </div>


    </div>
    
    
  )
}

export default Hero