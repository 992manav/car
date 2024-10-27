import React from "react";

const PartCard = ({ part }) => {
  return (
    <div className="bg-lightblue-500 hover:bg-deepskyblue-500 transition duration-300 transform hover:scale-105 p-4 text-center">
      <div className="relative bg-white rounded shadow-lg w-full max-w-md mb-4 h-full">
        {/* Wrapper for the image and "Add to Cart" text */}
        <div className="relative group">
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-80 rounded mb-4 object-cover" // Added object-cover for better image handling
          />
          {/* "Add to Cart" text with icon */}
          <div className="absolute inset-0 flex items-center justify-center text-white bg-red-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
            <i className="fas fa-shopping-cart mr-2"></i>{" "}
            {/* Shopping cart icon */}
            Add to Cart
          </div>
        </div>
        <div className="absolute top-3 right-2 bg-red-500 text-white px-2 py-1 rounded">
          <span className="line-through text-gray-500 mr-2 text-md">
            ₹{part.price + 2000}
          </span>
          <span className="text-2xl">₹{part.price}</span>
        </div>
        <p className="text-lg m-4 ml-6 text-red-500">
          Model: {part.model.toUpperCase()}
        </p>
        <h2 className="text-xl text-black font-semibold m-4 tracking-wide">
          {part.name}
        </h2>
      </div>
    </div>
  );
};

export default PartCard;
