import { Link } from "react-router-dom";
import Img1 from "./img1.jpg";
import Img2 from "./img2.jpg";
import Img3 from "./img3.jpg";


export default function Main() {
    return (
        <>
            <section class="flex justify-between md:justify-center items-center h-[100vh] overflow-hidden  shadow-animation lg:gap-20 ">
            <div class="z-[100]">
            <h3 class="font-extrabold text-4xl lg:text-6xl">Find movies</h3>
            <h2 class="font-extrabold text-5xl lg:text-7xl bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent">TV shows and more</h2>
            <p class="text-neutral-500 max-w-[25rem] line-clamp-4">Dive into an extensive database featuring a diverse collection of movies from various genres, eras, and languages. Whether you're a fan of timeless classics, blockbuster hits, or indie gems, MoviePulse has it all. Discover hidden cinematic treasures and stay up-to-date with the latest releases.</p>
            <Link class="" to="/home">
            <button class=" bg-gradient-to-r from-lime-500 via-green-500 to-emerald-700 bg-clip-text text-transparent  border-2  border-emerald-700 rounded-md px-2 py-1 font-bold ">Discover</button>
            </Link>
            </div>
            <div class="relative right-0 opacity-50 md:opacity-75 lg:scale-150">
            <img src={Img1} alt="" class="w-[10rem] absolute bottom-20 left-5 z-[0]" />
            <img src={Img2} alt="" class="w-[10rem] z-[50]"  />
            <img src={Img3} alt="" class="w-[10rem] absolute top-20 left-10"  />
            </div>
            </section>

            </>


                )
}