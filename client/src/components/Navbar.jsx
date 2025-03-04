import React from "react";
import { images } from "../assets/exports";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-around my-5">
        <div className="hover:cursor-pointer">
          <img src={images.logo} alt="logo_images" className="invert w-11" />
        </div>
        <div>
          <ul className="flex flex-row gap-5 items-center">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Posts</li>
            <li className="btn">Login</li>
            <li className="btn btn-soft btn-primary">Signup</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
