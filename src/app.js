import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/body.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurentMenu from "./component/RestaurentMenu.js";
import RestaurentMenu from "./component/RestaurentMenu.js";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Carts.js";
import Footer from "./component/Footer.js";


const AppLayout = () => {
    return (
       <Provider store={appStore}>
         <div className="app">
            <Header/>
            <Outlet/>
            <Footer />
         </div> 
       </Provider>
    )       
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
              path:"/",
              element:<Body/>
            },
            {
                path:"/About",
                element:<About />,
            },
            {
                path:"/Contact",
                element:<Contact />,
            },
            {
                path:"/Restaurent/:resId",
                element:<RestaurentMenu />,
            },
            {
                path:"/Cart",
                element:<Cart/>,
            },
           
        ],
    },
   
]);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
