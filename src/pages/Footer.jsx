import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full pt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative">
              Exterior
              <span className="absolute left-0 bottom-[-10px] bg-pink-500 h-0.5 w-12"></span>
            </h4>
            <ul>
              <li className="mb-3 cursor-pointer">
                <a
                  href="tyre.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Tyre
                </a>
              </li>
              <li className="mb-3 cursor-pointer">
                <a
                  href="alloyWheel.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Alloy Wheel
                </a>
              </li>
              <li className="mb-3 cursor-pointer">
                <a
                  href="headlight.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Headlight
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative">
              Interior
              <span className="absolute left-0 bottom-[-10px] bg-pink-500 h-0.5 w-12"></span>
            </h4>
            <ul>
              <li className="mb-3 cursor-pointer">
                <a
                  href="seatCover.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Seat Cover
                </a>
              </li>
              <li className="mb-3 cursor-pointer">
                <a
                  href="carFloorMats.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Car Floor-Mats
                </a>
              </li>
              <li className="mb-3 cursor-pointer">
                <a
                  href="speakers.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Speakers
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative">
              Company
              <span className="absolute left-0 bottom-[-10px] bg-pink-500 h-0.5 w-12"></span>
            </h4>
            <ul>
              <li className="mb-3  cursor-pointer">
                <a
                  href="aboutus"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  About Us
                </a>
              </li>
              <li className="mb-3 cursor-pointer">
                <a
                  href="contact.html"
                  className="text-gray-300 font-normal hover:text-pink-300 transition-all"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
            <h4 className="text-white text-xl font-semibold mb-6 relative">
              Follow Us
              <span className="absolute left-0 bottom-[-10px] bg-pink-500 h-0.5 w-12"></span>
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="text-white w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
              >
                <FaLinkedinIn />
              </a>
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
            <a
              href="https://www.instagram.com/raghavmaheshwari03/"
              className="text-white hover:text-pink-500 ml-1"
              target="__blank"
            >
              Raghav
            </a>
            ,
            <a
              href="https://www.instagram.com/hardik.sh_/"
              className="text-white hover:text-pink-500 ml-1"
              target="__blank"
            >
              Hardik
            </a>
            ,
            <a
              href="https://www.instagram.com/vilanshsharma/"
              className="text-white hover:text-pink-500 ml-1"
              target="__blank"
            >
              Vilansh
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
