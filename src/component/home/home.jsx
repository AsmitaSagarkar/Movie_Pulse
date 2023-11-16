import { useEffect, useState } from "react";
// import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "../../index.css";
import Movie from "../movie/movie";
export default function Home() {

    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b20d18a891030a59756d2671848d1505&language=en-US")
            .then(res => res.json()).then(data => setPopularMovies(data.results));
    }, [])
    return (
        <>
            <div className="relative">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={4}
                    infiniteLoop={true}
                    showStatus={false}
                    stopOnHover={true}
                >
                    {popularMovies.map(movie => (
                        <Link to={`/movies/${movie.id}`}>
                            <div className="w-full mt-12 ">
                                <img className="md:h-screen h-96 opacity-50" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movieposter"></img>
                            </div>
                            <div className="md:absolute md:bottom-24 flex flex-col text-left  md:ml-14 md:mr-14 text-amber-50 mb-12 md:mb-0 mt-12">
                                <div className="md:text-5xl text-2xl font-bold">{movie ? movie.original_title : ""}</div>
                                <div className="md:text-2xl text-lg  mt-2 ">{movie ? movie.release_date : ""}</div>
                                <div className="md:text-2xl text-lg  mt-2">
                                    {movie ? movie.vote_average : " "}/10
                                </div>

                                <div className="md:text-2xl text-lg italic mt-2">{movie ? movie.overview :""}</div>


                            </div>

                        </Link>


                    ))}
                </Carousel>
            </div>
            <Movie />
        </>
    )

}