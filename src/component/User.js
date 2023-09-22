const User=(Props)=>
{
   return(
       <div>
         <h1>{Props.name}</h1>
         <h2>{Props.location}</h2>
       </div>
   )
}
export default User;