import Logo from "./logo.png";

import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from "react-router-dom";
// import "./nav.css";
import "../../index.css";
import { useState } from "react";

export default function Nav() {
    const [showIcons, setShowIcons] = useState(false);
    function handleToggle() {
        setShowIcons(!showIcons);

    }
    function addDark(){
        document.documentElement.classList.add("dark");
    }
    function removeDark(){
        document.documentElement.classList.remove("dark");
    }
    const[isToggle,setIsToggle]=useState(false);
    function toggle(){
        setIsToggle(!isToggle);
    }

    

    


    return (

        <nav className="grid md:justify-between md:grid-cols-3 mt-7 dark:bg-slate-900">
            <div className="md:flex md:justify-center">
                <img src={Logo} className="image" alt="Logo" />
            </div>

            <div className="md:flex md:justify-around md:items-center md:static absolute right-3 top-24 z-10 ">

                <div><Link to="/" className="text-nav md:text-2xl font-fontfam font-bold">Home</Link></div>
                <div><Link className="text-nav md:text-2xl font-fontfam font-bold" to="/movies/popular">Popular</Link></div>
                <div><Link className="text-nav md:text-2xl font-fontfam font-bold" to="/movies/top_rated">Top Rated</Link></div>
                <div><Link className="text-nav md:text-2xl font-fontfam font-bold" to="/movies/upcoming">Upcoming</Link></div>
            </div>



            <div className="md:flex md:items-center md:justify-center">
                <div className="flex md:items-center md:justify-center md:gap-3 md:static absolute right-3 top-52 z-10 ">
                    <div><Link to="#" className="text-nav md:text-3xl font-fontfam font-bold "><AiOutlineInstagram /></Link></div>
                    <div><Link to="#" className="text-nav md:text-3xl font-fontfam font-bold"><AiOutlineFacebook /></Link></div>
                    <div><Link to="#" className="text-nav md:text-3xl font-fontfam font-bold"><AiOutlineTwitter /></Link></div>

                    <Link><div className="text-nav md:text-3xl font-fontfam font-bold flex items-center">{showIcons ? 
                        <DarkModeIcon onClick={() => { handleToggle(); addDark(); }}  />
                       : 
                        <LightModeIcon onClick={() => { handleToggle(); removeDark(); }}  />
                      }
                </div></Link>
                    
                    
                </div>
                    


                <div className="md:hidden absolute right-3 top-8 z-10">
                    <Link to="#" onClick={handleToggle}>
                    <div className="text-blue-500 text-3xl">{isToggle?<CloseIcon onClick={toggle}/> : <CiMenuFries onClick={toggle}/>}</div></Link>
                </div>


            </div>

        </nav>

    )
}