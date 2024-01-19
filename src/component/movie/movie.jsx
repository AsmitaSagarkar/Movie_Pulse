import React, { useEffect, useState } from "react";
import Card from "../card/card";
import "../../index.css"
import { useParams } from "react-router-dom";
import Search from "../search/search";
import Footer from "../footer/footer.jsx";
import Nav from "../nav/nav.jsx";

const Movie = () => {
    const [movielist, setMovie] = useState([]);
    const {type} = useParams();
    function getData()  {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b20d18a891030a59756d2671848d1505&language=en-US`)
            .then(res => res.json()).then(data => setMovie(data.results))
            
    }
    
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);
    

    

   
    return (

        <> 
           <Nav />
            
            <Search prop={type}  />

            

            <div>
            <h2 className="text-nav dark:text-white text-2xl font-bold mt-2 md:ml-12 m-0 ml-4 mb-2">{(type ? type : "POPULAR").toUpperCase().replace(/_/g,' ')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-12 md:ml-12 md:mr-12 gap-3 mr-2 ml-2">
                
                {
                    movielist.map(movie=>
                    (
                        <Card movie={movie}/>
                    )
                    )
                }
                </div>
            
            </div>
            <Footer />
           
        </>
    )
}
export default Movie;