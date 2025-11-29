import React from "react";
import { FaReact, FaHtml5, FaNodeJs, FaServer, FaGithub, FaBrain, FaComments, FaUsers } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiVite, SiPostman } from "react-icons/si";

function Skills({ title, details }) {
    return (
        <div className="skills size-60 rounded-lg border border-gray-300 bg-white shadow-md text-center py-6 px-4">
            <h4 className="font-semibold text-lg pb-2 underline decoration-bold">{title}</h4>

            <div className="space-y-2">
                {details.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SkillTags() {
    return (
        <div className="skill-tags w-4/6 mt-10 p-6 rounded-lg shadow-lg bg-gray-100 text-black space-y-6 mx-auto">
            <h2 className="text-4xl font-semibold text-center py-4">SKILLS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center px-6">

                <Skills
                    title="Frontend Development"
                    details={[
                        { text: "React.js", icon: <FaReact /> },
                        { text: "HTML5", icon: <FaHtml5 /> },
                        { text: "Tailwind CSS", icon: <SiTailwindcss /> },
                        { text: "Responsive Design", icon: <FaReact /> },
                    ]}
                />

                <Skills
                    title="Backend Development"
                    details={[
                        { text: "Node.js & Express", icon: <FaNodeJs /> },
                        { text: "PostgreSQL", icon: <SiPostgresql /> },
                        { text: "REST APIs", icon: <FaServer /> },
                        { text: "Auth & Sessions", icon: <FaServer /> },
                    ]}
                />

                <Skills
                    title="Tools & Technologies"
                    details={[
                        { text: "Git & GitHub", icon: <FaGithub /> },
                        { text: "Vite", icon: <SiVite /> },
                        { text: "Postman", icon: <SiPostman /> },
                        { text: "VS Code", icon: <FaReact /> },
                    ]}
                />

                <Skills
                    title="Soft Skills"
                    details={[
                        { text: "Problem Solving", icon: <FaBrain /> },
                        { text: "Communication", icon: <FaComments /> },
                        { text: "Team Collaboration", icon: <FaUsers /> },
                        { text: "Fast Learning", icon: <FaBrain /> },
                    ]}
                />

            </div>
        </div>
    );
}

export default SkillTags;
