import React from "react";
import mechanic from "../assets/mechanic.jpg";
function ServiceSection() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8">
      {/* Left Side - Image with Overlay */}
      <div className="relative w-full md:w-1/2 p-4">
        <img
          src={mechanic}
          alt="Service"
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-1/4 -right-10 bg-red-500 text-white p-7 text-center font-semibold">
          We Provides <br /> Best Solution Vehicles Parts
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 ml-5">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We Provides Best Solution Vehicles Parts
        </h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          libero at elit eleifend interdum. Mauris auctor quam in diam
          efficitur, nec fermentum lacus convallis.
        </p>
        <ul className="list-none space-y-2 mb-6 text-black">
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>
              Nulla facilisi. Duis aliquet ligula non felis eleifend, ac aliquet
              nisi bibendum.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>
              Curabitur auctor eros ac urna interdum, nec posuere nulla cursus.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>Proin ac nulla eget lorem sagittis vestibulum a at quam.</p>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 mr-2">✓</span>
            <p>Donec sit amet lorem quis felis pharetra consectetur.</p>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md">
            Our Services
          </button>
          <p className="text-red-500 font-semibold">+9328947223</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
