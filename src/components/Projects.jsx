import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainProject from './projects-components/MainProject';
import SecondProject from './projects-components/SecondProject';
import "./Projects.css"

import { mainProjectsData } from './projects-components/projects-data/main-projects-data';

export default function Projects(){
    return(
        <div className='projects-container'>
            
            <div className='main-projects-container'>
                {mainProjectsData.map(project => (
                    <MainProject 
                        key={project.id} 
                        project={project} 
                    />
                ))}
            </div>

            <div className='secondary-projects-container'>
                <SecondProject />
                <SecondProject />
                <SecondProject />
            </div>
            
        </div>
        
    )
}