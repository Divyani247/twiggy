import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {CDN_URL  } from "../utils/constant";

const ItemList=({items})=>{

    const dispatch=useDispatch();
    const handleAddItems=(item)=>{
          dispatch(addItem(item));
    }
 return(
       <div className="">
            {items.map((item)=>(
            <div 
            data-testid="foodItems"
            className="p-2 m-2 border-b-2 border-200 text-left flex justify-between"
             key={item.card.info.id}>
                <div className="py-1">
                    <span>{item.card.info.name}</span> 
                    <span> - ₹{item.card.info.price
                    ? item.card.info.price/100 
                    : item.card.info.defaultPrice/100}</span>
                    <p className="text-xs w-96">{item.card.info.description}</p>
                </div>
                <div className=""> 

                    <div className="absolute">
                        <button className=" p-1 mx-7 text-sm bg-white shadow-lg text-green-800 mt-12 ml-8 " 
                        onClick={()=>handleAddItems(item)}>Add  +</button>
                    </div>
                    <img className="w-32 h-20" src={CDN_URL + item.card.info.imageId}  />
                </div>

            </div>

            ))}
       </div>
 )
}
export default ItemList;