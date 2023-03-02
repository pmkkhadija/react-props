import React from "react";
function profilecomponent(params) {
    

function fullname (props) {
    return <h1>fullname:{props.name}</h1>;
   }
   const fullname = () => {
    return (
      <div style={{ height: '10%' }}>
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
      <div>
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
      <div style={divStyle} >
        <profession profession="psycologue" /> {/* 💥 "world" is the prop value*/}
        <profession profession="doctor" /> {/* 💥 "I am the King" is the prop value*/}
      </div>
    );
    const fullname = props => {
        return   {props.children} 
        <img> src={photos} alt=" profilecomponent"
        ;
       };
   };
   
   export default App;
   profilecomponent.defaultProps = {
 version: "16"
};
profilecomponent.propTypes = {
 anyProp: PropTypes.any,
 booleanProp: PropTypes.bool,
 numberProp: PropTypes.number,
 stringProp: PropTypes.string,
 functionProp: PropTypes.func
};