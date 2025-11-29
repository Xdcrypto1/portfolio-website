import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full border-y border-gray-200 bg-white text-black shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto h-16 px-4 flex justify-between items-center"> 
                <h1 className="text-2xl font-bold">BenBuilds</h1>
                <div className="hidden md:flex gap-8 text-lg">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/projects" className="hover:text-blue-600">Projects</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                </div>
                <button 
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col gap-4 p-4 border-t border-black bg-gray-50 text-lg">
                    <Link onClick={() => setOpen(false)} to="/" className="hover:text-blue-600">Home</Link>
                    <Link onClick={() => setOpen(false)} to="/about" className="hover:text-blue-600">About</Link>
                    <Link onClick={() => setOpen(false)} to="/projects" className="hover:text-blue-600">Projects</Link>
                    <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-blue-600">Contact</Link>
                </div>
            )}

        </nav>
    );
}

export default Navbar;
