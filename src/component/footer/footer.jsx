import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';

export default function Footer(){
    return (

        <>
        <div className="border-2 border-nav dark:border-white flex flex-row p-4">
        <h2 className="text-nav dark:text-white md:text-2xl text-lg">Scroll, Watch, Repeat!</h2>
        <div className="flex flex-col justify-center gap-4">
        <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
        </div>
        </div>
        </>
    )

}

