import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-20 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-3xl font-bold">
          Welcome to the <br /> Department of Computer Engineering,
        </h1>
        <p className="italic text-gray-400 mt-2">
          Government Polytechnic, Nagpur
        </p>
        <button className="mt-5 bg-white text-black px-4 py-2 rounded">
          Explore Posts
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center">
        <img src="/robot.png" alt="Hero Image" className="w-60" />
      </div>
    </section>
  );
};

export default HeroSection;
