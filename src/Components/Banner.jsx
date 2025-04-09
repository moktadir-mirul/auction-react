import React from "react";

function Banner() {
  return (
    <div className="bn-bg sora w-full h-[500px] text-white">
      <div className="px-5 md:px-20 flex flex-col w-full h-[500px] items-center md:items-start justify-center gap-5">
        <h1 className="font-semibold text-4xl">Bid on Unique Items from <br /> Around the World</h1>
        <p className="text-xl font-light text-gray-400">
          Discover rare collectibles, luxury goods, and vintage <br /> treasures in our
          curated auctions
        </p>
        <button className="py-3 px-10 w-60 rounded-4xl bg-white text-black font-bold text-lg hover:bg-gray-400 duration-200">Explore Auctions</button>
      </div>
    </div>
  );
}

export default Banner;
