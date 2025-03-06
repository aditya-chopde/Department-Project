import React from "react";
import { images } from "../../assets/exports";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row justify-around my-5">
      <div className="hover:cursor-pointer">
        <img src={images.logo} alt="logo_images" className="invert w-11" />
      </div>
      <div>
        <ul className="flex flex-row gap-5 items-center">
          <li className="hover:cursor-pointer">
            <Link to="/admin-dashboard">Home</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/admin-dashboard/login-requests">Login Requests</Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="/admin-dashboard/past-posts">Posts Requests</Link>
          </li>
          <li>
            <div className="avatar hover:cursor-pointer" onClick={()=> navigate("/")}>
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
