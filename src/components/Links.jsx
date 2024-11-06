import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../components/DropDownMenu"; // Ensure this path is correct
import "font-awesome/css/font-awesome.min.css";

const Links = ({ loggedin }) => {
  const navigate = useNavigate();

  const [isExteriorOpen, setIsExteriorOpen] = useState(false);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);

  const handleMouseEnterExterior = () => setIsExteriorOpen(true);
  const handleMouseLeaveExterior = () => setIsExteriorOpen(false);
  const handleMouseEnterInterior = () => setIsInteriorOpen(true);
  const handleMouseLeaveInterior = () => setIsInteriorOpen(false);

  const interiorItems = [
    { label: "Speakers", onClick: () => navigate("parts/speakers") },
    {
      label: "Steering Covers",
      onClick: () => navigate("parts/steeringcovers"),
    },
    { label: "Mats", onClick: () => navigate("parts/mats") },
    { label: "Seat Covers", onClick: () => navigate("parts/seatcovers") },
    { label: "Arm Rests", onClick: () => navigate("parts/armrests") },
    { label: "Headrests", onClick: () => navigate("parts/headrests") },
    { label: "Car Batteries", onClick: () => navigate("parts/carbatteries") },
    { label: "Dash Cam", onClick: () => navigate("parts/dashcams") },
    { label: "First Aid Kits", onClick: () => navigate("parts/firstaidkits") },
    {
      label: "Catalytic Converters",
      onClick: () => navigate("parts/catalyticconverters"),
    },
  ];

  const exteriorItems = [
    {
      label: "Tyre",
      onClick: () => navigate(`parts/tyres`),
    },
    { label: "Alloy Wheel", onClick: () => navigate("parts/alloywheels") },
    { label: "Headlight", onClick: () => navigate("parts/headlights") },
    { label: "Car Covers", onClick: () => navigate("parts/carcovers") },
    { label: "Windshields", onClick: () => navigate("parts/Windshields") },
    { label: "Car Wraps", onClick: () => navigate("parts/carwraps") },
    { label: "Front Bumpers", onClick: () => navigate("parts/frontbumpers") },
    { label: "Rear Bumpers", onClick: () => navigate("parts/rearbumpers") },
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

  const gotoContactUs = () => {
    navigate("/contactus");
  };

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full  flex items-end justify-end">
      <nav className=" ">
        <ul className="flex space-x-6  font-roboto text-xs sm:text-sm mr-8">
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer hidden md:flex"
            onClick={gotoHome}
          >
            Home
          </li>
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
          <li
            className="hover:text-gray-300 mt-8 cursor-pointer"
            onClick={gotoContactUs}
          >
            Contact Us
          </li>
          <li
            className="mt-1 cursor-pointer relative rounded-full border border-gray-400 p-1 flex items-center justify-center"
            onClick={gotoCart}
          >
            <i className="hover:text-white fa-solid fa-cart-shopping text-lg sm:text-xl text-gray-300"></i>
            <span className="absolute mt-3 top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </li>

          <li className="hover:text-gray-300 cursor-pointer">
            <button
              className="bg-black mt-5 py-2 rounded-md text-xs sm:text-sm font-medium mr-1"
              onClick={handleNavigation}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Links;
