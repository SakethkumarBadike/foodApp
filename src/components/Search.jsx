import { useState } from "react";
import useHomeData from "../hooks/useHomeData";
import useAllRes from "../hooks/useAllRes";
import ResCards from "./home/ResCards";

const Search=()=>{
    const [items,setItems]=useState([]);
    const [searchText,setSearchText]=useState("");
    const Allres=useAllRes();
    const onclickHandler=(e)=>{
      const filteresRes=Allres?.filter((res)=>(res?.info?.cuisines?.join(",")?.toLowerCase().indexOf(searchText.toLowerCase())>=0))
      console.log(filteresRes)


      setItems(filteresRes);
    }
     return(
        <div>
       <div className="w-1/2 m-auto mt-10 flex  items-center">
             <input className="border-gray-500  rounded-lg p-1 w-3/4  border-2" type="text"  value={searchText} placeholder="Search"  onChange={(e)=>{
                setSearchText(e.target.value);
             }}/>
             <button className=" mx-1 px-2 py-1 hover:bg-orange-400 rounded-xl bg-orange-300 " onClick={onclickHandler}>search</button>
       </div>
          <ResCards Data={items}/>
       </div>
    )
}
export default Search;