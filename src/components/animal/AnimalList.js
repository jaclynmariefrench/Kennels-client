import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
// import { AnimalDetail } from "./AnimalDetails"
import "./Animal.css";

export const AnimalList = ({ history }) => {
  // const { getAnimals, animals } = useContext(AnimalContext)
  const { animals, getAnimals } = useContext(AnimalContext);

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
          <Link to={`/animals/detail/${animal.id}`}>{animal.name}</Link>
        ))}
      </div>
    </>
  );
};
