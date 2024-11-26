import { Link } from "react-router-dom";
import cloudinaryURL from "../../utils/constants/cloudinaryURL";

const RestaurantCard=({
    data
})=>{
    return(
    <Link to={`/${data.info.id}`}>
        <div className=" border-2 p-3 ml-4">
        <div className=" rounded-2xl w-64 h-48 overflow-hidden  ">
            <img className="object-cover h-48 w-64" src={`${cloudinaryURL}${data.info.cloudinaryImageId}`} alt="" />
            
        </div>
        <h1 className=" mt-2 w-64 text-lg font-medium text-ellipsis overflow-hidden">
         {data.info.name}
        </h1>
        <div className=" my-1 w-64 text-slate-500  text-ellipsis overflow-hidden">           
               {data.info.cuisines.join(",")}
        </div>
        <h2 className=" text-slate-500 w-64 text-ellipsis overflow-hidden ">
            {
                data.info.locality.toUpperCase()
            }
        </h2>
        
        </div></Link>
    )
}
export default RestaurantCard;