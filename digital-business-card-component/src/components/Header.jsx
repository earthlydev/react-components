import Avi from "../assets/avi.jpg"
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <header className="text-center">
            <img src={Avi} alt="Jazmine Arizala smiling with Sunglasses" className="avi"/>
            <h1 className="fs-600 fw-700 name">Jazmine Arizala</h1>
            <h3 className="fs-300 text-orange">Software Engineer</h3>
            <a href="https://earthlydev.netlify.app/" className="fs-200">earthlydev.netlify.app</a>
            <nav className="contact-info">
                <a href="mailto:jarizala.dev@gmail.com" className="fs-400 btn bg-white text-primary btn--email"><FaEnvelope className="icon"/>Email</a>
                <a href="https://www.linkedin.com/in/earthlydev/" className="fs-400 btn bg-blue"><FaLinkedin className="icon"/>LinkedIn</a>
            </nav>
        </header>
    )
}
