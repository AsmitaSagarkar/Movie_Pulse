import React, { useEffect, useState } from "react";
import "../../index.css";
import { useParams } from "react-router-dom";



export default function Detail(){
    const [movieDetail,setMovieDetail] = useState()
    const { id } = useParams()

    

    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b20d18a891030a59756d2671848d1505&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
        // eslint-disable-next-line 
    }, [])


    return<>
    <h2 className="text-neutral-50">{movieDetail?movieDetail.original_title:""}</h2>
    </>

}
