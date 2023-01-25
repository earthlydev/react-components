// with react@17 no longer to need to import JSX
import logo from "../assets/react-icon-small.png"

export default function Navbar() {
    return (
     <nav className="nav">
        <img src={logo} alt="react logo" className="nav--logo" />
        <h3 className="nav--logo-text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
     </nav>   
    )
}