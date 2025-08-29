import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Header from "./head+foot/Header"
import Footer from "./head+foot/Footer"


export default function Layout() {
    return(
        <>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </>
    )
}