import { useState } from "react";
import useHomeData from "../../hooks/useHomeData";
import RestaurantCard from "./RestaurantCard.jsx";
import ResData from "../../utils/constants/cards.json"

const ResCards=({Data})=>{
   //   const Data=ResData;
   //   console.log(Data?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants);
     
      //   console.log(resCards)
     return(
        <>
        <h1 className=" my-5 font-bold text-3xl">{Data?.data?.cards[1]?.card?.card?.header?.title}</h1>
        <div className="w-full flex flex-nowrap whitespace-nowrap flex-shrink-0 my-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
         
           {Data?.map((res)=>(
            <RestaurantCard key={res?.info.id} data={res}/>
        )
     )}
     </div></>
     )
}
export default ResCards;