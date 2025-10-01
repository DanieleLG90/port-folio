import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Layout from "./Layout"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/contact"

function App() {
  return(
    
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
    </Router>

  )
}

export default App
