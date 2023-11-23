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

                <div className="grid h-80 gap-3">
                    <h2 className="text-neutral-100 text-5xl font-bold">{movieDetail ? movieDetail.original_title : ""}</h2>
                    
                    <div className="text-neutral-100 flex gap-4 h-9 w-12">

                        {
                            movieDetail && movieDetail.genres
                                ?
                                movieDetail.genres.map(genre => (
                                    <div className=" pl-3 pr-3 text-neutral-100 p-1 text-xl bg-slate-900 rounded-xl">{genre.name}</div>

                                ))
                                :
                                ""
                        }
                        

                    </div>
                    <div className="text-neutral-100 text-2xl">"{movieDetail?movieDetail.tagline:""}"</div>

                    
                    <div><h3 className="text-neutral-100 text-2xl font-bold">About the Movie</h3></div>
                    <div className="flex gap-6 text-xl">

                        <div className="text-neutral-100">Release Date : {movieDetail ? movieDetail.release_date : ""}</div>
                        <div className="text-neutral-100">Budget: {movieDetail ? movieDetail.budget : ""}</div>
                        <div className="text-neutral-100">Ratings(out of 10) :{(movieDetail ? movieDetail.vote_average : "").toString().slice(0, 3)}</div>
                        
                    </div>
                    <h2 className="text-neutral-100 text-2xl font-bold">Quick Description</h2>
                        <div className="text-neutral-100 text-xl">{movieDetail ? movieDetail.overview : ""}</div>
            

            <div>
                        <Link className="text-neutral-100" to={movieDetail ? movieDetail.homepage : ""}>Watch Now</Link>
                    </div>

                </div>
            </div>

            



        </div>
    </>

}
