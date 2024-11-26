import { useEffect, useState} from "react";
import card from "../utils/constants/cards.json"

export default function useHomeData(){
    //haven't use useEffect to check this wether this code works. but it using useEffect is neccesesry to not to get struck in loop.
    const[data,setData]=useState({});
    useEffect(()=>(
        async function getData(){
            const result=await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.89960%26lng%3D80.22090%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING",{method:'GET'});
            const resData=await result?.json();
            if(!resData){
                setData(card)
            }
            else{
            setData(resData);}}
    ),[])
    return data;

}