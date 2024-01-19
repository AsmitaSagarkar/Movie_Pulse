

import { Link } from 'react-router-dom';
import "../../index.css";

const Card = ({movie}) => {

    

    return <>
            <div >
            <Link to={`/movie/${movie.id}`}>

                <div> 
                    <img className = "h-64 w-72 border-emerald-700 border-2 rounded-2xl shadow-lg shadow-emerald-700  "src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt='loading' ></img>
                    <div className='p-2'>
                        <div className='text-emerald-700 font-bold text-2xl'>{movie ? movie.original_title : ""}</div>
                        <div className='grid grid-cols-2'><div className='text-emerald-700 text-lg'>{movie ? movie.release_date : ""}</div>
                        <div className='text-emerald-700 text-right text-lg mr-5'>{(movie ? movie.vote_average : " ").toString().slice(0,3)}/10</div></div>
                         

                    <Link to={`/movie/${movie.id}`} className='text-emerald-700 font-bold text-lg'>Read More</Link>
                    </div>
                </div>

            </Link>
        </div>
           

        </>
    


}
export default Card;