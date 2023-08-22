import { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
export default function Home() {

    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b20d18a891030a59756d2671848d1505&language=en-US")
            .then(res => res.json()).then(data => setPopularMovies(data.results));
    }, [])
    return (
        <>
            <div className="poster">
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
                            <div className="posterimage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movieposter"></img>
                            </div>
                            <div className="detail">
                                <div className="title">{movie ? movie.original_title : ""}</div>
                                <div className="releasedate">{movie ? movie.release_date : ""}</div>
                                <div className="ratings">
                                    {movie ? movie.vote_average : ""}<i class="fa-solid fa-star"></i>{" "}
                                </div>

                                <div className="description">{movie ? movie.overview :""}</div>


                            </div>

                        </Link>


                    ))}
                </Carousel>
            </div>
        </>
    )

}