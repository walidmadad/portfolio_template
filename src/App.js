import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail1 from './components/ProjectDetail1';
import ProjectDetail2 from './components/ProjectDetail2';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technologies from "./components/Technologies";
import AndroidGames from "./components/AndroidGames";

const App = () => {
    const location = useLocation(); // Get the current location

    // Determine whether to show the Navbar based on the current pathname
    const showNavbar = !['/projects/project-name1', '/projects/project-name2'].includes(location.pathname);

    return (
        <div className="text-gray-800 bg-gray-50">
            {showNavbar && <Navbar />} {/* Conditionally render the Navbar */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero/>
                        <About/>
                        <Technologies/>
                        <Projects/>
                        <AndroidGames/>
                        <Contact/>
                    </>
                } />
                <Route path="/projects/project-name1" element={<ProjectDetail1 />} />
                <Route path="/projects/project-name2" element={<ProjectDetail2 />} />
            </Routes>
            <Footer/>
        </div>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
