import React from 'react';
import Typical from 'react-typical';
import {assets} from '../assets/assets'; // Adjust the path according to your assets' location

function Hero() {
    return (
        <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-br1 from-green-900 via-green-800 to-green-900 text-white p-6 animate-bgColor">

            {/* Image Section with Gradient Border and Pulse Animation */}
            <div className="relative mb-6 md:mb-0 md:mr-12">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg shadow-green-500/50 overflow-hidden bg-gradient-to-r from-green-500 via-purple-500 to-red-500 p-1 animate-pulseHover">
                    <img
                        src={assets.myImg}
                        alt="Your Name"
                        className="w-full h-full rounded-full transition-transform duration-500 transform hover:scale-110 opacity-80 hover:opacity-80"
                    />
                </div>
            </div>

            {/* Hero Content */}
            <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hello, I'm <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">Your Name</span>
                </h1>
                <p className="mt-4 text-2xl md:text-3xl font-semibold relative">
                <span
                    className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent transition duration-500 ease-in-out">
                    <Typical
                    
                        // Adjust the steps and loop according to your needs
                        steps={['Web Developer', 5000, 'Mobile Developer', 5000, 'FullStack Developer', 5000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </span>

                </p>

            </div>

        </section>
    );
}

export default Hero;
