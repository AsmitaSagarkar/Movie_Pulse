import React, { useEffect } from 'react';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import "../../index.css";

const Card = ({ movie }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

    }, [])

    return <>
    
            {isLoading ?
            <div><SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration={2} />
            </SkeletonTheme></div>
            :
            

            <Link to={`movie/${movie.id}`}>

                <div> 
                    <img className = "h-9 w-6"src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt='loading'></img>
                    <div>
                        <div className='text-neutral-200'>{movie ? movie.original_title : ""}</div>
                        <div className='text-neutral-200'>{movie ? movie.release_date : ""}</div>
                        <div className='text-neutral-200'>{movie ? movie.vote_average : " "}/10</div>
                        <div className='text-neutral-200'>{movie ? movie.overview : ""}</div>
                    </div>
                </div>

            </Link>}
            

        </>
    


}
export default Card;