import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default  function useResMenu(){
    const [data,setData]=useState({});
    const {id}=useParams();
         useEffect(()=>(
            async()=>{
            const det= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${id}`)
            const res= await det.json();
            setData(res)
}),[])  //https://non-cors.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1685786&lng=79.9338798&restaurantId=158376
            return data;
}