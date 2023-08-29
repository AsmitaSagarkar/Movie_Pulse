import Logo from "./logo.png";
import Menu from "./menu.png";
import Close from "./close.png";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

export default function Nav() {

    const [navBarOpen, isNavBarOpen] = useState(false);
    const toggleNavBar = () => {
        isNavBarOpen(!navBarOpen);
    };


    return (
        <nav className="nav">

            <img src={Logo} className="image" alt="Logo" />

            <div className="items">
                <div className={`list ${navBarOpen ? 'open' : ''}`}>
                    <div className="toggle" onClick={toggleNavBar}><img className="toggleicon" src={navBarOpen ? Menu : Close} /></div>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/movies/popular">Popular</Link>
                    <Link className="link" to="/movies/topRated">Top Rated</Link>
                    <Link className="link" to="/movies/upcoming">Upcoming</Link>
                    <div className="navbarButton">
                        <img className="icons menu" src={Menu} />
                        <img className="icons close" src={Close} />
                    </div>
                </div>
            </div>
        </nav>
    )
}