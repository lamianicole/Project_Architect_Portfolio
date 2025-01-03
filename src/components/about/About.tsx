import "./About.css";
import about1Img from "/img/about1.png";
import about2Img from "/img/about2.png";
import about3Img from "/img/about3.png";

const About = () => {
    return ( 
        <section className="about-section">
            <div className="about-images-con">
                <div className="images-left">
                    <img src={about1Img} alt="about1" />
                    <img src={about3Img} alt="about3" />
                </div>
                <div className="image-mid">
                    <img src={about2Img} alt="about2" />
                </div>
            </div>
            <div className="text-right">
                <h1>About</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                </p>
                <a href="#more" className="read-more">Read More → </a>
            </div>
        </section>
    );
}

export default About;