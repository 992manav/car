import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropDownMenu"; // Ensure this path is correct
import "font-awesome/css/font-awesome.min.css";
import logo from "../assets/logo.png";
const Navbar = ({ loggedin }) => {
  const navigate = useNavigate();

  const [isExteriorOpen, setIsExteriorOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);

  const handleMouseEnterExterior = () => setIsExteriorOpen(true);
  const handleMouseLeaveExterior = () => setIsExteriorOpen(false);
  const handleMouseEnterInterior = () => setIsInteriorOpen(true);
  const handleMouseLeaveInterior = () => setIsInteriorOpen(false);

  const interiorItems = [
    { label: "Seat Cover", onClick: () => navigate("part/seatcover") },
    { label: "Car Floor Mats", onClick: () => navigate("part/mats") },
    { label: "Speakers", onClick: () => navigate("part/speaker") },
    { label: "Dashcam", onClick: () => navigate("part/dashcam") },
  ];

  const exteriorItems = [
    {
      label: "Tyre",
      onClick: () => navigate(`part/tyres`),
    },
    { label: "Alloy Wheel", onClick: () => navigate("part/alloywheels") },
    { label: "Headlight", onClick: () => navigate("part/headlights") },
    // { label: "Car Wraps", onClick: () => navigate("part/carwraps") },
  ];

  const handleNavigation = () => {
    if (!loggedin) {
      navigate("/signup");
    }
  };

  const gotoCart = () => {
    navigate("/cart");
  };

  const gotoAboutUs = () => {
    navigate("/aboutus");
  };

  return (
    <header className="flex justify-between items-center bg-black bg-opacity-50">
      <div className="text-2xl font-bold px-5 bg-red-700 w-2/5 h-[85px]">
        <img
          className="h-16 w-40 border border-white rounded-lg mt-[0.1rem]"
          src={logo}
          alt="Logo"
        />
      </div>
      <nav>
        <ul className="flex space-x-6 px-5 font-roboto text-sm">
          <li className="hover:text-gray-300 mt-8 cursor-pointer">Home</li>
          <DropdownMenu
            title="Interior"
            items={interiorItems}
            isOpen={isInteriorOpen}
            onMouseEnter={handleMouseEnterInterior}
            onMouseLeave={handleMouseLeaveInterior}
          />
          <DropdownMenu
            title="Exterior"
            items={exteriorItems}
            isOpen={isExteriorOpen}
            onMouseEnter={handleMouseEnterExterior}
            onMouseLeave={handleMouseLeaveExterior}
          />
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer"
            onClick={gotoAboutUs}
          >
            About Us
          </li>
          <li className="hover:text-gray-300 mt-8 cursor-pointer">
            Contact Us
          </li>
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer"
            onClick={gotoCart}
          >
            <i className="fa-solid fa-cart-shopping text-2xl"></i>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <button
              className="bg-black mt-6 py-2 rounded-md text-sm font-medium"
              onClick={handleNavigation}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
