import React from "react";
import { images } from "../../assets/exports";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-around my-5">
      <div className="hover:cursor-pointer">
        <img src={images.logo} alt="logo_images" className="invert w-11" />
      </div>
      <div>
        <ul className="flex flex-row gap-5 items-center">
          <li className="hover:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/posts">Past Posts</Link>
          </li>
          <li>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
