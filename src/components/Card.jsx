import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ searchQuery, _id, type, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const formattedType = type.replace(/\s+/g, "").toLowerCase();
    const url = searchQuery
      ? `/part/${formattedType}/${searchQuery.toLowerCase()}`
      : `/parts/${formattedType}`;

    // Use navigate for routing
    if (searchQuery) {
      navigate(url); // Navigate in the same tab
    } else {
      navigate(url); // Still navigating in the same tab
    }
  };

  return (
    <div
      onClick={handleClick}
      className="border border-white shadow-lg rounded-lg text-center w-full transition-transform transform hover:scale-105 hover:shadow-2xl bg-black cursor-pointer mb-4 "
    >
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
