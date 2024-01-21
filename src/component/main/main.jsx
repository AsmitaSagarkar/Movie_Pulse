import { Link } from "react-router-dom";
import Img1 from "./img1.jpg";
import Img2 from "./img2.jpg";
import Img3 from "./img3.jpg";



export default function Main() {
    
    return (
        <>
            <section class="flex  justify-center items-center h-[100vh] overflow-hidden  shadow-animation md:gap-20 flex-col md:flex-row md:text-left text-centre ">
            <div class="z-[100] text-center md:text-left gap-10 mt-20">
                <div><div><h3 class="font-extrabold text-4xl lg:text-6xl mt-10">Unlock Movie</h3></div>
                <div><h2 class="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent h-24">Magic, Explore Now!</h2></div></div>
                <div><p class="text-neutral-500 md:max-w-[25rem] max-w-fit">Welcome to our movie haven! Dive into a world of cinematic wonders where stories unfold and emotions run high. From thrilling blockbusters to heartwarming dramas, our carefully curated selection promises an unforgettable movie experience. Get ready to be captivated – your cinematic adventure starts here!</p></div>
                
                <div className="flex  md:justify-start justify-center my-2">
                <Link  to="/home">
                <button class=" bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent  border-2  border-emerald-700 rounded-md px-2 py-1 font-bold ">Discover</button></Link>
                </div>
            </div>
            
            <div class="relative right-0 opacity-50 md:opacity-75 md:scale-150 scale-75 mt-10 mb-10">
            <img src={Img1} alt="" class="w-[10rem] absolute bottom-20 left-5 z-[0]" />
            <img src={Img2} alt="" class="w-[10rem] z-[50]"  />
            <img src={Img3} alt="" class="w-[10rem] absolute top-20 left-10"  />
            </div>
            </section>

            </> 


                )
}