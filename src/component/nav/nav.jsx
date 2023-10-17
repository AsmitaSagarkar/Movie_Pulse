import Logo from "./logo.png";
// import Menu from "./menu.png";
// import Close from "./close.png";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';

import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";


export default function Nav() {
    const [showIcons,setShowIcons] =useState(false);
    function toggle(){
        setShowIcons(!showIcons);

    }

    

    return (
        <nav className="nav">
            <div className="left">
                <img src={Logo} className="image" alt="Logo" />
            </div>

            <div className="mid">
                <div className="link">
                    <Link className="tag" to="/">Home</Link>
                    <Link className="tag" to="/movies/popular">Popular</Link>
                    <Link className="tag" to="/movies/topRated">Top Rated</Link>
                    <Link className="tag" to="/movies/upcoming">Upcoming</Link></div>

            </div>

            <div className="right">
                <div className="social-media">
                    <Link to="#" className="icons instagram"><AiOutlineInstagram /></Link>
                    <Link to="#" className="icons"><AiOutlineFacebook /></Link>
                    <Link to="#" className="icons"><AiOutlineTwitter /></Link>
                </div>

                <div className="menu">
                    <Link to="#" onClick={toggle}><CiMenuFries className="menufries" /></Link>
                </div>


            </div>

        </nav>
    )
}