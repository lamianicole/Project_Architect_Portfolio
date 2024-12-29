import "./Footer.css";
import footerArchitectLogo from "../../../src/assets/footerArchitectLogo.svg";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-architect-logo">
                <img src={footerArchitectLogo} alt="logo" className="footer-logo" />
            </div>
        
            <div className="information">
                <h4>Information</h4>
                <p>Main</p>
                <p>Gallery</p>
                <p>Projects</p>
                <p>Certifications</p>
                <p>Contacts</p>
            </div>
        
            <div className="contact-information">
                <h4>Contacts</h4>
                <p>1234 Sample Street
                <br />
                Austin Texas 78704</p>
                <p>512.333.2222</p>
                <p>sampleemail@gmail.com</p>
            </div>
            
            <div className="socials">
                <h4>Social Media</h4>
                {/* <div className="socials-logo">
                    <img src={Facebook} alt="Facebook" />
                    <img src={Twitter} alt="Twitter" />
                    <img src={LinkedIn} alt="LinkedIn" />
                    <img src={Pinterest} alt="Pinterest" />
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;