import { useEffect, useState } from "react";
import MoveCurd from "./MovieCurd"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner  from 'react-spinkit';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function MoveList({title="movies"}) {
    const [movies,setMovies] = useState([]);
    const getMoves = async () => {
        const responses = await fetch("https://yts.mx/api/v2/list_movies.json").then(res =>res.json())
        setMovies(responses.data.movies);    
    }

    useEffect(() => {
        getMoves();
    
      
    }, [])

    
  return (

    
    <div className="my-8">
        <h1 className="text-gray-100 text-3xl font-mono">{title} </h1>

        <div className="flex justify-center items-center w-full">
        <Spinner name="wave" color="red"/>
        </div>
        
        <div>

      <Carousel responsive={responsive}>

          {movies?.map(movie => (
             <MoveCurd movie={movie} {...movie} key={movie?.id}/>)
           )}
                
      </Carousel>

         
            
        </div>
    </div>
  )
}

export default MoveList