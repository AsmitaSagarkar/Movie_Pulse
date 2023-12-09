import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "./logo.png";
import { Link } from "react-router-dom";

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
    function addActive(){
        document.documentElement.classList.add("active");
    }
    function removeActive(){
        document.documentElement.classList.remove("active");
    }

    

    


    return (

        <nav className="md:grid md:justify-between md:grid-cols-3 md:mt-7 gap-20 flex flex-row">
            <div className="md:flex md:justify-center md:text-2xl font-fontfam font-bold md:mr-5">
                <img className="w-36 h-28 rounded-tl-2xl rounded-br-2xl ml-3 mt-6 md:m-0" src={Logo} alt='loading'/>
            </div>

            <div className="md:flex md:justify-around md:items-center md:static absolute right-3 top-24 z-10 gap-3 ml-5 mr-5 hidden active:flex">

                <div><Link to="/" className="text-nav dark:text-white md:text-2xl font-fontfam font-bold sm:text-xl">Home</Link></div>
                <div><Link className="text-nav dark:text-white md:text-2xl font-fontfam font-bold sm:text-xl" to="/movies/popular">Popular</Link></div>
                <div><Link className="text-nav dark:text-white md:text-2xl font-fontfam font-bold sm:text-xl" to="/movies/top_rated">Trending</Link></div>
                <div><Link className="text-nav dark:text-white md:text-2xl font-fontfam sm:text-xl font-bold" to="/movies/upcoming">Upcoming</Link></div>
            </div>



            <div className="md:flex md:items-center md:justify-center ">
                <div className="md:flex md:items-center md:justify-center md:gap-3 md:static absolute right-3 top-52 z-10 hidden Active:flex">
                    <div><Link to="#" className="text-nav dark:text-white md:text-3xl font-fontfam font-bold "><AiOutlineInstagram /></Link></div>
                    <div><Link to="#" className="text-nav dark:text-white md:text-3xl font-fontfam font-bold"><AiOutlineFacebook /></Link></div>
                    <div><Link to="#" className="text-nav dark:text-white md:text-3xl font-fontfam font-bold"><AiOutlineTwitter /></Link></div>

                    <Link><div className="text-nav dark:text-white md:text-3xl font-fontfam font-bold flex items-center">{showIcons ? 
                        <LightModeIcon onClick={() => { handleToggle(); removeDark(); }}  />
                        : 
                        <DarkModeIcon onClick={() => { handleToggle(); addDark(); }}  />
                      }
                </div></Link>
                    
                    
                </div>
                    


                <div className="md:hidden absolute right-3 top-4 z-10">
                    <Link to="#" onClick={handleToggle}>
                    <div className="text-nav dark:text-white text-5xl md:m-0 mt-8">
                    {isToggle?<CloseIcon  onClick={()=>{toggle(); removeActive(); }} className="mb-5 text-5xl"/> : <CiMenuFries onClick={()=>{toggle();addActive();}}/>}</div></Link>
                </div>


            </div>

        </nav>

    )
}