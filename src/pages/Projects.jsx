import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Project({ title, description, link }) {
    return (
        <div className="bg-gray-50 p-5 rounded-xl shadow-md border-gray-200 hover:shadow-lg transition hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>

            <p className="mb-4 text-gray-600 leading-relaxed">
                {description}
            </p>

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
            >
                View Project
            </a>
        </div>
    );
}

function Projects() {
    return (
        <div className="project w-full mt-20 mb-4 p-6 border-gray-200 rounded-lg shadow-md text
        -black max-w-5xl mx-auto grid grid-cols-reverse md:grid-cols-1 gap-6">
            <h3 className="text-3xl font-bold mb-6">PROJECTS</h3>

            {/* Fully Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <Project
                    title="Progress Optimization App"
                    description="A monitoring system that tracks user activity, engagement, and learning analytics. Built with React, Node.js, and PostgreSQL."
                    link="#"
                />

                <Project
                    title="Web Novel Platform"
                    description="A publishing and reading platform where authors upload stories and users track reading progress with clean UI."
                    link="#"
                />

                <Project
                    title="Portfolio Website"
                    description="A full personal portfolio design showcasing skills, contact form, and smooth UI built with React + Tailwind."
                    link="#"
                />

            </div>
            <div>
               <DotLottieReact
                    src="https://lottie.host/d4f3a389-cd5f-49d0-8d8c-22987592d246/1QGUc4ueTu.lottie"
                    loop
                    autoplay
                    />
            </div>
        </div>
    );
}

export default Projects;

