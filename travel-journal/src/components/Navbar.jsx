import { RiEarthFill } from "react-icons/ri"

function Navbar() {
    return (
    <nav className="primary-nav bg-red flex fs-500 text-white">
        <RiEarthFill className="nav--logo" />
        <h3 className="nav--text"> my travel journal.</h3>
    </nav>
    )
}

export default Navbar;