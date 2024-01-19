import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';

export default function Footer(){
    return (

        <>
        <div className=" border-t-2 border-nav dark:border-white flex flex-col p-4 font-semibold mt-5  bg-white dark:bg-slate-900 ">
        <h2 className="text-nav dark:text-white md:text-2xl text-lg text-center">Scroll, Watch, Repeat!</h2>
        <div className="flex flex-row justify-center gap-4 text-nav dark:text-white">
        <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
        </div>
        </div>
        </>
    )

} 

