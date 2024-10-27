import React from "react";
import Exterior from "../components/Exterior";
import Interior from "../components/Interior";

const AllParts = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center bg-red-600 rounded-lg ">
      <h1 className="text-5xl font-bold text-center mb-8 text-black">
        All Parts
      </h1>
      <h2 className="text-lg text-center mb-6 max-w-2xl text-black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, officiis
        autem possimus maiores tenetur ullam enim expedita doloribus atque
        consectetur accusantium ipsa quidem sed. Modi nobis expedita minus
        debitis animi.
      </h2>
      <div className="w-full max-w-4xl space-y-6">
        <Exterior />
        <Interior />
      </div>
    </div>
  );
};

export default AllParts;
