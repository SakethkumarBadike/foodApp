import CatCards from "./CatCards";
import ResCards from "./ResCards";
import useHomeData from "../../hooks/useHomeData";
import Shimmer from "../Shimmer";
const Home=()=>{
   const Data=useHomeData();
   const resCards=Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
 return(<>
 
   {resCards? <div className="w-3/4 m-auto">
    <CatCards Data={Data}/>
    <div className=" h-0.5 w-full bg-slate-200"></div>
    <ResCards Data={resCards}/>
        
    </div>:<Shimmer/>}
    
    
    </>
    
 )
}
export default Home;