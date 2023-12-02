import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import LiveTvIcon from '@mui/icons-material/LiveTv';
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

        <nav className="grid md:justify-between md:grid-cols-3 md:mt-7 dark:bg-slate-900 gap-20">
            <div className="md:flex md:justify-center md:text-2xl font-fontfam font-bold md:mr-5">
                 <h1 className=" text-white border-4 border-white pb-2 pl-2 pr-2 rounded-tl-2xl bg-nav rounded-br-2xl md:hover:bg-white md:hover:text-nav hover:cursor-pointer md:hover:border-nav">Movie Pulse <span className="text-4xl"><LiveTvIcon /></span></h1>
            </div>

            <div className="md:flex md:justify-around md:items-center md:static absolute right-3 top-24 z-10 gap-3 ml-5 mr-5">

                <div><Link to="/" className="text-nav md:text-2xl font-fontfam font-bold sm:text-xl">Home</Link></div>
                <div><Link className="text-nav md:text-2xl font-fontfam font-bold sm:text-xl" to="/movies/popular">Popular</Link></div>
                <div><Link className="text-nav md:text-2xl font-fontfam font-bold sm:text-xl" to="/movies/top_rated">Trending</Link></div>
                <div><Link className="text-nav md:text-2xl font-fontfam sm:text-xl font-bold" to="/movies/upcoming">Upcoming</Link></div>
            </div>



            <div className="md:flex md:items-center md:justify-center">
                <div className="flex md:items-center md:justify-center md:gap-3 md:static absolute right-3 top-52 z-10 ">
                    <div><Link to="#" className="text-nav md:text-3xl font-fontfam font-bold "><AiOutlineInstagram /></Link></div>
                    <div><Link to="#" className="text-nav md:text-3xl font-fontfam font-bold"><AiOutlineFacebook /></Link></div>
                    <div><Link to="#" className="text-nav md:text-3xl font-fontfam font-bold"><AiOutlineTwitter /></Link></div>

                    <Link><div className="text-nav md:text-3xl font-fontfam font-bold flex items-center">{showIcons ? 
                        <LightModeIcon onClick={() => { handleToggle(); removeDark(); }}  />
                        : 
                        <DarkModeIcon onClick={() => { handleToggle(); addDark(); }}  />
                      }
                </div></Link>
                    
                    
                </div>
                    


                <div className="md:hidden absolute right-3 top-4 z-10">
                    <Link to="#" onClick={handleToggle}>
                    <div className="text-white text-3xl">{isToggle?<CloseIcon 
                        onClick={toggle} className="mb-5 text-3xl"/> : <CiMenuFries onClick={toggle}/>}</div></Link>
                </div>


            </div>

        </nav>

    )
}