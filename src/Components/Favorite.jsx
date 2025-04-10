import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast, Bounce} from "react-toastify";

function Favorite({items, addedItems, setItems,  setAddedItems}) {
    let totalAmount = "0000";
    
    addedItems?.forEach((item) => totalAmount = Number(totalAmount) + item.currentBidPrice);

    const notifyRemove = () => toast.warn("Item removed from favorite items",
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
    
    const handleRemoveItems = (itemId) => {
        const allItems = items.map(comp => {
            if(comp.id === itemId) {
                return {...comp, "isClicked": false}
            }
            return comp;
        })
        setItems(allItems);
    }

    const removeHandler = (btnId) => {
        handleRemoveItems(btnId.id);
        const existingItems = addedItems.filter(e => e.id !== btnId.id);
        setAddedItems(existingItems);
        notifyRemove()
    }
    return (
        <div className="bg-white rounded-xl">
            <div className="w-full border-b-2 border-gray-300 p-5 sora flex gap-5 justify-center items-center">
            <FaRegHeart size={25} />
            <h1 className="font-normal text-xl text-shadow-blue-950">Favorite Items</h1>
            </div>
            <div>
                {
                    addedItems?.length <= 0 ? 
                    <div className="space-y-5 text-center sora px-5 py-9 border-b-2 border-gray-300">
                        <h1 className="font-medium text-lg text-black">No favorites yet</h1>
                        <p className="font-normal text-sm text-gray-700">Click the heart icon on any item to add it to your favorites</p>
                    </div> : 
                    addedItems?.map(ele => (
                            <div key={ele.id} className="p-5 flex border-b-2 border-gray-300 justify-between items-start sora font-medium text-sm text-blue-900 gap-5">
                                <div>
                                <img className="w-16 h-16 object-cover" src={ele.image} alt="" />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="">{ele.title}</h1> 
                                    <div className="flex justify-between">
                                        <h1>${ele.currentBidPrice}</h1>
                                        <h1>Bids: {ele.bidsCount}</h1>
                                    </div>
                                </div>  
                                <div>
                                    <button className="cursor-pointer" onClick={() => removeHandler(ele)}><RxCross2 size={25}/></button>    
                                </div>  
                            </div>
                        ))
                    
                }
            </div>
            <div className="p-5 sora flex justify-between items-center">
                <h1 className="font-normal text-lg text-black">Total bids Amount</h1> 
                <h1 className="font-normal text-lg text-black">
                    ${totalAmount}
                </h1>
            </div>
        
        </div>
    )
}

export default Favorite;