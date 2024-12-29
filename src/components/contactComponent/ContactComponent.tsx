import "./ContactComponent.css";
import contactImg from "../../../public/img/contact.png";

const ContactComponent = () => {
    return ( 
        <section className="contact-section">
            <h1>Contact Us</h1>
            <div className="contact-con">
                <div className="contact-form">
                    <form>
                        <input type="text" id="name" name="name" placeholder="Name" required />
                        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <input type="text" id="interests" name="interests" placeholder="Interested In" required />
                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                    </form>
                </div>
                <img src={contactImg} alt="contact" className="contact-img" />
            </div>
            <button type="submit" className="send-message-btn">send email → </button>
        </section>
    );
}

export default ContactComponent;