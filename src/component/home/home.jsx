import { useEffect } from "react";
import "./home.css";
export default function Home(){

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b20d18a891030a59756d2671848d1505&language=en-US")
        .then(res => res.json()).then(data => console.log(data.results));
    },[])
    return (
        <>
        <h1>hello</h1>
        </>
    )

}