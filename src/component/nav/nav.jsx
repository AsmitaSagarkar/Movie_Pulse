
import { CiMenuFries } from 'react-icons/ci';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseIcon from '@mui/icons-material/Close';

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

        <nav className='grid lg:grid-cols-3 lg:items-center text-nav dark:text-neutral-100 grid-cols-2 border-b-2  shadow-lg  shadow-nav dark:shadow-white dark:shadow-sm fixed w-full bg-white dark:bg-slate-900 z-50 top-0'>
            <div className='flex ml-3 lg:ml-12 my-5'><h1 className='text-nav dark:text-neutral-100 font-fontfam font-bold lg:text-4xl text-2xl hover:underline hover:cursor-pointer hover:animate-pulse'>MOVIE PULSE</h1></div>
            <div className='lg:flex lg:justify-around text-2xl font-fontfam font-bold hidden my-5'>
                <Link to="/" className='hover:underline'>Home</Link>
                <Link to="/movies/popular" className='hover:underline'>Popular</Link>
                <Link to="/movies/top_rated" className='hover:underline'>Trending</Link>
                <Link to="/movies/upcoming" className='hover:underline'>Upcoming</Link>


            </div>

            <div className='lg:grid lg:grid-cols-2 lg:justify-center lg:gap-12 font-fontfam font-bold hidden my-5 ml-14'>

                <div className='flex justify-center ml-11'>
                {isAuthenticated ?
                    <button className='text-2xl absolute' >
                        <div>{user.name}

                            <KeyboardArrowDownIcon onClick={showDiv} /></div>
                        {
                            showLogOut && (
                                <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >LogOut</div>
                            )
                        }
                    </button>




                    :
                    <button className='text-2xl' onClick={() => loginWithRedirect()}>Log In</button>

                }
                </div>

                <div className='text-2xl hover:cursor-pointer' onClick={darkMode}>{isDark ?
                     <DarkModeIcon onClick={addDark} /> 
                     : 
                     <LightModeIcon onClick={removeDark} />}</div>

            </div>

            <button className='lg:hidden font-fontfam font-bold text-4xl flex   mr-3 relative my-5 justify-end' onClick={toggle}> {isOpen ? <CloseIcon /> : <CiMenuFries />}</button>



            {isOpen && (
                <div className='flex flex-col items-center z-10 absolute top-20 w-screen  p-3 gap-2 font-bold bg-white dark:bg-slate-900 h-screen justify-center'>
                    <Link to="/" className='text-nav dark:text-white  hover:cursor-pointer font-bold '
                    onClick={toggle}>Home</Link>
                    <Link to="/movies/popular" className='text-nav dark:text-white  hover:cursor-pointer font-bold'onClick={toggle}>Popular</Link>
                    <Link to="/movies/top_rated" className='text-nav  dark:text-white hover:cursor-pointer font-bold'onClick={toggle}>Trending</Link>
                    <Link to="/movies/upcoming" className='text-nav  dark:text-white hover:cursor-pointer font-bold'onClick={toggle}>Upcoming</Link>
                    <div className='text-nav   flex gap-2 hover:cursor-pointer font-bold dark:text-white'>
                        <div>{isAuthenticated ?
                            <button className='text-xl'>{user.name} <KeyboardArrowDownIcon onClick={setShowLogOut} />
                            {
                                showLogOut && (
                                    <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>
                                )
                            }
                            </button> :
                            <button className='text-xl' onClick={() => loginWithRedirect()}>Log In</button>

                        }</div>

                    </div>
                    <div className='text-neutral-200 dark:text-nav  hover:cursor-pointer font-bold' onClick={darkMode}>{isDark ? <DarkModeIcon onClick={addDark} /> : <LightModeIcon onClick={removeDark} />}</div>
                </div>




            )}


        </nav>


    )
}