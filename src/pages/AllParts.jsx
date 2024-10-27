import React, { useState } from "react";
import Exterior from "../components/Exterior";
import Interior from "../components/Interior";

const AllParts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [renderKey, setRenderKey] = useState(Date.now()); // Key to trigger re-render

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Searching for:", searchQuery);

    setRenderKey(Date.now()); // Update key to force re-render
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center bg-red-600 rounded-lg">
      <h1 className="text-5xl font-bold text-center mb-8 text-black">
        All Parts
      </h1>
      <div className="flex items-center w-full max-w-md mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by Car model..."
          className="flex-1 p-3 rounded-l-lg bg-gray-800 text-white text-lg"
        />
        <button
          onClick={handleSearchClick}
          className="p-3 rounded-r-lg bg-blue-500 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            viewBox="0 0 25 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l4.38 4.37a1 1 0 11-1.42 1.42l-4.37-4.38zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <h2 className="text-lg text-center mb-6 max-w-2xl text-black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, officiis
        autem possimus maiores tenetur ullam enim expedita doloribus atque
        consectetur accusantium ipsa quidem sed. Modi nobis expedita minus
        debitis animi.
      </h2>
      <div className="w-full max-w-4xl space-y-6" key={renderKey}>
        <Exterior searchQuery={searchQuery} />
        <Interior searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default AllParts;
