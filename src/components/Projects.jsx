import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainProject from './projects-components/MainProject';
import SecondProject from './projects-components/SecondProject';
import "./Projects.css"

export default function Projects(){
    return(
        <div className='projects-container'>
            
            <div className='main-projects-container'>
                <MainProject />
                <MainProject />
                <MainProject />
                <MainProject />
            </div>

            <div className='secondary-projects-container'>
                <SecondProject />
                <SecondProject />
                <SecondProject />
                <SecondProject />
                <SecondProject />
            </div>
            
        </div>
        
    )
}