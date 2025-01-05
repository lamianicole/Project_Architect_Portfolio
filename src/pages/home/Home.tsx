import About from "../../components/about/About";
import ContactComponent from "../../components/contactComponent/ContactComponent";
import Hero from "../../components/hero/Hero";
import Mission from "../../components/mission/Mission";
import ProjectsComponent from "../../components/projectsComponent/projectsComponent";

const Home = () => {
    return ( 
        <>
        <Hero />
        <About />
        <Mission />
        <ProjectsComponent />
        <ContactComponent />
        </>
    );
}

export default Home;