import Logo from "./logo.png";
// import Menu from "./menu.png";
// import Close from "./close.png";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';

import { Link } from "react-router-dom";
// import "./nav.css";
import "../../index.css";
import { useState } from "react";

export default function Nav() {
    const [showIcons,setShowIcons] =useState(false);
    function toggle(){
        setShowIcons(!showIcons);

    }

    

    return (
        <div className="bg-black m-0 p-0 box-border overflow-hidden">
        <nav className="grid justify-between grid-cols-3">
            <div className="flex justify-center">
                <img src={Logo} className="image" alt="Logo" />
            </div>

            <div className="grid grid-col-4">
                <div className="">
                    <Link  to="/" className = "text-neutral-100">Home</Link>
                    <Link className="text-neutral-100"to="/movies/popular">Popular</Link>
                    <Link className="text-neutral-100" to="/movies/topRated">Top Rated</Link>
                    <Link className="text-neutral-100" to="/movies/upcoming">Upcoming</Link></div>

            </div>

            <div className="grid">
                <div className="grid align-middle justify-around place-items-center">
                    <Link to="#" className="text-neutral-100 text-3xl "><AiOutlineInstagram /></Link>
                    <Link to="#" className="text-neutral-100 text-3xl"><AiOutlineFacebook /></Link>
                    <Link to="#" className="text-neutral-100 text-3xl"><AiOutlineTwitter /></Link>
                </div>

                <div className="menu">
                    <Link to="#" onClick={toggle}><CiMenuFries className="menufries" /></Link>
                </div>


            </div>

        </nav>
        </div>
    )
}