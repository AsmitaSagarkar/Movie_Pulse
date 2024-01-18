import React from "react";

export default function Footer(){
    return (

        <>
        <div className="border-2 border-nav dark:border-white">
        <h2 className="text-nav dark:text-white md:text-2xl text-lg">Scroll, Watch, Repeat!</h2>
        <div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineInstagram /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineFacebook /></div>
        <div className='text-4xl hover:cursor-pointer'><AiOutlineTwitter /></div>
        </div>
        </div>
        </>
    )

}

