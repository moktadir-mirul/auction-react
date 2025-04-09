import React from "react";
import { FaRegBell } from "react-icons/fa";

function Navbar() {
  return (
    <div className="pop flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center w-[90%] py-5 mx-auto">
      <div>
        <h1 className="font-semibold text-xl md:text-2xl text-blue-800">
          AUCTION<span className="text-amber-300">GALLERY</span>
        </h1>
      </div>
      <div className="list-none flex flex-col md:flex-row gap-5 justify-center font-medium text-base">
        <li className="hover:scale-110 duration-200">
          <a href="#">Home</a>
        </li>
        <li className="hover:scale-110 duration-200">
          <a href="#">Auctions</a>
        </li>
        <li className="hover:scale-110 duration-200">
          <a href="#">Categories</a>
        </li>
        <li className="hover:scale-110 duration-200">
          <a href="#">How to works</a>
        </li>
      </div>
      <div className="flex items-center gap-5">
        <div className="p-2 rounded-full bg-blue-100 hover:scale-110 duration-200">
        <FaRegBell size={26}/>
        </div>
        <div className="avatar">
          <div className="w-12 rounded-full hover:scale-110 duration-200">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
