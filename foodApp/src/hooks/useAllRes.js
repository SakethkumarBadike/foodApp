import useHomeData from "./useHomeData";


const useAllRes=()=>{
    const Data=useHomeData();
   return Data?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants
}
export default useAllRes;