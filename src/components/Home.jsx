import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Home.css"

export default function Home(){
    return(
        <div className='home-container'>
            <div className='card'>
                <div className='card-body'>
                    <h2>Home Page!</h2>
                </div>
            </div>
            
        </div>
    )
}