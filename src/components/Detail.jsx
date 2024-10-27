import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { part } = location.state || {};
  const [currentView, setCurrentView] = React.useState("overview");

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  let displayText;

  if (currentView === "features") {
    displayText =
      "Features: This car comes equipped with advanced technology, luxurious interiors, and safety features that ensure a smooth driving experience.";
  } else if (currentView === "specifications") {
    displayText =
      "Technical Specifications: Engine: 2.0L I4, Power: 248 hp, Torque: 273 lb-ft, Transmission: 7-speed automatic.";
  } else if (currentView === "information") {
    displayText =
      "General Information: The Audi A4 combines elegance and performance, making it one of the most desirable cars in its class.";
  } else {
    displayText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  }
  return (
    <div className="bg-black flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-4">
      {/* Left Section: Image Gallery */}
      <div className="w-full md:w-3/5 relative">
        {part?.image ? (
          <img
            src={part.image}
            alt={part.name}
            className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
          />
        ) : (
          <p className="text-gray-500">No image available</p>
        )}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg mt-4">
          <div className="flex justify-between mb-4 border-b pb-2">
            <div className="flex space-x-4">
              <button
                onClick={() => handleButtonClick("features")}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-200"
              >
                FEATURES & OPTIONS
              </button>
              <button
                onClick={() => handleButtonClick("specifications")}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-200"
              >
                TECHNICAL SPECIFICATIONS
              </button>
              <button
                onClick={() => handleButtonClick("information")}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-200"
              >
                GENERAL INFORMATION
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="w-full">
              <p className="mt-2 text-gray-300">{displayText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Details */}
      <div className="text-white w-full md:w-2/5 pt-5">
        <h1 className="text-3xl font-bold ">{part?.name || "Car Name"}</h1>
        <p className="text-lg text-gray-300 mt-4 uppercase">
          {part?.model || "Car Model"}
        </p>

        <p className="text-base text-gray-500 mt-4">
          {part
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Sed vitae nisi id arcu facilisis suscipit."
            : "Description not available."}
        </p>
        <p className="text-2xl font-semibold text-red-600 mt-5">
          ₹{part.price}
          {"   "}
          <span className="line-through text-gray-400 ml-3">
            ₹{part.price + 2000}
          </span>
        </p>
        <button className="mt-6  text-white py-2 px-4 rounded-md font-bold shadow-md border-2 border-red-600 hover:bg-red-700 transition-colors duration-300">
          Request More Info
        </button>

        {/* Specifications Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-200">Description</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <strong>Year:</strong> {part?.year || "N/A"}
            </li>
            <li>
              <strong>Make:</strong> {part?.make || "Lorem Ipsum"}
            </li>
            <li>
              <strong>Model:</strong> {part?.model || "A4 Prestige"}
            </li>
            <li>
              <strong>Body Style:</strong> {part?.bodyStyle || "Lorem Ipsum"}
            </li>
            <li>
              <strong>Mileage:</strong> {part?.mileage || "Lorem Ipsum"}
            </li>
            <li>
              <strong>Transmission:</strong>{" "}
              {part?.transmission || "Lorem Ipsum"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
