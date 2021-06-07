import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalDetail } from "./AnimalDetails"
import "./Animal.css";
import { Link, useHistory } from "react-router-dom";

export const AnimalList = () => {
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);
  
  const [ filteredAnimals, setFiltered ] = useState([])
  const history = useHistory()

  
  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals();
  }, []);

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
      </button>

      <div className="animals">
        {filteredAnimals.map((animal) => (
          <Link key={animal.id} to={`/animals/detail/${animal.id}`}>{animal.name}</Link>
        ))}
      </div>
    </>
  );
};
