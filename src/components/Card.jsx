import React from "react";

const Card = ({ searchQuery, type, image }) => {
  const formattedType = type.replace(/\s+/g, "").toLowerCase();
  const url = searchQuery
    ? `/part/${formattedType}/${searchQuery}`
    : `/parts/${formattedType}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
      className="border border-white shadow-lg rounded-lg text-center w-full transition-transform transform hover:scale-105 hover:shadow-2xl bg-black cursor-pointer"
    >
      <img
        src={image}
        alt={type}
        className="w-full h-60 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-200 mb-2 Roboto">
        {type}
      </h3>
    </a>
  );
};

export default Card;
