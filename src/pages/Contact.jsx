import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-website-6fs3.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact grid md:grid-cols-2">

      {/* CONTACT FORM */}
      <div className="mt-20 mb-4 p-4 rounded-lg shadow-md bg-white text-black max-w-md mx-auto h-auto">
        <h3 className="text-lg font-semibold mb-2">Contact Me</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border rounded"
              id="message"
              rows="4"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            type="submit"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-2 text-sm text-gray-700">{status}</p>
          )}
        </form>
      </div>

      {/* LOTTIE ANIMATION */}
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
