import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-red-700 text-white flex flex-col items-center justify-center px-4 z-50">
      {/* Icon */}
      <div className="text-6xl mb-6">
        <div className="bg-white text-red-700 rounded-full w-16 h-16 flex items-center justify-center text-4xl font-bold">
          ✖
        </div>
      </div>

      {/* Message Box */}
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Dangerous site</h1>
        <p className="text-sm mb-4">
          Attackers on the site you tried visiting might install harmful
          software that steals or deletes things like your passwords, photos,
          messages, or credit card numbers. Brave strongly recommends going back
          to safety.{" "}
          <a
            href="#"
            className="underline text-blue-200 hover:text-blue-100"
          >
            Learn more about this warning
          </a>
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-red-700 px-4 py-2 rounded-full hover:bg-gray-100 text-sm font-semibold">
            Details
          </button>
          <Link
  to="/home"
  className="bg-white text-red-700 px-4 py-2 rounded-full hover:bg-gray-100 text-sm font-semibold"
>
  Back to safety
</Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;