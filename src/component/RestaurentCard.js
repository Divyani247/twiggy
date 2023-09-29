import {CDN_URL} from "../utils/constant";
const RestaurentCard=(props)=>{
    const {resData}=props;
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      locality
    }=resData?.info
    return (
        <div  data-testid="resCard"
           className="ml-10 h- p-4  w-64 hover:shadow-2xl flex flex-col   rounded-lg ">
          <img className="rounded-md overflow-hidden min-h-[180px] h-20 object-cover overlay"src={CDN_URL+cloudinaryImageId}/>
          <h3 className="font-bold p-1 text-lg">{name}</h3>
          <h4 className="text-base truncate ">{cuisines.join(", ")}</h4>
          <h4 className="text-base truncate ">{locality}</h4>
          <h5 className="">{avgRating}⭐</h5>
        </div>
    )
}
export default RestaurentCard; //hover:shadow-2xl