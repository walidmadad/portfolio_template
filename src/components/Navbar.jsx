import React, { useState } from 'react';
import logo from '../LOGO.png'; // Adjust the path according to your logo's location

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white p-4 shadow-lg fixed w-full z-10 transition-all duration-300 ease-in-out">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Name Section */}
                <div className="flex items-center">
                    <a href="#" className="flex items-center transition duration-300 hover:opacity-80" aria-label="Home">
                        <img src={logo} alt="Logo" className="h-10 w-10 mr-2 rounded-full" />
                        <span className="text-lg font-bold">Your Name</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {/* Navigation Links */}
                    {['Link1', 'Link2', 'Link3', 'Link4', 'Contact'].map((link) => (
                        <a
                            href={`#${link.toLowerCase()}`}
                            key={link}
                            className="hover:text-blue-400 transition duration-300"
                            aria-label={link}
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="/cv.pdf" // Adjust the path to your resume's location
                        download
                        className="hover:text-blue-400 transition duration-300"
                        aria-label="Download Resume"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-2 mt-2 p-4 bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                    {['Link1', 'Link2', 'Link3', 'Link4', 'Contact'].map((link) => (
                        <a
                            href={`#${link.toLowerCase()}`}
                            key={link}
                            className="block px-4 py-2 hover:bg-gray-600 transition duration-300"
                            aria-label={link}
                        >
                            {link}
                        </a>
                    ))}
                    <a
                        href="/cv.pdf"
                        download
                        className="block px-4 py-2 hover:bg-gray-600 transition duration-300"
                        aria-label="Download Resume"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
