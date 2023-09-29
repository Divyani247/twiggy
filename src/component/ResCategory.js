import { useState } from "react";
import ItemList from "./ItemList";
const ResCategory=({data, showItems,setshowIndex})=>{

    const handleClick=()=>{
        setshowIndex();
    };
    console.log(data);
    return ( 
    <div>
        <div className="w-6/12 bg-gray-50 shadow-lg my-4  p-4 mx-auto cursor-pointer">
            <div className="flex justify-between" onClick={handleClick}>
              <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
              <span>🔻</span>
            </div>

            {showItems && <ItemList items={data.itemCards}/>}
        </div>

    </div>
    );
};
export default ResCategory