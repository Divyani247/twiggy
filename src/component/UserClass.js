import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userInfo:{
        name:"dummy",
        Location:"default",
      }
    };

  }
  async componentDidMount()
  {
    const data= await fetch("https://api.github.com/users/Divyani247");
    const json= await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json)
  }
  render(){
    const {name,Location}=this.state.userInfo;
    return(
        <div className="about-info">
            <h1>NAME:{name}</h1>
            <h2>LOCATION:{Location}</h2>
        </div>
    );
  }
}
export default UserClass;