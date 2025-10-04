
import "./MainProject.css"


import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaServer, FaLink, FaGithub } from 'react-icons/fa';

const techIconMap = {
    react: FaReact,
    javascript: FaJs,
    css: FaCss3Alt,
    html: FaHtml5,
    api: FaServer
};

export default function MainProject({project}){

    const { title, siteLink, githubLink, technologies, image } = project;

    return (
        <div className="main-project-card">

            <div className="main-project-img-container">
                <img src={image} alt="Anteprima del progetto" />
            </div>

            <div className="main-project-info-container">
                <h4>{title}</h4>

                <div className="main-project-link">

                    <a href={siteLink} target="_blank" rel="noopener noreferrer">
                        <FaLink className="link-icon" />
                        <span>View Site</span>
                    </a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="link-icon" />
                        <span>GitHub</span>
                    </a>

                </div>

                <div className="main-project-software">
                    {technologies.map((tech, index) => {
                        const IconComponent = techIconMap[tech.toLowerCase()];
                        return IconComponent ? (
                            <IconComponent key={index} className="software-icon" />
                        ) : null;
                    })}
                </div>

            </div>

        </div>
    )
}