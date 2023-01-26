import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-accent">
            <ul className="social-media flex">
                <li><a href="#" className="text-grey"><FaTwitterSquare className="social-media-icons"/></a></li>
                <li><a href="#" className="text-grey"><FaFacebookSquare className="social-media-icons"/></a></li>
                <li><a href="#" className="text-grey"><FaInstagramSquare className="social-media-icons"/></a></li>
                <li><a href="#" className="text-grey"><FaGithubSquare className="social-media-icons"/></a></li>
            </ul>
        </footer>
    )
}