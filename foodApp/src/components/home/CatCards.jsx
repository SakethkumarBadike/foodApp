import useHomeData from "../../hooks/useHomeData.js";
import url from "../../utils/constants/url.js"
import ResData from "../../utils/constants/cards.json"
const CatCards=({Data})=>{
      const resData=Data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      // console.log(resData)
    return(
        <div className="m-5 ">
        <h1 className="font-bold w-full text-3xl">{Data?.data?.cards[0]?.card?.card?.header?.title}</h1>
     <div className=" w-full flex flex-nowrap whitespace-nowrap flex-shrink-0 h-36 my-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
       {resData?.map((elem)=>(
        <div key={elem?.id} className=" w-auto mr-5 rounded-full">
            <div className="w-36 h-36 ">
         <img className="rounded-full object-center h-36" src={`${url}${elem.imageId}`} alt={`${url}${elem.imageId}`} /></div>
        </div>
       ))}

     </div> 
     </div>

    )
}
export default CatCards;