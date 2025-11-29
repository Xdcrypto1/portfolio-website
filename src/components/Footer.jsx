import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
                <h2 className="text-lg font-semibold tracking-wide">Connect With Me</h2>

                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl">
                    <a href="https://github.com/Xdcrypto1" target="_blank" className="hover:text-white transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/xlimdad" target="_blank" className="hover:text-white transition">
                        <FaTwitter />
                    </a>
                    <a href="https://facebook.com" target="_blank" className="hover:text-white transition">
                        <FaFacebook />
                    </a>
                </div>

                <p className="text-sm text-gray-500">© {new Date().getFullYear()} BenBuilds · All Rights Reserved.</p>
            </div>
        </footer>
    );
}
