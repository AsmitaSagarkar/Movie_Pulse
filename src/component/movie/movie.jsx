import React, { useEffect, useState } from "react";
import Card from "../card/card";
import "../../index.css"
import { useParams } from "react-router-dom";
import Nav from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";



const Movie = () => {
    const [movielist, setMovie] = useState([]);
    const {type} = useParams();
    const [isloading,setIsLoading] = useState(true);
    function getData()  {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b20d18a891030a59756d2671848d1505&language=en-US`)
            .then(res => res.json()).then(data => {setMovie(data.results);setIsLoading(false)})
            
    }
    
    
    useEffect(() => {
        getData();
        console.log(movielist);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type]);
    
    if(isloading){
       return <h2 className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent text-2xl font-bold  md:ml-12 m-0 ml-4 mb-5 mt-5 h-full w-full flex justify-center text-center align-middle items-center">Hey,We are searching the best movies for you !</h2>
    }
    

   
    return (

        <> 
           
            

            
            <Nav />
            
            <div className="mt-28">
            <h2 className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent text-2xl font-bold  md:ml-12 m-0 ml-4 mb-5 mt-5">WELCOME TO THE {(type ? type : "POPULAR").toUpperCase().replace(/_/g,' ')} HUB! DIVE IN.</h2>
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