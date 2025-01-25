import React from 'react';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import phpIcon from '../assets/icons/php.png';
import nodeIcon from '../assets/icons/node.webp';
import mysqlIcon from '../assets/icons/mysql.png';
import github from '../assets/icons/github.png';
import javaIcon from '../assets/icons/java.png';
import gitIcon from '../assets/icons/git.png';
import vueIcon from '../assets/icons/vue.svg';
import cSharp from '../assets/icons/c-sharp.svg';
import springBootIcon from '../assets/icons/Spring_Boot.svg';
import linux from '../assets/icons/linux.png'
import junit from '../assets/icons/junit.png'
import typeScript from '../assets/icons/typescript.png'
import mongodb from '../assets/icons/mongodb.svg'
import laravel from '../assets/icons/laravel.png'
import mariadb from '../assets/icons/mariadb.webp'
import sqlite from '../assets/icons/sqllite.png'

const technologiesData = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },

    { name: 'JavaScript', icon: jsIcon },
    { name: 'TypeScript', icon: typeScript},
    { name: 'React.js', icon: reactIcon },
    { name: 'Vue.js', icon: vueIcon },
    { name: 'Node.js', icon: nodeIcon },

    { name: 'C#', icon: cSharp },
    { name: 'PHP', icon: phpIcon },
    { name: "Laravel", icon: laravel},

    { name: 'Java', icon: javaIcon },
    { name: 'Spring Boot', icon: springBootIcon },
    { name: 'JUnit', icon: junit},

    { name: 'MySQL', icon: mysqlIcon },
    { name: "MongoDB", icon: mongodb},
    { name: 'MariaDB' , icon: mariadb},
    { name: "SQLite", icon: sqlite},

    { name: 'GitHub', icon: github },
    { name: 'Git', icon: gitIcon },
    { name: 'Linux', icon: linux},


];

const Technologies = () => {
    return (
        <section id="technologies" className="py-10 bg-gradient-to-br from-green-900 to-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Link 2</h2>
                <div className="flex flex-wrap justify-center">
                    {technologiesData.map((tech, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded-full flex cursor-default hover:scale-110  items-center m-2 shadow-lg shadow-green-500/50 overflow-hidden " > {/* Added margin */}
                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 mr-2" />
                            <span className="text-lg font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
