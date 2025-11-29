import React from "react";

function Card(props) {
  return (
    <div 
      className="w-96 h-80 flex flex-col justify-center items-center p-6 
                 bg-gray-800 text-white rounded-lg shadow-lg 
                 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="rounded-full mb-4"
      />

      <h2 className="text-blue-400 text-xl font-bold">{props.name}</h2>
      <p className="text-lg">{props.tagline}</p>
      <p className="text-lg text-gray-300 mb-4">{props.intro}</p>

      <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
        Hire Me
      </button>
    </div>
  );
}

function BusinessCard() {
  return (
    <Card 
      name="Abor Benedict" 
      tagline="Full Stack Developer" 
      intro="I build scalable systems and clean web applications."
    />
  );
}

export default BusinessCard;
