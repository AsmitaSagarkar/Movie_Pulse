import React, { useEffect } from 'react';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import "../../index.css";

const Card = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

    }, [])

    return <>
    
            {
                
                isLoading ?
            <div><SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration={2} />
            </SkeletonTheme></div>
            :
            
            <div >
            <Link to={`/movie/${movie.id}`}>

                <div> 
                    <img className = "h-64 w-72 border-nav dark:border-cyan-300 border-2 rounded-2xl shadow-lg shadow-nav dark:shadow-cyan-200 "src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt='loading' ></img>
                    <div className='p-2'>
                        <div className='text-nav dark:text-cyan-300 font-bold text-lg'>{movie ? movie.original_title : ""}</div>
                        <div className='grid grid-cols-2'><div className='text-nav dark:text-cyan-300'>{movie ? movie.release_date : ""}</div>
                        <div className='text-nav text-right dark:text-cyan-300'>{(movie ? movie.vote_average : " ").toString().slice(0,3)}/10</div></div>
                         

                    <Link to={`/movie/${movie.id}`} className='text-nav font-bold dark:text-cyan-300'>Read More</Link>
                    </div>
                </div>

            </Link>
        </div>
        }
            

        </>
    


}
export default Card;