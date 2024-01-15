import Nav from "./component/nav/nav";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/home/home";
// import "../public/style.css";
import "./index.css";
import Movie from "./component/movie/movie";
import Detail from "./component/detail/detail";
import { useAuth0 } from "@auth0/auth0-react";

export default function Main(){
    const { user ,isAuthenticated } = useAuth0();
    return(
        <div style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} className="dark:bg-darkBg" >
        



        
        <Router>
        <Nav />
        <div>
        
        {
            isAuthenticated ? 
            <div className="text-xl md:text-2xl mt-[20px] text-nav dark:text-cyan-400 text-center font-bold">Welcome to Movie Pulse {user.name}! Get comfy, grab your virtual popcorn, and let the movie magic begin. Enjoy the show!"</div>:
            <div className="text-xl font-bold md:text-2xl ml-10 mt-[20px] text-nav dark:text-cyan-400 ">Welcome to Movie Pulse !</div>
        }
        </div>
        <Routes>
        <Route path="/*" element = {<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
        <Route path="movies/:type" element={<Movie />}></Route>
        
        </Routes>
        </Router>
        
        </div>
        
        
        
    )
}
