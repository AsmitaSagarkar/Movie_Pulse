import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';

export default function Footer(){
    return (

        <>
        <div className="shadow-nav shadow-inner  dark:shadow-white border-t-2 border-nav dark:border-white flex flex-col p-4 font-semibold mt-5">
        <h2 className="text-nav dark:text-white md:text-2xl text-lg text-center">Scroll, Watch, Repeat!</h2>
        <div className="flex flex-row justify-center gap-4 text-nav">
        <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
        </div>
        </div>
        </>
    )

}

