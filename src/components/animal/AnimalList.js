import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
// import { AnimalDetail } from "./AnimalDetails"
import "./Animal.css";
import { Link, useHistory } from "react-router-dom";

export const AnimalList = ({  }) => {
  // const { getAnimals, animals } = useContext(AnimalContext)
  const { animals, getAnimals } = useContext(AnimalContext);
  const history = useHistory()

  // Initialization effect hook -> Go get animal data
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h1>Animals</h1>

      <button onClick={() => history.push("/animals/create")}>
        Make Reservation
      </button>

      <div className="animals">
        {animals.map((animal) => (
          <Link key={animal.id} to={`/animals/detail/${animal.id}`}>{animal.name}</Link>
        ))}
      </div>
    </>
  );
};
