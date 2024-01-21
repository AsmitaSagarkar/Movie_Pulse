
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "../../index.css";
import { useState } from "react";
// import { Menu } from '@mui/material';


export default function Nav() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const [showLogOut, setShowLogOut] = useState(false);


    const [isOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen(!isOpen);
    }
    function showDiv() {
        setShowLogOut(!showLogOut);
    }

    const [isDark, setIsDark] = useState(true);
    function darkMode() {
        setIsDark(!isDark);

    }
    function addDark() {
        document.documentElement.classList.add('dark');

    }
    function removeDark() {
        document.documentElement.classList.remove('dark');

    }
    return (

        <nav className=' grid lg:grid-cols-3 lg:items-center grid-cols-2 border-b-2  shadow-shade fixed w-full bg-white dark:bg-darkBg  z-50 top-0 '>
            <div className='flex ml-3 lg:ml-12 my-5'><Link to="/" className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent  font-fontfam font-bold lg:text-4xl text-2xl hover:underline hover:cursor-pointer hover:animate-pulse dark:text-white'>MOVIE PULSE</Link></div>
            <div className='lg:flex lg:justify-around text-2xl font-fontfam font-bold hidden my-5'>
                <Link to="/home" className='hover:underline bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent dark:text-white'>Home</Link>
                <Link to="/movies/popular " className='hover:underline bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent dark:text-white'>Popular</Link>
                <Link to="/movies/top_rated" className='hover:underline bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent dark:text-white'>Trending</Link>
                <Link to="/movies/upcoming" className='hover:underline bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent dark:text-white'>Upcoming</Link>


            </div>

            <div className='lg:grid lg:grid-cols-3 lg:justify-center lg:gap-5 font-fontfam font-bold hidden my-5 ml-2 bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent'>

                <div className='flex justify-end ml-2'>
                {isAuthenticated ?
                    <button className='text-2xl absolute bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent dark:text-white' >
                        <div>{user.name}

                            <KeyboardArrowDownIcon onClick={showDiv} /></div>
                        {
                            showLogOut && (
                                <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >LogOut</div>
                            )
                        }
                    </button>




                    :
                    <button className='text-2xl text-white border-2 rounded-lg border-emerald-700  bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 px-5 py-1' onClick={() => loginWithRedirect()}>Log In</button>

                }
                </div>

                <div className='text-2xl hover:cursor-pointer text-green-700 dark:text-white flex justify-center items-center' onClick={darkMode}>{isDark ?
                     <DarkModeIcon onClick={addDark} /> 
                     : 
                     <LightModeIcon onClick={removeDark} />}</div>

               <Link to="/search" className='text-emerald-700 dark:text-white text-2xl flex justify-left items-center' ><SearchIcon /></Link>

            </div>

            <button className='lg:hidden font-fontfam font-bold text-4xl flex text-emerald-700  mr-3 relative my-5 justify-end z-50' onClick={toggle}> {isOpen ? <CloseIcon /> : <CiMenuFries />}</button>



            {isOpen && (
                <div className='flex flex-col items-center z-10 absolute  w-screen  p-3 gap-2 font-bold bg-white dark:bg-slate-900 h-screen justify-center text-2xl '>
                    <Link to="/home" className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent  hover:cursor-pointer font-bold '
                    onClick={toggle}>Home</Link>
                    <Link to="/movies/popular" className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent hover:cursor-pointer font-bold'onClick={toggle}>Popular</Link>
                    <Link to="/movies/top_rated" className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent hover:cursor-pointer font-bold'onClick={toggle}>Trending</Link>
                    <Link to="/movies/upcoming" className='bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent hover:cursor-pointer font-bold'onClick={toggle}>Upcoming</Link>
                    <div className=' flex gap-2 hover:cursor-pointer font-bold bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent'>
                        <div>{isAuthenticated ?
                            <button className='text-xl text-white border-2 rounded-lg border-emerald-700  bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 px-5 py-1'>{user.name} <KeyboardArrowDownIcon onClick={setShowLogOut} />
                            {
                                showLogOut && (
                                    <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>
                                )
                            }
                            </button> :
                            <button className='text-xl text-white border-2 rounded-lg border-emerald-700  bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 px-5 py-1' onClick={() => loginWithRedirect()}>Log In</button>

                        }</div>

                    </div>
                    <div className='text-green-700' onClick={darkMode}>{isDark ? <DarkModeIcon onClick={addDark} /> : <LightModeIcon onClick={removeDark} />}</div>
                    <Link to="/search" className='text-emerald-700 dark:text-white 'onClick={toggle} ><SearchIcon /></Link>
                </div>




            )}


        </nav>


    )
}