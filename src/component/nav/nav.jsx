import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "./logo.png";
import { Link } from "react-router-dom";

import "../../index.css";
import { useState } from "react";
// import { Menu } from '@mui/material';


export default function Nav() {

    const [isOpen ,setIsOpen] = useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }
    return (

        <nav className='grid lg:grid-cols-3 lg:items-center text-nav grid-cols-2'>
            <div className='flex justify-center mt-5'><img src={Logo} alt='Loading...' className='w-52 h-40' /></div>
            <div className='lg:flex lg:justify-around text-2xl font-fontfam font-bold hidden'>
                <Link to="/">Home</Link>
                <Link to="/movies/popular">Popular</Link>
                <Link to="/movies/top_rated">Trending</Link>
                <Link to="/movies/upcoming">Upcoming</Link>


            </div>
            
            <div className='lg:flex lg:flex-row lg:justify-center lg:gap-12 font-fontfam font-bold hidden'>
            <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
            <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
            <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
            <div className='text-2xl hover:cursor-pointer'><LightModeIcon  /></div>

            </div>

            <button className='lg:hidden font-fontfam font-bold text-3xl flex items-end' onClick={toggle}> {isOpen? <CloseIcon /> : <CiMenuFries />}</button>


        </nav>
    )
}