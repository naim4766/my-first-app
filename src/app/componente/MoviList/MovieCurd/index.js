import { AiTwotoneStar } from 'react-icons/ai';

function MoveCurd({large_cover_image,title_long, year, rating}) {
  return (
    <div className=" m-4  p-4 bg-gray-700 rounded-md hover:-translate-y-2 transition-all">
        <div className='w-full flex justify-center items-center'>
        <img className=" object-cover rounded-md" src={large_cover_image} loading="lazy"/>
        </div>

        <div className='mt-2'> 
            <h1 className='text-gray-100 font-normal text-md truncate' title={title_long}>{title_long}</h1>
        
        <div className='flex items-center space-x-2 mt-2'>
            <div className='border border-orange-500 text-orange-600 flex items-center w-fit text-xs space-x-1 p-[3px] rounded-[4px]'>
                <AiTwotoneStar size={14}/>
                <span>
                   {rating}
                </span>
            </div>
                <span className='text-gray-400 text-xs'>{year}</span>

        </div>
            
        </div>
    </div>
  )
}

export default MoveCurd
