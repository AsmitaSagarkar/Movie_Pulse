
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./component/home/home";


// import "../public/style.css";
import "./index.css";
import Movie from "./component/movie/movie";
import Detail from "./component/detail/detail";
import Main from "./component/main/main";


export default function App(){
    
    return(
        <div>

        <Router>
        
       
        
        <Routes>
        <Route path="/*" element = {<Main />}></Route>
        <Route path="/home" element = {<Home />}></Route>
        <Route path="movie/:id" element={<Detail />}></Route>
        <Route path="movies/:type" element={<Movie />}></Route>
        
        </Routes>
        </Router>
        
        </div>
        
        
        
        
    )
}
