
import './App.css';
import React from "react";
import React from "react";
import button from '.App.js'
class person  extends React.Component {
 state = {
   fullname: "Sara johson",
   bio: "i'm a student from havard university",
   myimage: 'https://wallpapershome.com/images/pages/pic_h/23660.jpg',
   profession: "marketing'assistant",
   isEmployed: true,
   showProfile: false ,
   timeSinceMount: 0

 };
}
componentDidMount() {
   this.setState({ timeSinceMount: new Date() })
 }
render(); {
     <><button id="toggle-button">Toggle Profile</button><script>
        const button = document.getElementById("toggle-button");
        button.addEventListener("click", () => {setState(prevState => ({
           ...prevState,
           showProfile: !prevState.showProfile
        }))};
        });
     </script></>
}
{state.showProfile && (
   <div>
      <h2>{state.fullname}</h2>
      <p>{state.bio}</p>
      <img src={state.myimage} alt="Profile Image" />
      <p>Profession: {state.profession}</p>
   </div>
)};
render(); {
   const { timeSinceMount } = this.state;
   const timeInterval = (new Date() - timeSinceMount) / 1000; // convert to seconds
   return <div>Time since mount: {timeInterval} seconds</div>;
 }
 componentDidMount() {
   this.intervalId = setInterval(() => {
     this.setState({ timeSinceMount: new Date() })
   }, 1000); // update every second
 }
 
 componentWillUnmount() {
   clearInterval(this.intervalId);
 }