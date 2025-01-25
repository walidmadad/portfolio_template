import React, { useState } from 'react';
import { assets } from "../assets/assets";

// Exemples d'images pour chaque section
const mobileImages = [
    assets.mobile_image1,
    assets.mobile_image2,
    assets.mobile_image3,
    assets.mobile_image4,
    assets.mobile_image5,
    assets.mobile_image6,
];

const desktopImages = [
    assets.desktop_image1,
    assets.desktop_image2,
    assets.desktop_image3,
    assets.desktop_image4,
    assets.desktop_image5,
    assets.desktop_image6,
];

const websiteImages = [
    assets.project2,
    assets.website_image1,
    assets.website_image2,
    assets.website_image3,
    assets.website_image4,
    assets.website_image5,
    assets.website_image6,
    assets.website_image7,
    assets.website_image8,
    assets.website_image9,
    assets.website_image10,
    assets.website_image11,
];

const ProjectDetail2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Fonction pour fermer l'image agrandie
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="container mx-auto px-4 py-16 text-gray-100 bg-gray-900 min-h-screen">
            <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
                <h2 className="text-5xl font-bold mb-6 text-center text-indigo-400">Project2</h2>
                <p className="text-lg leading-relaxed mb-8 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quaerat nam deserunt et consequatur sapiente atque labore excepturi, velit optio magni perspiciatis nihil minus sed similique officiis! Assumenda, eaque quam.
                </p>

                <div className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-teal-400">Website Interface</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {websiteImages.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt={`Website Interface ${index + 1}`}
                                    className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-lg mb-4 mt-2">
                        <strong>Technologies utilisées :</strong> HTML, CSS, JavaScript, PHP
                    </p>
                </div>

                <div className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-teal-400">Mobile App Interface</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {mobileImages.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt={`Mobile Interface ${index + 1}`}
                                    className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-lg mb-4 mt-2">
                        <strong>Technologies utilisées :</strong> Java, Android Studio
                    </p>
                </div>

                <div className="mb-10">
                    <h3 className="text-3xl font-semibold mb-6 text-indigo-400">Desktop Application Interface</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        {desktopImages.map((image, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={image}
                                    alt={`Desktop Interface ${index + 1}`}
                                    className="w-full h-full object-cover rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105"
                                    onClick={() => setSelectedImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-lg mb-4 mt-2">
                        <strong>Technologies utilisées :</strong> C#, Java
                    </p>
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                        <div className="relative">
                            <img src={selectedImage} alt="Selected" className=" h-full max-h-96 rounded-lg shadow-lg" />
                            <button onClick={closeImage} className="absolute top-2 right-2 text-gray-600 text-4xl font-bold hover:text-gray-800">&times;</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail2;
