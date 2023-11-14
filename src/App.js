import Nav from "./component/nav/nav";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/home/home";
// import "../public/style.css";
import "./index.css";
import Movie from "./component/movie/movie";

export default function Main(){
    return(
        <div>

        
        <Router>
        <Nav />
        <Routes>
        <Route index element = {<Home />}></Route>
        <Route path="movie/:id" element={<h1>Its the id section</h1>}></Route>
        <Route path="movies/:type" element={<Movie />}></Route>
        <Route path="/*" element={<h1>error</h1>}></Route>
        </Routes>
        </Router>
        </div>
        
        
        
    )
}