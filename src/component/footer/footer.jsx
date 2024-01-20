import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';

export default function Footer(){
    return (

        <>
        <div className=" border-t-2 border-emerald-700 dark:border-white flex flex-col p-4 font-semibold mt-5  shadow-shade">
        <h2 className="bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent md:text-2xl text-lg text-center font-extrabold dark:text-cyan-400">Scroll, Watch, Repeat!</h2>
        <div className="flex flex-row justify-center gap-4 text-emerald-700 dark:text-white">
        <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
        </div>
        </div>
        </>
    )

} 

