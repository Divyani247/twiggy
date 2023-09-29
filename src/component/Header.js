import {LOGO_URL} from "../utils/constant";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
  const [btnname,setbtnname]=useState("Login")
  const onlineStatus=useOnlineStatus();
 // console.log(loggedInUser);
  const cartItems = useSelector((store) => store.cart.items);
// console.log(cartItems);


    return(
        <div className="flex justify-between shadow-lg">
         <div className="logo-container flex items-center">
            <img className="w-10 h-20 mx-2" src={LOGO_URL}/>
            {<h1 className="text-xl text-orange-500 font-bold ">Twiggy</h1>}
         </div>
         <div className="flex items-center ">
           <ul className="flex px-4">
            <li className="px-4">
              Online Status:{onlineStatus? "✅":"🔴"}
            </li>
             <li className="px-4">
               <Link className="nav-style" to="/">Home</Link>
             </li>
             <li className="px=4">
             <Link className="nav-style" to="/about">About Us</Link>
             </li>
             <li className="px-4">
             <Link className="nav-style" to="/contact">contact us</Link>
             </li>
             <li className="px-4">
             <Link to="/Cart">🛒Cart-({cartItems.length})</Link>
             </li>
              <button className=""onClick={()=>{
                btnname=="Login"?setbtnname("Logout")
                :setbtnname("Login");
              }}>{btnname}</button>
              
             
           </ul>
         </div>
        </div>
    )
}
export default Header;