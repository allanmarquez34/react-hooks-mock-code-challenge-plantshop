import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([])
  const [searchQuery, setSearchQuery]=useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plants => {
        setPlants(plants)
      })
  },[])

  const filteredPlants = plants.filter(onePlant=>{
    return onePlant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }




  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
