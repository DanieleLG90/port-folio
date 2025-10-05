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
            console.log("clicked")
            console.log(project.id)
        }
    }

    const clickHandler = isMobile ? handleClick : null;
    const secondCardClasses = 'second-project-card'

    const titleContent = (
        <div className='second-project-title-container'>
                <h4>{title}</h4>
            </div>
    )

    const linksContent = (
        <div className='second-project-links-container'>

                <a href={siteLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <FaLink className="link-icon" />
                    <span>View Site</span>
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <FaGithub className="link-icon" />
                    <span>GitHub</span>
                </a>
        </div>
    )

    return (
        <div 
            className= {secondCardClasses}
            style={{ backgroundImage: `url(${image})` }}
            onClick={clickHandler}
        >
            {isMobile ? 
                (isOpen ? linksContent : titleContent)
                :
                <>
                    {titleContent}
                    {linksContent}
                </>
            }
            

        </div>
    )
}