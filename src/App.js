import Nav from "./component/nav/nav";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/home/home";
// import "../public/style.css";
import "./index.css";
import Movie from "./component/movie/movie";
import Detail from "./component/detail/detail";
import Particlebg from "./particle";

export default function Main(){
    return(
        <div>

        <Particlebg />
        <Router>
        <Nav />
        <Routes>
        <Route path="/*" element = {<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
        <Route path="movies/:type" element={<Movie />}></Route>
        
        </Routes>
        </Router>
        </div>
        
        
        
    )
}
