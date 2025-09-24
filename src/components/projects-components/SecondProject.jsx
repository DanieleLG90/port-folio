import React from "react"
import "./SecondProject.css"
import { FaGithub, FaLink } from 'react-icons/fa'

//import unitConverter from "../../img/projects-img/unit-converter.png"

export default function SecondProject({project}){

    const { title, siteLink, githubLink, image } = project;

    return (
        <div className="second-project-card" style={{ backgroundImage: `url(${image})` }}>

            <div className="second-project-title-container">
                <h4>{title}</h4>
            </div>

            <div className="second-project-links-container">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaLink className="link-icon" />
                    <span>View Site</span>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="link-icon" />
                    <span>GitHub</span>
                </a>
            </div>

        </div>
    )
}