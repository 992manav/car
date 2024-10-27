import React from "react";

function PartnersSection() {
  const logoUrl =
    "https://img.freepik.com/premium-vector/car-logo-vector-design-sketch_501705-4.jpg";

  return (
    <div className="bg-white py-12 text-gray-500">
      <h2 className="text-center text-xl font-semibold mb-8">
        -------------------------OUR PARTNERS & SUPPORTERS------------------
      </h2>
      <div className="grid grid-cols-5 gap-8 justify-items-center">
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Company 1 Logo" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Company 2 Logo" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Company 3 Logo" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Company 4 Logo" className="w-40 h-auto" />
        </div>
        <div className="flex flex-col items-center">
          <img src={logoUrl} alt="Company 5 Logo" className="w-40 h-auto" />
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
