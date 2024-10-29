import React, { useState } from "react";
import logo from "../assets/logo.png";
import Links from "./Links";
const Navbar = ({ loggedin }) => {
  return (
    <header className="flex justify-between items-center bg-transparent bg-opacity-50">
      <div className="text-1xl font-bold px-5 bg-red-700 w-3/5 h-16 py-1 mr-6 ">
        <img
          className="h-14 w-40 border border-white rounded-lg "
          src={logo}
          alt="Logo"
        />
      </div>

      <Links />
    </header>
  );
};

export default Navbar;
