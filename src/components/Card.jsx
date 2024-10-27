import React from "react";

const Card = ({ searchQuery, _id, type, image }) => {
  const handleClick = () => {
    const formattedType = type.replace(/\s+/g, "").toLowerCase();
    const url = searchQuery
      ? `/part/${formattedType}/${searchQuery}`
      : `/parts/${formattedType}`;

    // Open the URL in a new tab if searchQuery exists, otherwise open in the same tab
    if (searchQuery) {
      window.open(url, "_blank");
    } else {
      window.location.href = url; // Opens in the same tab
    }
  };

  return (
    <div
      onClick={handleClick}
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
    </div>
  );
};

export default Card;
