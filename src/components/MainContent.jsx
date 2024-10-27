import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-full bg-white pt-20 px-3 py-7">
      <div className="flex">
        <div className="flex flex-col item-center justify-start">
          <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">
            We Provide the Best Solutions for EV Vehicles
          </h1>
        </div>
        <p className="text-center mb-8 text-gray-600 text-lg max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full px-4 mt-10">
        <Section title="Online Appointment" />
        <Section title="Auto Rent Services" />
        <Section title="Brake Check & Services" />
        <Section title="Best Prices in District" />
      </div>
    </div>
  );
};

const Section = ({ title }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        <i className="glyph-icon flaticon-travel"></i>
        {title}
      </h2>
      <p className="text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
      </p>
      <a
        href="#"
        className="inline-block text-red-600 hover:text-blue-800 font-medium transition duration-200"
      >
        Read More →
      </a>
    </div>
  );
};

export default MainContent;
