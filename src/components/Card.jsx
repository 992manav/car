import React from "react";

const Card = ({ _id, type, image }) => {
  return (
    <div className="border border-white shadow-lg rounded-lg text-center w-full transition-transform transform hover:scale-105 hover:shadow-2xl bg-black">
      <img
        src={image}
        alt={type}
        className="w-full h-60 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-200 mb-2 Roboto">
        {type}
      </h3>
    </div>
  );
};

export default Card;
