import React from "react";

function SocialLink({ platform, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 font-medium hover:text-blue-800 transition"
    >
      {platform}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md bg-white text-black max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">Social Links</h3>

      <div className="flex flex-row gap-6">
        <SocialLink platform="GitHub" link="https://github.com/Xdcrypto1" />
        <SocialLink platform="Twitter" link="https://x.com/xlimdad" />
        <SocialLink platform="LinkedIn" link="#" />
        <SocialLink platform="Facebook" link="#" />
      </div>
    </div>
  );
}

export default SocialLinks;
