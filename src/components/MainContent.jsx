import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const MainContent = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "We Provide the Best Solutions for EV Vehicle";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white pt-20 px-3 py-7">
      <div className="flex">
        <div className="mt-2 flex flex-col items-center justify-start text-black text-5xl font-bold text-center mb-6 text-gray-800">
          <Typewriter
            words={[text]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className="text-center mb-8 text-gray-600 text-lg max-w-xl mt-10">
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-white border border-gray-200 rounded-lg p-6 shadow-inner transition-shadow duration-300 ${
        isHovered ? "bg-gray-50 shadow-2xl scale-105" : "shadow-inner"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.07 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        <i className="glyph-icon flaticon-travel"></i>
        {title}
      </h2>
      <p className="text-gray-500 mb-4 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <motion.button
        className="inline-block text-red-600 hover:text-blue-800 font-medium transition duration-200"
        initial={{ x: 0 }} // Initial position
        animate={{ x: isHovered ? 10 : -110 }} // Animate based on hover state
        transition={{ type: "tween", duration: 0.1 }}
      >
        <motion.span
          initial={{ x: 0 }} // Initial position
          animate={{ x: isHovered ? 10 : -120, opacity: isHovered ? 1 : 0 }} // Animate based on hover state
          transition={{ type: "tween", duration: 0.2 }}
        >
          Read More
        </motion.span>{" "}
        →
      </motion.button>
    </motion.div>
  );
};

export default MainContent;
