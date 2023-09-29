import React from "react";
import Navbar from "../Componant/Navbar";
import Category from "../Componant/Category";
// import FoodCard from "../Componant/FoodCard";
import FoodIcon from "../Componant/FoodIcon";
import Card from "./Card";
const Home = () => {
  return (
    <>
    <Navbar />
    <Category />
    <FoodIcon />
    <Card />  
  </>
  );
};

export default Home;
