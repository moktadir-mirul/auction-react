import React from "react";

function Footer() {
  return (
    <div className="w-full bg-white py-16 flex flex-col justify-center items-center">
      <div className="space-y-5">
        <h1 className="pop font-semibold text-xl md:text-2xl text-blue-800">
          AUCTION<span className="pop text-amber-300 font-bold">GALLERY</span>
        </h1>
        <div className="list-none text-xl flex gap-5 justify-center font-medium">
            <li>Bid.</li>
            <li>Win.</li>
            <li>Own.</li>
        </div>
      </div>
      <div className="list-none flex flex-col md:flex-row justify-center gap-6 md:gap-12 pt-5 sora font-normal text-lg">
        <li className="hover:scale-110 duration-200 cursor-pointer">Home</li>
        <li className="hover:scale-110 duration-200 cursor-pointer">Auctions</li>
        <li className="hover:scale-110 duration-200 cursor-pointer">Categories</li>
        <li className="hover:scale-110 duration-200 cursor-pointer">How to works</li>
      </div>
      <div className="pt-6 sora text-sm font-normal">
        © 2025 AuctionHub. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
