import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Table = () => {
  const [items, setItems] = useState([]);

  const handleBidClick = (e) => {
    e.classList.add('bg-red-500')
  }

  useEffect(() => {
    fetch("Items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <table className="bg-white rounded-t-xl">
        <thead className="h-16 ">
          <tr>
            <th className="w-80 indent-3 border-2 border-black">Items</th>
            <th className="w-32 indent-3 border-2 border-black">Current Bid</th>
            <th className="w-32 indent-3 border-2 border-black">Time Left</th>
            <th className="w-32 indent-3 border-2 border-black">Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="h-16">
              <td className="w-32 indent-3 border-2 border-black ">
                <div className="flex gap-4 items-center pl-2">
                  <img className="w-16" src={item.image} alt={item.title} />
                  {item.title}
                </div>
              </td>
              <td className="w-32 indent-3 border-2 border-black">
                {item.currentBidPrice}
              </td>
              <td className="w-32 indent-3 border-2 border-black">
                {item.timeLeft}
              </td>
              <td className="w-32 indent-3 border-2 border-black place-items-center">
              <FaRegHeart onClick={(event) => handleBidClick(event.target)} size={25}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
