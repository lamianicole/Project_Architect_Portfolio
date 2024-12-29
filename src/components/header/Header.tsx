import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import DarkMode from "../darkMode/DarkMode";
import ArchitectLogo from "../../assets/svg/ArchitectLogo";

const Header = () => {
    return ( 
        <header>
            <div className="home-logo">
                <Link to="/">
                    <ArchitectLogo />
                </Link>
            </div>

            <div className="all-elements-right">
                <nav className="navbar">
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""} > Main </NavLink></li>
                        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""} > Gallery </NavLink></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Certifications</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </nav>

                <div className="darkmode-icon">
                        <DarkMode />
                </div>
            </div>
        </header>
    );
}

export default Header;