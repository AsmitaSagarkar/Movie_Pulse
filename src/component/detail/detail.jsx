import React, { useEffect, useState } from "react";
import "../../index.css";
import { Link, useParams } from "react-router-dom";



export default function Detail() {
    const [movieDetail, setMovieDetail] = useState()
    const { id } = useParams()




    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b20d18a891030a59756d2671848d1505&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieDetail(data))
        // eslint-disable-next-line 
    }, [])


    return <>
        <div>
            <h2 className="text-neutral-50">{movieDetail ? movieDetail.original_title : ""}</h2>
            <div>
                <img className="h-64 w-72" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} alt='loading'></img>
            </div>
            <div>
                <Link className="text-neutral-100" to={movieDetail ? movieDetail.homepage : ""}>Watch Now</Link>
            </div>
            <div>
                 <div className="text-neutral-100">{movieDetail ? movieDetail.overview : ""}</div>
                 <div className="text-neutral-100">{movieDetail ? movieDetail.release_date : ""}</div>
                 <div className="text-neutral-100">{movieDetail ? movieDetail.budget : ""}</div>
                 <div className="text-neutral-100">{(movieDetail ? movieDetail.vote_average : "").toString().slice(0,3)}/10</div>
            </div>   

            <div className="text-neutral-100">

            console.log(movieDetail.genres);
            
            </div>

        </div>
    </>

}
