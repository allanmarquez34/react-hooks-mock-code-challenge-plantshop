import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const mappedPlants= plants.map(onePlant=> {
    return <PlantCard key={onePlant.id} plants={onePlant}/> 
  })

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
