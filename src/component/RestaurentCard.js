import {CDN_URL} from "../utils/constant";
const RestaurentCard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    return (
        <div className="m-4 p-4  w-52 hover:shadow-2xl rounded-lg">
          <img className="card-img rounded-md "src={CDN_URL+cloudinaryImageId}/>
          <h3 className="font-bold py-1 text-lg">{name}</h3>
          <h4 className="card-style">{cuisines.join(", ")}</h4>
          <h5 className="card-style">{avgRating} Stars</h5>
        </div>
    )
}
export default RestaurentCard;