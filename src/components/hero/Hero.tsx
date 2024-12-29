import "./Hero.css";
import HeroImg from "../../../public/img/hero.png"

const Hero = () => {
    return ( 
        <section className="hero-section">
            <div className="hero-textarea">
                <h1>Project</h1>
                <h2>Lorum</h2>
            </div>
            <div className="hero-image">
                <img src={HeroImg} alt="hero" />
                <a href="#" className="view-project">
                    View Project! → 
                </a>
            </div>
        </section>
    );
}

export default Hero;