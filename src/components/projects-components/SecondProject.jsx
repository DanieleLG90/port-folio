import React from "react"
import "./SecondProject.css"
import { FaGithub, FaLink } from 'react-icons/fa'

import { useMediaQuery } from 'react-responsive'
const mobileBreackPoint = 768


export default function SecondProject({project, onToggleClick, isOpen}){

    const isMobile = useMediaQuery({ maxWidth: mobileBreackPoint })
    const { title, siteLink, githubLink, image } = project;

    const handleClick = () => {
        if (isMobile) { 
            onToggleClick(project.id)
        }
    }

    const clickHandler = isMobile ? handleClick : null;
    const secondCardClasses = `second-project-card ${isOpen ? 'active' : ''}`

    return (
        <div 
            className= {secondCardClasses}
            style={{ backgroundImage: `url(${image})` }}
            onClick={clickHandler}
        >

            <div className={`second-project-title-container ${isMobile && isOpen ? 'hidden' : ''}`}>
                <h4>{title}</h4>
            </div>

            <div className={`second-project-links-container ${isMobile && isOpen ? 'visible' : ''}`}>
                <a href={siteLink} target="_blank" rel="noopener noreferrer">
                    <FaLink className="link-icon" />
                    <span>View Site</span>
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="link-icon" />
                    <span>GitHub</span>
                </a>
            </div>

        </div>
    )
}