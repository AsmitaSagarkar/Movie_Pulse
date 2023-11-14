import React, { useEffect, useState } from "react";
import Card from "../card/card";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b20d18a891030a59756d2671848d1505&language=en-US`)
            .then(res => res.json()).then(data => setMovie(data.results));
    }

    return (
        <>

            <div>
                <h2>{(type ? type : "POPULAR").toUpperCase}</h2>
                <div>{movie.map(movie=>
                    (
                        <Card movie={movie}/>
                    )
                    )
                }
                </div>
            </div>
        </>
    )
}
export default Movie;