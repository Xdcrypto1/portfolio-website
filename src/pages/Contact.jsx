import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Contact() {
    return(
  <div className="contact grid md:grid-cols-2">      
  <div className="mt-20 mb-4 p-4 rounded-lg shadow-md bg-white text-black max-w-md mx-auto h-auto">
    <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border rounded" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border rounded" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border rounded" id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" type="submit">
            Send Message
        </button>
    </form>
</div>
<div>
    <DotLottieReact
        src="https://lottie.host/e2f6d132-4c41-486c-9bdb-c3e66f0fd8fe/EUwKO6L7W4.lottie"
        loop
        autoplay
        />
</div>
</div> 
    );
    }

    export default Contact;