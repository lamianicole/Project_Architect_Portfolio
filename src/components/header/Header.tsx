import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import DarkMode from "../darkMode/DarkMode";
import ArchitectLogo from "../../assets/svg/ArchitectLogo";

const Header = () => {
    // Zustand zur Steuerung des Burger-Menüs
    const [isOpen, setIsOpen] = useState(false);

    // Funktion zum Umschalten des Menüs
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="home-logo">
                <Link to="/">
                    <ArchitectLogo />
                </Link>
            </div>

            <div className="all-elements-right">
                <nav className={`navbar ${isOpen ? "show" : ""}`}>
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Main</NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""}>Gallery</NavLink></li>
                        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink></li>
                        <li><NavLink to="/certifications" className={({ isActive }) => isActive ? "active-link" : ""}>Certifications</NavLink></li>
                        <li><NavLink to="/contacts" className={({ isActive }) => isActive ? "active-link" : ""}>Contacts</NavLink></li>
                    </ul>
                </nav>

                <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className="darkmode-icon">
                    <DarkMode />
                </div>
            </div>
        </header>
    );
}

export default Header;