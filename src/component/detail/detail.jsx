import React, { useEffect, useState } from "react";
import "../../index.css";
import { Link, useParams } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Nav from "../nav/nav.jsx";

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
        <Nav />
        <div>
            <div className="md:grid md:grid-cols-2  md:mb-4  dark:bg-slate-900 pt-24 mb-16">
                <div className="flex justify-center ">
                    <img className="md:h-4/6 md:w-4/6 h-72 w-72 shadow-lg shadow-emerald-700" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} alt='loading'></img>
                </div>

                <div className="grid h-80 gap-3 justify-items-center md:justify-items-start">
                    <h2 className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent md:text-5xl text-4xl font-bold">{movieDetail ? movieDetail.original_title : ""}</h2>
                    
                    <div className="text-emerald-700 flex gap-4 h-9 w-fit justify-center md:justify-start">

                        {
                            movieDetail && movieDetail.genres
                                ?
                                movieDetail.genres.map(genre => (
                                    <div className=" pl-3 pr-3 text-white p-1 text-xl bg-slate-900 rounded-xl">{genre.name}</div>

                                ))
                                :
                                ""
                        }
                        

                    </div>
                    <div className="text-emerald-700 font-semibold text-2xl text-center md:text-start">"{movieDetail?movieDetail.tagline:""}"</div>

                    
                    <div><h3 className="text-emerald-700 text-2xl font-bold">About the Movie</h3></div>
                    <div className="flex gap-6 text-xl text-center md:text-start">

                        <div className="text-emerald-700 font-semibold">Release Date : {movieDetail ? movieDetail.release_date : ""}</div>
                        <div className="text-emerald-700 font-semibold">Budget: {movieDetail ? movieDetail.budget : ""}</div>
                        <div className="text-emerald-700 font-semibold">Ratings(out of 10) :{(movieDetail ? movieDetail.vote_average : "").toString().slice(0, 3)}</div>
                        
                    </div>
                    <h2 className="text-emerald-700 text-2xl font-bold">Quick Description</h2>
                        <div className="text-emerald-700 font-semibold text-xl text-center md:text-start">{movieDetail ? movieDetail.overview : ""}</div>
            

            <div>
                        <Link className="text-white  text-xl p-2  rounded-xl bg-slate-950 hover:bg-slate-900 md:mb-0 mb-2" to={movieDetail ? movieDetail.homepage : ""}>Watch Now <OpenInNewIcon /></Link>
                    </div>

                </div>
            </div>

            



        </div>
    </>

}
