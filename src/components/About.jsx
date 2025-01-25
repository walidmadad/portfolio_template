import React from 'react';
import Typical from 'react-typical';


// About Section
const About = () => {
    return (
        <section id="about" className="wave-background text-white py-10">
            <div className="container mx-auto flex flex-col items-center text-center px-4">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Link 1
                </h2>


                {/* Section Description */}
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, officiis ea? Reprehenderit illo tenetur ducimus omnis voluptatem! Quaerat assumenda reiciendis repellat, quidem, omnis ipsam facere quas rerum suscipit pariatur earum.
                </p>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi fuga excepturi tenetur quo rem eos. Eos dolore, harum, maiores quasi deleniti provident dignissimos sunt, qui sapiente delectus sint? Consequatur!
                </p>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam repellat, est a maiores deserunt harum! Cumque minima perferendis veritatis quasi unde quam earum nihil expedita. Velit consequatur dicta totam repellat?
                </p>
                <p className="mb-6 text-lg md:text-xl font-light max-w-2xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis adipisci cupiditate minus aspernatur quos quaerat, autem sit neque maxime inventore, veniam nulla! Et perspiciatis atque quae adipisci magnam est.
                </p>


                {/* Key Skills */}

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Key Skills
                </h3>
                <div className="text-2xl md:text-3xl font-semibold mb-6">
                    <span
                        className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent transition duration-500 ease-in-out">
                        <Typical
                            steps={['Java', 5000, 'React', 5000, 'PHP', 5000, 'HTML', 5000, 'CSS', 5000, 'JavaScript', 5000, 'Node.js']}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </span>
                </div>

            </div>
        </section>
    );
};

export default About;
