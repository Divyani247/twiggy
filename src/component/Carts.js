import {  useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";



const Cart = () => {

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
       dispatch(clearCart());
    }
   
    return (
        <div className="text-center m-4 p-4 grow min-h-[70vh]">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                 {cartItems.length==0 && <h2 className="text-lg font-bold flex mb-5 mt-20 ml-20">Your cart is feeling lonely. It's craving some tasty company.😥</h2>}
                <ItemList items={cartItems}/>
                  <button className="p-2 m-1 text-sm bg-black text-white rounded-lg"
                  onClick={handleClearCart}
                 >Clear Cart</button>

            </div>
        </div>
    );
};
export default Cart;