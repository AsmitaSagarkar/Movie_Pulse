import { useEffect, useState } from "react";
import Nav from "../nav/nav.jsx";
// import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "../../index.css";
import Popular from "../popular/popular";

import Footer from "../footer/footer.jsx";


export default function Home() {
    


    const [popularMovies, setPopularMovies] = useState([]);
    const [isloading,setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b20d18a891030a59756d2671848d1505&language=en-US")
            .then(res => res.json()).then(data => {setPopularMovies(data.results);setIsLoading(false)});
    }, [])

    if(isloading){
        return <h2 className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent text-2xl font-bold  md:ml-12 m-0 ml-4 mb-5 mt-5 h-full w-full flex justify-center text-center align-middle items-center relative top-[50%]">Hey,We are searching the best movies for you !</h2>
     }
     
    return (
        <>
        <Nav />
        
            <div className="relative">
                <Carousel
                    axis="horizontal"
                    showThumbs={false}
                    autoPlay={false}
                    transitionTime={4}
                    infiniteLoop={true}
                    showStatus={false}
                    stopOnHover={true}
                >
                    {popularMovies.map(movie => (
                        <Link to={`/movie/${movie.id}`}>
                            <div className="md:w-full mt-12">
                                <img className="md:h-screen h-96 dark:opacity-70 opacity-80 brightness-50 z-10" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movieposter"></img>
                            </div>
                            <div className="absolute md:bottom-24  text-left  md:ml-14 md:mr-14  mb-12 md:mb-0 mt-12 text-black dark:text-white font-bold z-30 bottom-0 ml-7">
                                <div className="md:text-5xl text-2xl ">{movie ? movie.original_title : ""}</div>
                                <div className="md:text-2xl text-lg  md:mt-2 ">{movie ? movie.release_date : ""}</div>
                                <div className="md:text-2xl text-lg  md:mt-2">
                                    {movie ? movie.vote_average : " "}/10
                                </div>

                                <div className="md:text-2xl text-lg italic mt-2 hidden md:block">{movie ? movie.overview :""}</div>


                            </div>

                        </Link>


                    ))}
                </Carousel>
            </div>
            <Popular />
            <Footer />
            
        </>
    )

}