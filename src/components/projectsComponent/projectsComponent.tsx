import "./ProjectsComponent.css";
import project1 from "../../../public/img/project1.png";
import project2 from "../../../public/img/project2.png";
import project3 from "../../../public/img/project3.png";
import project4 from "../../../public/img/project4.png";
import project5 from "../../../public/img/project5.png";

const ProjectsComponent = () => {
    return ( 
        <section className="projects-section">
        <h1>Our Projects</h1>
        <div className="projects-images-top">
            <div className="project-image-con">
                <a href="/sample-project" className="project-link"> 
                    <img src={project1} alt="project1 sample project" className="sample-project-img" />
                    <div className="overlay">
                        <p className="sample-project-headline">Sample</p>
                        <p className="sample-project-headline"> Project</p>
                        <a href="#more" className="view-more">View more →</a>
                    </div>
                </a>
            </div>
            <img src={project2} alt="project2" className="project-image" />
        </div>
        <div className="projects-images-bottom">
            <img src={project3} alt="project3" className="project-image" />
            <img src={project4} alt="project4" className="project-image" />
            <img src={project5} alt="project5" className="project-image" />
        </div>
        <div className="btn-con">
            <a href="/all-projects" className="all-projects-btn">All projects →</a>
        </div>
    </section>
    );
}

export default ProjectsComponent;