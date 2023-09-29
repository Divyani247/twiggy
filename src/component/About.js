import User from "./User";
import UserClass from "./UserClass";
import { LOGO_URL } from "../utils/constant";
const About=()=>{
    return (
        <div className="text-center min-h-[65vh] mt-16">
            <div className="flex justify-center ">
            <img className="w-10 h-20 m-2" src={LOGO_URL}/>
            {<h1 className="text-xl m-1 text-orange-500 font-bold flex my-auto">Twiggy</h1>}
            </div>
            {<p className="w-6/12 m-auto font-medium">The Twiggy  Project is a web application developed using React.js, Tailwind CSS, and Swiggy's API. It is inspired by swiggy a well-known online food delivery platform. This project was created as part of the coursework for the "Namaste React" course by Akshay Saini sir. It stands as a testament to the skills and knowledge gained during this educational journey.</p>}
        </div>
    
        


    )
}
export default About;