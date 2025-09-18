import React from "react"
import "./MainProject.css"
import plantJournalImg from "../../img/projects-img/plant-journal.png"

import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaServer, FaLink, FaGithub } from 'react-icons/fa';

const techIconMap = {
    react: FaReact,
    javascript: FaJs,
    css: FaCss3Alt,
    html: FaHtml5,
    api: FaServer
};

export default function MainProject(){
    return (
        <div className="main-project-card">

            <div className="main-project-img-container">
                <img src={plantJournalImg} alt="Anteprima del progetto" />
            </div>

            <div className="main-project-info-container">
                <h4>Plants Blog</h4>

                <div className="main-project-link">

                    <a href="https://www.tuosito.com/plants-blog" target="_blank" rel="noopener noreferrer">
                        <FaLink className="link-icon" />
                        <span>View Site</span>
                    </a>
                    <a href="https://github.com/tuo-profilo/plants-blog" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="link-icon" />
                        <span>GitHub</span>
                    </a>

                </div>

                <div className="main-project-software">
                    <FaHtml5 className="software-icon html-icon" />
                    <FaCss3Alt className="software-icon css-icon" />
                    <FaJs className="software-icon js-icon" />
                </div>

            </div>

        </div>
    )
}