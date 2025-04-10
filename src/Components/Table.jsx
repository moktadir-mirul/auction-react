import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast, Bounce} from "react-toastify";
import Favorite from "./Favorite";

const Table = ({ addedItems, setAddedItems }) => {
  const [items, setItems] = useState([]);

  const notify = () => toast("Item successfully added to favorite items", 
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      }
  );

  const handleBidClick = (element) => {
    setAddedItems([...addedItems, element]);
    const updatedItems = items.map((item) => {
      if (item.id === element.id) {
        return { ...item, isClicked: true };
      }
      return item;
    });
    setItems(updatedItems);
    notify();
  };

  
  
  useEffect(() => {
    fetch("Items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-start gap-5">
      <div>
      <table className="bg-white rounded-t-xl">
        <thead className="h-16 ">
          <tr>
            <th className="w-80 text-center border-b-2 border-gray-300">
              Items
            </th>
            <th className="w-32 text-center border-b-2 border-gray-300">
              Current Bid
            </th>
            <th className="w-32 text-center border-b-2 border-gray-300">
              Time Left
            </th>
            <th className="w-32 text-center border-b-2 border-gray-300">
              Bid Now
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="h-20">
              <td className="w-32 border-t-2 border-gray-300">
                <div className="flex gap-4 items-center pl-2">
                  <img
                    className="w-16 h-16 p-2 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <h1 className="text-left sora text-blue-950 text-base font-normal">
                    {item.title}
                  </h1>
                </div>
              </td>
              <td className="w-32 text-center border-t-2 border-gray-300 sora text-blue-950 text-base font-normal">
                ${item.currentBidPrice}
              </td>
              <td className="w-32 text-center border-t-2 border-gray-300 sora text-blue-950 text-base font-normal">
                {item.timeLeft}
              </td>
              <td className="w-32 text-center border-t-2 border-gray-300 place-items-center sora text-blue-950 text-base font-normal">
                <button>
                  {item.isClicked === false ? (
                    <FaRegHeart
                      onClick={() => handleBidClick(item)}
                      className="cursor-pointer"
                      size={25}
                    />
                  ) : (
                    <FaHeart
                      className="cursor-not-allowed"
                      color={"red"}
                      size={25}
                    />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="basis-[100%] md:basis-[35%]">
        <Favorite addedItems={addedItems} setAddedItems={setAddedItems} items={items} setItems={setItems}/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Table;