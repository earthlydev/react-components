import Troll from "../assets/troll-face.png"

function Header() {
    return (
        <header className="bg-purple primary-header flex">
            <img src={Troll} alt="troll face meme" className="logo-img"/>
            <h2 className="logo-text">Meme Generator</h2>
            <h4 className="ff-sans-serif fs-200 proj-num">React Course - Project 3</h4>
        </header>
    )
}

export default Header;