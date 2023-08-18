import Logo from "./logo.png";
import {Link} from "react-router-dom";
import "./nav.css";

export default function Nav(){

    return(
    <nav className="nav">
    
    <img src= {Logo} className="image" alt = "Logo"/>

    <div className="items">
    <div className="list">
    <Link className="link" to="/">Home</Link>
    <Link className="link"to="/movies/popular">Popular</Link>
    <Link className="link"to="/movies/topRated">Top Rated</Link>
    <Link className="link"to="/movies/upcoming">Upcoming</Link>
    </div>
    </div>
    </nav>
    )
}