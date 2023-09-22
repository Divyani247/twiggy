import RestaurentCard  from "./RestaurentCard.js";
import { useState,useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
  const [listOfRestaurent,setListOfRestaurent]=useState([]);
  const [filteredrestaurent,setfilteredrestaurent]=useState([]);

  const [searchtxt,setsearchtxt]=useState("");

  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>
  {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1119261&lng=79.0878065&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );
    const json= await data.json();
    console.log(json)
    setListOfRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setfilteredrestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false) return (
    <h1>Look's Like you are offline!! Plz Check internet</h1>
  );
  
  
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
        <div>
          <div className="flex m-4"> 
           <div className="mr-6">
             <input type="text" className="border border-solid border-black px-3" value={searchtxt} onChange={(e)=>{
                   setsearchtxt(e.target.value);
             }}
             />
             <button className="px-3 py-1 rounded-md  bg-orange-600 m-2" onClick={()=>{
                  const filteredRes=listOfRestaurent.filter((res)=>
                  res.info.name.toLowerCase().includes(searchtxt.toLowerCase())
                  );
                    setfilteredrestaurent(filteredRes);
             }}
             >Search</button>
          </div>
          <div className="px-3 py-1 bg-orange-600 rounded-md m-2">
            <button className=" " onClick={()=>{
              const filteredList=listOfRestaurent.filter(
                (res)=>res.info.avgRating > 4
                );
                setfilteredrestaurent(filteredList)
              }
             }
              
               >Top rated restaurent
             </button>
          </div>
          </div>
          <div className="flex flex-wrap ">
          {
            filteredrestaurent.map((restaurent)=>(
            <Link style={{textDecoration: 'none'}} key={restaurent.info.id}to={"restaurent/"+restaurent.info.id}><RestaurentCard  resData={restaurent}/></Link>))
          }
          </div>
        </div>
    )
}

export default Body;