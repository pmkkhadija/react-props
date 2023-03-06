import logo from './logo.svg';
import './App.css';
import React from "react";
import Profilecomponent from "./profilecomponent";
const App = () => (
 <>
   <Profilecomponent />
 </>
 function fullname (props) {
  return <h1>fullname:{props.name}</h1>;
 }
 const fullname = () => {
  return (
    <div>
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
    <div>
      <profession profession="psycologue" /> {/* 💥 "world" is the prop value*/}
      <profession profession="doctor" /> {/* 💥 "I am the King" is the prop value*/}
    </div>
  );
  
);
export default App;
import PropTypes from "prop-types";
Profilecomponent.propTypes = {
  stringProp: PropTypes.string,
 };