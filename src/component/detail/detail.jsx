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
            <div className="grid grid-cols-2 mt-10">
                <div className="flex justify-center">
                    <img className="h-4/6 w-4/6 " src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} alt='loading'></img>
                </div>

                <div className="grid h-96">
                    <h2 className="text-neutral-100 text-5xl font-bold">{movieDetail ? movieDetail.original_title : ""}</h2>
                    
                    <div className="text-neutral-100 grid grid-cols-3">

                        {
                            movieDetail && movieDetail.genres
                                ?
                                movieDetail.genres.map(genre => (
                                    <span className="text-neutral-100 bg-slate-900  p-1 rounded-xl">{genre.name}</span>

                                ))
                                :
                                ""
                        }
                        

                    </div>
                    <div className="text-neutral-100 text-2xl">"{movieDetail?movieDetail.tagline:""}"</div>

                    

                    <div>

                        <div className="text-neutral-100">{movieDetail ? movieDetail.release_date : ""}</div>
                        <div className="text-neutral-100">{movieDetail ? movieDetail.budget : ""}</div>
                        <div className="text-neutral-100">{(movieDetail ? movieDetail.vote_average : "").toString().slice(0, 3)}/10</div>
                        <div className="text-neutral-100">{movieDetail ? movieDetail.overview : ""}</div>
                    </div>
            

            <div>
                        <Link className="text-neutral-100" to={movieDetail ? movieDetail.homepage : ""}>Watch Now</Link>
                    </div>

                </div>
            </div>

            



        </div>
    </>

}
