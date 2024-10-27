import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/Preloader.jsx";
import car from "../assets/car.png";
import Navbar from "../components/Navbar"; // Import your new Navbar component
import MainContent from "../components/MainContent";
import animatecar from "../assets/animatecar.png";
import brake from "../assets/brake.png";
import accelarator from "../assets/accelarator.png";
import ServiceSection from "../components/ServiceSection";
import PartnersSection from "../components/PartersSection";
import KnowMore from "../components/KnowMore";
import AllParts from "./AllParts.jsx";
const Home = () => {
  const navigate = useNavigate();
  const [loggedin, setLoggedin] = useState(false); // Adjust this state as needed

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar loggedin={loggedin} />

      {/* Main Section */}
      <section className="relative ">
        {/* Red and Black Split Background */}
        <div className="flex ">
          <div className="w-2/5 font-dm bg-red-700 flex justify-end h-screen text-[160px] tracking-widest pt-2">
            Aut
          </div>
          <div className="w-3/5 font-dm bg-black flex justify-start h-screen text-[160px] text-white tracking-widest pt-2">
            oShow
          </div>
        </div>

        {/* Car Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-full max-w-4xl z-10">
          <img src={car} alt="Car" className="w-full object-cover -mb-24" />
        </div>
      </section>
      <section className="w-full">
        <MainContent />
      </section>
      <div className="fixed bottom-0 right-0 flex">
        <img
          src={brake}
          alt="Brake"
          className="w-18 h-28 mr-6 object-cover bg-transparent z-60 transition-transform duration-1000 cursor-pointer"
          onClick={() => window.scrollBy({ top: 300, behavior: "smooth" })}
        />
        <img
          src={accelarator}
          alt="Accelerator"
          className="w-18 h-28 mr-6 object-cover bg-transparent z-60 transition-transform duration-1000 cursor-pointer"
          onClickCapture={() =>
            window.scrollBy({ top: -300, behavior: "smooth" })
          }
        />
      </div>
      <section>
        <ServiceSection />
      </section>
      <section id="allparts">
        <AllParts />
      </section>
      <section>
        <PartnersSection />
      </section>
      <section>
        <KnowMore />
      </section>
    </div>
  );
};

export default Home;
