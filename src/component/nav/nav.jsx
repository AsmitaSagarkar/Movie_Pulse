import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from "react-router-dom";

import "../../index.css";
import { useState } from "react";
// import { Menu } from '@mui/material';


export default function Nav() {

    const [isOpen ,setIsOpen] = useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }

    const [isDark,setIsDark] = useState(true);
    function darkMode(){
        setIsDark(!isDark);

    }
    function addDark(){
        document.documentElement.classList.add('dark');

    }
    function removeDark(){
        document.documentElement.classList.remove('dark');
        
    }
    return (

        <nav className='grid lg:grid-cols-3 lg:items-center text-nav dark:text-neutral-100 grid-cols-2 '>
            <div className='flex ml-3 lg:ml-12 my-5'><h1 className='text-nav dark:text-neutral-100 font-fontfam font-bold lg:text-4xl text-2xl hover:underline hover:cursor-pointer hover:animate-pulse'>MOVIE PULSE</h1></div>
            <div className='lg:flex lg:justify-around text-2xl font-fontfam font-bold hidden my-5'>
                <Link to="/" className='hover:underline'>Home</Link>
                <Link to="/movies/popular"className='hover:underline'>Popular</Link>
                <Link to="/movies/top_rated"className='hover:underline'>Trending</Link>
                <Link to="/movies/upcoming"className='hover:underline'>Upcoming</Link>
  

            </div>
            
            <div className='lg:flex lg:flex-row lg:justify-center lg:gap-12 font-fontfam font-bold hidden my-5'>
            <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
            <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
            <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
            <div className='text-2xl hover:cursor-pointer' onClick={darkMode}>{isDark ? <DarkModeIcon onClick={addDark} /> : <LightModeIcon onClick={removeDark}/>}</div>

            </div>

            <button className='lg:hidden font-fontfam font-bold text-4xl flex   mr-3 relative my-5 justify-end' onClick={toggle}> {isOpen? <CloseIcon /> : <CiMenuFries />}</button>
            {isOpen&&(
                <div className='flex flex-col items-center z-10 absolute top-20   bg-slate-950 dark:bg-slate-50 dark:bg-opacity-30  w-screen  p-3 gap-2 font-bold'>
                <Link to="/" className='text-neutral-200 dark:text-nav  hover:cursor-pointer font-bold '>Home</Link>
                <Link to="/movies/popular"  className='text-neutral-200 dark:text-nav  hover:cursor-pointer font-bold'>Popular</Link>
                <Link to="/movies/top_rated" className='text-neutral-200  dark:text-nav hover:cursor-pointer font-bold'>Trending</Link>
                <Link to="/movies/upcoming" className='text-neutral-200  dark:text-nav hover:cursor-pointer font-bold'>Upcoming</Link>
                <div className='text-neutral-200   flex gap-2 hover:cursor-pointer font-bold dark:text-nav'>
                <div className='text-neutral-200 dark:text-nav  hover:cursor-pointer font-bold'><AiOutlineInstagram /></div>
                <div className='text-neutral-200 dark:text-nav hover:cursor-pointer font-bold'><AiOutlineFacebook /></div>
                <div className='text-neutral-200 dark:text-nav hover:cursor-pointer font-bold'><AiOutlineTwitter /></div></div>
                <div className='text-neutral-200 dark:text-nav  hover:cursor-pointer font-bold'onClick={darkMode}>{isDark ? <DarkModeIcon onClick={addDark} /> : <LightModeIcon onClick={removeDark}/>}</div>
                </div>



            
                )}


        </nav>
        
        
    )
}