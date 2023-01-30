import Logo from "../assets/airbnb-logo.png"

function Navbar() {
    return (
        <nav className="primary-nav flex">
            <img src={Logo} alt="Airbnb Logo" className="logo-img"/>
        </nav>
    )
}

export default Navbar;