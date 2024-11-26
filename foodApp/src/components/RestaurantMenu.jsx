import { useParams } from "react-router-dom"
import useResMenu from "../hooks/useResMenu";
import cloudinaryURL from "../utils/constants/cloudinaryURL"
import ResMenuItems from "./ResMenuItems.jsx";
import { useState } from "react";
import RestaurantMenuCat from "./RestaurantMenuCat.jsx";

const RestaurantMenu=()=>{
    const resData=useResMenu();   
    const menuData= resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log(menuData)
    const [visibleItemIndex,setvisibleItemIndex]=useState(null);

    return(
          <div className="w-1/2 m-auto"> 
          <h1 className="font-bold text-3xl my-7">{resData?.data?.cards[0]?.card?.card?.text}</h1>
        <div className="bg-slate-200 font-semibold">
            {
                menuData?.filter((elem,index)=>elem?.card?.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )?.map((elem,index)=>{
                  return  <RestaurantMenuCat key={elem?.card?.card?.itemCards[0]?.card?.info?.id}  elem={elem} showItems={index===visibleItemIndex} onclickHandler={()=>(setvisibleItemIndex((prev=>prev==index?null:index)))} />
        
})
            }  
        </div>
        </div>
    )

}
export default RestaurantMenu;