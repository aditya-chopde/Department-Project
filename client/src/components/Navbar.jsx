import React from "react";
import { images } from "../assets/exports";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-around my-5">
        <div className="hover:cursor-pointer">
          <img src={images.logo} alt="logo_images" className="invert w-11" />
        </div>
        <div>
          <ul className="flex flex-row gap-5 items-center">
            <li className="hover:cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:cursor-pointer"><Link to="/posts">Posts</Link></li>
            <li className="btn"><Link to="/login">Login</Link></li>
            <li className="btn btn-soft btn-primary"><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
