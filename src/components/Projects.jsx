import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets";

const projects = [
    {
        title: 'title', // Titre du projet
        description: 'loren ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur', // Description du projet
        technologies: ['ReactJS', 'Tailwind CSS'], // Adjust the technologies as needed
        link: 'https:www.google.com', // Lien vers la page de détails
        image: assets.project1,
    },
    {
        title: 'title', // Titre du projet
        description: 'loren ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur', // Description du projet
        technologies: ['Java', 'PHP', 'HTML', 'JavaScript', 'CSS', 'MySQL'], // Adjust the technologies as needed
        link: '/projects/project-name1', // Lien vers la page de détails
        image: assets.project2,
    },
    
    {
        title: 'Title', // Titre du projet
        description: 'loren ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur', // Description du projet
        technologies: ['PHP', 'MySQL', 'HTML', 'CSS'], // Adjust the technologies as needed
        link: '/projects/project-name2', // Lien vers la page de détails
        image: assets.project3,
    },
    
];

const Projects = () => {
    return (
        <section id="projects" className="bg-gradient-to-br from-gray-900 to-black text-white py-10">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Link 3</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default">
                    {projects.map((project, index) => (
                        <Link to={project.link} key={index} target="_blank" className="relative rounded-lg overflow-hidden shadow-md transform transition duration-500 hover:scale-110 shadow-cyan-500/50  hover:shadow-2xl hover:shadow-cyan-500/50 project-card brightness-110"
                              style={{
                                  backgroundImage: `url(${project.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  height: '300px',
                              }}>
                            <div className="bg-gray-950 bg-opacity-70 h-full flex flex-col justify-center p-6 backdrop-blur-sm hover:backdrop-blur-none hover:blur-3xl transition duration-500 hover:duration-500">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-lg mb-4">{project.description}</p>
                                <p className="text-sm mb-4">
                                    <strong>Technologies :</strong> {project.technologies.join(', ')}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
