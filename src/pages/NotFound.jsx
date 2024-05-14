import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="enlarge bg-[#FF6A3D] px-2 text-sm rounded absolute">
        Page Not Found
      </div>
      <style>
        {`
        @keyframes enlarge {
          0% {
            transform: scale(1) rotate(0deg);;
          }
          50% {
            transform: scale(1.3) rotate(12deg);;
          }
          100% {
            transform: scale(1) rotate(0deg);;
          }
        }
        .enlarge {
          animation: enlarge 1.3s ease-in-out infinite;
        }
        `}
      </style>
      <span className="text-gray-500 text-xl">Oops, We couldn't find what you are looking for!</span>
      <button className="mt-5">
        <Link
          to="/user/uhome"
          className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  );
};

export default NotFound;