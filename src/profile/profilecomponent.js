import React from "react";
import '.profilecomponent.css'
function profilecomponent(params) {
    

function fullname (props) {
    return <h1>fullname:{props.name}</h1>;
   }
   const fullname = () => {
    return (
      <div style={{ 
        height: '10%' ,
        color: 'black',
        textalign: 'right',
        padding: 32,
        borderbottom: 'solid 3px black',
        }}
        >
        <fullname name="maryam khadija" /> 
        <fullname name=" isra muhammad" /> 
      </div>
    );
   };
   
   function bio (props) {
    return <h1>bio: {props.bio}</h1>;
   }
   const App = () => {
    return (
      <div style={{ 
        height: '10%' ,
        color: 'black',
        textalign: 'right',
        padding: 32,
        borderbottom: 'solid 3px black',
        }}
      >
        <bio bio="i love football" />
        <bio bio="I am the King" /> 
      </div>
    );
   };
   function profession(props) {
    return <h1>profession :{props.profession}</h1>;
   }
   
   const profession = () => {
    return (
      <div style={{ 
        height: '10%' ,
        color: 'black',
        textalign: 'right',
        padding: 32,
        borderbottom: 'solid 3px black',
        }}
       >
        <profession profession="psycologue" />
        <profession profession="doctor" />
      </div>
    );
    const fullname = props => {
        return   {props.children} 
        <img> src={photos} alt=" profilecomponent" </img>
        ;
       };
   };
   
   export default App;
   profilecomponent.defaultProps = {
 version: "16"
};
profilecomponent.propTypes = {
  stringProp: PropTypes.string,
};