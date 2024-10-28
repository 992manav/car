import React, { useState } from "react";
import logo from "../assets/logo.png";
import Links from "./Links";
const Navbar = ({ loggedin }) => {
  return (
    <header className="flex justify-between items-center bg-black bg-opacity-50">
      <div className="text-2xl font-bold px-5 bg-red-700 w-2/5 h-[85px]">
        <img
          className="h-16 w-40 border border-white rounded-lg mt-[0.1rem]"
          src={logo}
          alt="Logo"
        />
      </div>
      <Links />
    </header>
  );
};

export default Navbar;
