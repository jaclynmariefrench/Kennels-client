import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams, useHistory } from "react-router-dom";

export const AnimalDetail = () => {
  const { animals, releaseAnimal } = useContext(AnimalContext);
  const [animal, setAnimal] = useState({ location: {}, customer: {} });

  /*
        Given the example URL above, this will store the value
        of 5 in the animal_id variable
    */
  const { animal_id } = useParams();

  const history = useHistory();

  const handleRelease = () => {
    releaseAnimal(animal.id).then(() => {
      history.push("/animals");
    });
  };

  useEffect(() => {
    const thisAnimal = animals.find((a) => a.id === parseInt(animal_id)) || {
      location: {},
      customer: {},
    };

    setAnimal(thisAnimal);
  }, [animal_id]);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
      <button
        onClick={() => {
          history.push(`/animals/edit/${animal.id}`);
        }}
      >
        Edit
      </button>
      <button onClick={handleRelease}>Release Animal</button>
    </section>
  );
};
