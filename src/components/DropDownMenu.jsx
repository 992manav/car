import React from "react";
import "font-awesome/css/font-awesome.min.css";

const DropdownMenu = ({ title, items, isOpen, onMouseEnter, onMouseLeave }) => (
  <li
    className="dropdown inline-block mr-5 relative"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <a
      href={`/allparts`}
      className="bg-transparent text-white py-8 cursor-pointer flex items-center"
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("allparts")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {title} <i className="fas fa-caret-down ml-2"></i>
    </a>
    {isOpen && (
      <ul className="absolute left-0 bg-white text-left min-w-[160px] shadow-lg rounded-2xl z-50">
        {items.map((item) => (
          <li key={item.label}>
            <div
              onClick={item.onClick}
              className="block py-3 px-4 text-black cursor-pointer hover:text-blue-700"
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default DropdownMenu;
