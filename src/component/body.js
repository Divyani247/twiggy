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
   // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
   async function checkJsonData(jsonData) {

    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

      // initialize checkData for Swiggy Restaurant data
      let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }
  // call the checkJsonData() function which return Swiggy Restaurant data
  const resData = await checkJsonData(json);


    setListOfRestaurent(resData); 
    setfilteredrestaurent(resData);
  };
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false) return (
    <h1>Look's Like you are offline!! Plz Check internet</h1>
  );
  
  
  return listOfRestaurent.length === 0 ? (
    <Shimmer/>
  ) : (
        <div className="grow min-h-[70vh]">
          <div className="flex justify-center my-5"> 
           <div className="mr-6">
             <input 
              type="text" 
              data-testid="searchInput" 
              className="border border-solid border-black px-3" 
              value={searchtxt} onChange={(e)=>{
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