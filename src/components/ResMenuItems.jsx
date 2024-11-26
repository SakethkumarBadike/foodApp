import { useState } from "react";
import cloudinaryURL from "../utils/constants/cloudinaryURL";
 import { useDispatch } from "react-redux";
 import { addItem } from "../utils/cart.slice.js";
const ResMenuItems = ({ data, showItems }) => {
  const dispatch=useDispatch();
  const handler=(item)=>{
    dispatch(addItem(item));
  }
  return (
    <div>
      <div onClick={showItems}>
        {data?.map((det) => {
          return (
            <div
              key={det?.card?.info?.id}
              className=" h-36 w-full flex items-center bg-white justify-between px-5 border-b-2"
            >
              <div className="w-9/12">
                <h3 className="text-lg">{det?.card?.info?.name}</h3>
                <h4>₹{det?.card?.info?.price || det?.card?.info?.defaultPrice  / 100}</h4>
                <h5 className="text-xs font-medium text-slate-400">
                  {det?.card?.info?.description}
                </h5>
              </div>
              <div className=" w-3/12 h-3/4 my-2  object-fill p-3 overflow-clip">
              <div className="relative">
              <img 
                src={`${cloudinaryURL}${det?.card?.info?.imageId}`}
                alt=""
              />
              <button onClick={()=>{handler(det)}} className="text-green-300 border-2 bg-black border-green-300 top-0 absolute">Add to Cart</button>
              </div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ResMenuItems;
