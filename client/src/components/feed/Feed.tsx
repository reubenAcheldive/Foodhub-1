import React, { useEffect, useState } from "react";
import { dishs } from "../../api/dishs";
import { IFoodDb } from "../../interface/IFoodDb";
import { Cards } from "./Cards";

export const Feed = () => {
  const [foods, setFoods] = useState<IFoodDb[]>();
  useEffect(() => {
    const dishData = dishs();
    setFoods(dishData)
  },[]);
  return (
    <div>
   {  foods?.map(({id, resname, dishname, image, stars})=>(
     <Cards id={id} resname={resname} dishname={dishname} image={image} stars={stars}   />
   ))}
    </div>
  );
};
