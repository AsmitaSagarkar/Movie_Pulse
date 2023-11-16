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
    const [showIcons, setShowIcons] = useState(false);
    function toggle() {
        setShowIcons(!showIcons);

    }



    return (

        <nav className="grid md:justify-between md:grid-cols-3 mt-7">
            <div className="md:flex md:justify-center">
                <img src={Logo} className="image" alt="Logo" />
            </div>

            <div className="md:flex md:justify-around md:items-center md:static absolute right-3 top-24 z-10 ">

                <div><Link to="/" className="text-neutral-100 md:text-xl">Home</Link></div>
                <div><Link className="text-neutral-100 md:text-xl" to="/movies/popular">Popular</Link></div>
                <div><Link className="text-neutral-100 md:text-xl" to="/movies/top_rated">Top Rated</Link></div>
                <div><Link className="text-neutral-100 md:text-xl" to="/movies/upcoming">Upcoming</Link></div>
            </div>



            <div className="md:flex md:items-center md:justify-center">
                <div className="flex md:items-center md:justify-center md:gap-3 md:static absolute right-3 top-52 z-10 ">
                    <div><Link to="#" className="text-neutral-100 text-3xl "><AiOutlineInstagram /></Link></div>
                    <div><Link to="#" className="text-neutral-100 text-3xl"><AiOutlineFacebook /></Link></div>
                    <div><Link to="#" className="text-neutral-100 text-3xl"><AiOutlineTwitter /></Link></div></div>


                <div className="md:hidden absolute right-3 top-8 z-10">
                    <Link to="#" onClick={toggle}><CiMenuFries className="text-neutral-100 text-3xl" /></Link>
                </div>


            </div>

        </nav>

    )
}