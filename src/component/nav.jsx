import Logo from "../assets/MoviePulse.png";

export default function Nav(){

    return(
    <nav className="nav">
    
 <img src= {Logo} className="image" alt = "Logo"/>

    <div className="items">
    <ul className="list">
    <li>Home</li>
    <li>New</li>
    <li>Popular</li>
    <li>Guide</li>
    </ul>
    </div>
    </nav>
    )
}