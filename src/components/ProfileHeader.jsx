import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function ProfileHeader() {
  return (
    <div className="profile-header w-full h-96 mt-15 text-center p-6 grid grid-cols-2 md:grid-cols-4 justify-center gap-6 drop-shadow-xl rounded-lg">
    <div>
      <img 
        src="https://via.placeholder.com/150" 
        alt="Profile" 
        className="h-32 w-32 rounded-full shadow-lg border-2 border-white"
      />
      </div> 
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl mb-1 font-mono font-extrabold">I'm Benedict</h1>
        <p className="text-md text-black font-bold">
         A Full Stack Developer 
          <span className="hover:text-blue-800 transition ml-2">
            | React | Node.js | Postgres |
          </span>
        </p>
      </div>
      <div className="">
        <DotLottieReact
          src="https://lottie.host/584772cc-a5aa-4add-935c-b20cd5528d00/pCPSwzGvLm.lottie"
          loop
          autoplay
          />
      </div>
      <div>
        <DotLottieReact
            src="https://lottie.host/9124de32-9591-44e8-808e-5ce28a61d615/5ZFxeCoNdu.lottie"
            loop
            autoplay
          />
      </div>

    </div>
  );
}

export default ProfileHeader;
