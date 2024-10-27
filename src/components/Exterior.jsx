import React, { useEffect, useState } from "react";
import Card from "./Card";
import Preloader from "./Preloader";

async function getExteriorParts() {
  try {
    const response = await fetch(
      "https://carretailerbackend.vercel.app/api/getparttypes"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch parts");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of error
  }
}

const Exterior = ({ searchQuery }) => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const data = await getExteriorParts();
        setParts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false); // Set loading to false after a delay
        }, 1000); // Adjust the delay time as needed
      }
    };
    fetchParts();

    return () => clearTimeout(); // Clean up the timeout
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-red-400 w-[350px]   ">
          <Preloader />
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col items-center pb-3 mb-3">
            <h1 className="text-3xl font-bold text-black">Exteriors</h1>
            <h2 className="border-2 w-36 mr-2 border-red-500 rounded-full"></h2>
          </div>
          <div className="grid grid-cols-4 gap-3 justify-evenly pb-10">
            {parts.map((part) => {
              if (part.where === "exterior") {
                return (
                  <Card
                    searchQuery={searchQuery}
                    key={part._id}
                    _id={part._id}
                    type={part.type.replace(/\b\w/g, (char) =>
                      char.toUpperCase()
                    )}
                    image={part.image}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="border border-gray-400 mb-10"></div>
        </div>
      )}
    </>
  );
};

export default Exterior;
