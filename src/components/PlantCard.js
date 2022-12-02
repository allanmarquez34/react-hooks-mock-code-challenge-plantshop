import React,{useState} from "react";


function PlantCard({plants}) {
const [inStock, setInStock]=useState(true)

function handleClick(){
  setInStock((isInStock)=> !isInStock )
}
  return (
    <li className="card">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
