import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Home.css"
import photoProfile from "../img/temp-profile-img.png"

export default function Home(){
    return(
        <div className='home-container'>
            <div className='card'>
                <div className='card-body'>
                    <div class="profile-image">
                        <img src={photoProfile} alt="Foto del developer" />
                    </div>
                    <div class="intro-text">
                        <h2>Hello</h2>
                        <h1>Sono Daniele Lorenzo Giacomazzi</h1>
                        <p>A passionate web developer!</p>
                        <button class="view-work-button">View My Work</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}