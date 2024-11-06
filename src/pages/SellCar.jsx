import React, { useState } from "react";
import { motion } from "framer-motion";

function SellCar() {
  const [formType, setFormType] = useState(""); // "car" or "sparePart"

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  return (
    <div
      className="min-h-screen bg-black text-black flex flex-col items-center justify-center p-8 w-screen"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/09/52/66/45/360_F_952664596_cBLm1WS8UKxuo1Vnapq27kPXV2XcNU3H.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-4xl font-extrabold text-center shadow-lg">
          Wanna Sell Your Car?
        </h1>
        <motion.button
          onClick={() => handleFormTypeChange("car")}
          className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Sell Car
        </motion.button>
        <motion.button
          onClick={() => handleFormTypeChange("sparePart")}
          className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Sell Spare Part
        </motion.button>
      </motion.div>

      {formType && (
        <motion.form
          className="w-full max-w-2xl p-8  rounded-lg shadow-2xl space-y-6 backdrop-blur-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-red-500 text-center">
            {formType === "car" ? "Car Details" : "Spare Part Details"}
          </h3>

          {formType === "car" && (
            <>
              <label className="block">
                <span className="text-white font-semibold">
                  Registration Number:
                </span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Brand:</span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Model:</span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Total Kilometers:
                </span>
                <input
                  type="number"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Car Photos:</span>
                <input
                  type="file"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300"
                  multiple
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Expected Price:
                </span>
                <input
                  type="number"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
            </>
          )}

          {formType === "sparePart" && (
            <>
              <label className="block">
                <span className="text-white font-semibold">
                  Spare Part Name:
                </span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Category:</span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Brand:</span>
                <input
                  type="text"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Spare Part Photo:
                </span>
                <input
                  type="file"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">Price:</span>
                <input
                  type="number"
                  className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="block">
                <span className="text-white font-semibold">
                  Specifications:
                </span>
                <textarea className="w-full mt-2 p-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              </label>
            </>
          )}
          <motion.button
            type="submit"
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-green-700 transition mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Submit
          </motion.button>
        </motion.form>
      )}
    </div>
  );
}

export default SellCar;
