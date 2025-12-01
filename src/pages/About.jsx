import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function About() {
  const handleResumeDownload = () => {
        window.location.href = "https://portfolio-website-6fs3.onrender.com/resume";
    };
  return (
    <div className="About p-4 border-gray-200 rounded-lg shadow-md text-black w-5/6 grid md:grid-cols-2 gap-6 mx-auto my-10" >
        <div>
        <h2 className="text-3xl font-semibold mb-4 underline decoration-solid">ABOUT ME</h2>
        <p className="mb-2 text-white text-sm">
            Hello! I'm Abor Benedict, a passionate Full Stack Developer with expertise in React, Node.js, and Postgres. I love building dynamic and responsive web applications that provide seamless user experiences.
        </p>
        <p className="mb-2 text-white text-sm">
            With a strong foundation in both front-end and back-end technologies, I enjoy tackling complex problems and turning ideas into reality through code. My journey in web development has been fueled by continuous learning and a desire to stay updated with the latest industry trends.
            </p>
            <button 
            onClick={handleResumeDownload}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Download Resume
            </button>
           </div> 
           <div>
            <DotLottieReact
              src="https://lottie.host/351a681e-4399-4ecf-b07e-62eefdf817e5/IgL43tIrt6.lottie"
              loop
              autoplay
            />
           </div>
    </div>
            
  );
}

export default About;