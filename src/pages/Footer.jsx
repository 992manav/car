import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="bg-black w-full pt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          {/* Exterior Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Exterior
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <ul>
              {["Tyre", "Alloy Wheel", "Headlight"].map((item) => (
                <li key={item} className="mb-3 cursor-pointer">
                  <a
                    href={`${item.toLowerCase().replace(" ", "")}.html`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Interior
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <ul>
              {["Seat Cover", "Car Floor-Mats", "Speakers"].map((item) => (
                <li key={item} className="mb-3 cursor-pointer">
                  <a
                    href={`${item.toLowerCase().replace(" ", "")}.html`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Company
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <ul>
              {["About Us", "Contact Us"].map((item) => (
                <li key={item} className="mb-3 cursor-pointer">
                  <a
                    href={`${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative group cursor-pointer">
              Follow Us
              <span className="absolute left-0 bottom-[-10px] bg-red-500 h-0.5 w-12 transition-all duration-300 group-hover:w-24"></span>
            </h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaWhatsapp />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-white w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-red-600 transition-all transform hover:scale-110 duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center text-gray-400 pb-3">
          <h5>
            <a href="#" className="text-white">
              🌐
            </a>{" "}
            Copyright © 2024 AutoShow All Rights Reserved
          </h5>
          <small className="text-sm">
            ♥ Built By
            {["Raghav", "Hardik", "Vilansh"].map((name, index) => (
              <a
                key={index}
                href={`https://www.instagram.com/${name.toLowerCase()}_/`}
                className="text-white hover:text-red-500 ml-1"
                target="__blank"
              >
                {name}
              </a>
            ))}
          </small>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
