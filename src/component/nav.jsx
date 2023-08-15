import Logo from "../assets/logo.png";
export default function Nav(){

    return(
    <nav className="nav">
    
    <img src= {Logo} className="image"/>
   
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