import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationsProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../Customer/CustomerProvider"
import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    //for edit, hold on to state of animal in this view
    const [animal, setAnimal] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {animal_id} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newAnimal = { ...animal }
      //animal is an object with properties.
      //set the property to the new value
      newAnimal[event.target.name] = event.target.value
      //update state
      setAnimal(newAnimal)
    }

    const handleSaveAnimal = () => {
      if (parseInt(animal.location_id) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (animal_id){
          //PUT - update
          updateAnimal({
              id: animal.id,
              name: animal.name,
              breed: animal.breed,
              status: animal.status,
              location_id: parseInt(animal.location_id),
              customer_id: parseInt(animal.customer_id)
          })
          .then(() => history.push(`/animals/detail/${animal.id}`))
        }else {
          //POST - add
          addAnimal({
              name: animal.name,
              breed: animal.breed,
              status: animal.status,
              location_id: parseInt(animal.location_id),
              customer_id: parseInt(animal.customer_id)
          })
          .then(() => history.push("/animals"))
        }
      }
    }

    // Get customers and locations. If animal_id is in the URL, getAnimalById
    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animal_id){
          getAnimalById(animal_id)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="animalForm">
        <h2 className="animalForm__title">New Animal</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalName">Animal name: </label>
            <input type="text" id="animalName" name="name" required autoFocus className="form-control"
            placeholder="Animal name"
            onChange={handleControlledInputChange}
            defaultValue={animal.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalBreed">Animal breed: </label>
            <input type="text" id="animalBreed" name="breed" required autoFocus className="form-control"
            placeholder="Animal breed"
            onChange={handleControlledInputChange}
            defaultValue={animal.breed}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="animalStatus">Animal Status: </label>
            <input type="text" id="animalStatus" name="status" required autoFocus className="form-control"
            placeholder="Animal Status"
            onChange={handleControlledInputChange}
            defaultValue={animal.status}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.location_id} name="location_id" id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a location</option>
              {locations.map(l => (
                <option key={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="customer">Customer: </label>
            <select value={animal.customer_id} name="customer_id" id="customerAnimal" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select a customer</option>
              {customers.map(c => (
                <option key={c.id} value={c.id}>
                    {c.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {animal_id ? <>Save Animal</> : <>Add Animal</>}</button>
      </form>
    )
}












// import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "../locations/LocationsProvider"
// import { AnimalContext } from "../animal/AnimalProvider"
// import { CustomerContext } from "../Customer/CustomerProvider"
// import "./Animal.css"
// import { useHistory } from 'react-router-dom';

// export const AnimalForm = () => {
//   const { addAnimal } = useContext(AnimalContext)
//   const { locations, getLocations } = useContext(LocationContext)
//   const { customers, getCustomers } = useContext(CustomerContext)

//   /*
//   With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

//   Define the intial state of the form inputs with useState()
//   */

//   const [animal, setAnimal] = useState({
//     name: "",
//     breed: "",
//     location_id: 0,
//     customer_id: 0
//   });

//   const history = useHistory();

//   /*
//   Reach out to the world and get customers state
//   and locations state on initialization.
//   */
//   useEffect(() => {
//     getCustomers().then(getLocations)
//   }, [])

//   //when a field changes, update state. The return will re-render and display based on the values in state
//   //Controlled component
//   const handleControlledInputChange = (event) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newAnimal = { ...animal }
//     /* Animal is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newAnimal[event.target.id] = event.target.value
//     // update state
//     setAnimal(newAnimal)
//   }

//   const handleClickSaveAnimal = (event) => {
//     event.preventDefault() //Prevents the browser from submitting the form

//     const location_id = parseInt(animal.location_id)
//     const customer_id = parseInt(animal.customer_id)

//     if (location_id === 0 || customer_id === 0) {
//       window.alert("Please select a location and a customer")
//     } else {
//       //Invoke addAnimal passing the new animal object as an argument
//       //Once complete, change the url and display the animal list

//       const newAnimal = {
//         name: animal.name,
//         breed: animal.breed,
//         location_id: location_id,
//         customer_id: customer_id
//       }
//       addAnimal(newAnimal)
//         .then(() => history.push("/animals"))
//     }
//   }

//   return (
//     <form className="animalForm">
//       <h2 className="animalForm__title">New Animal</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Animal name:</label>
//           <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" value={animal.name} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Animal breed:</label>
//           <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="location">Assign to location: </label>
//           <select name="location_id" id="location_id" className="form-control" value={animal.location_id} onChange={handleControlledInputChange}>
//             <option value="0">Select a location</option>
//             {locations.map(l => (
//               <option key={l.id} value={l.id}>
//                 {l.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="customer_id">Customer: </label>
//           <select name="customer" id="customer_id" className="form-control" value={animal.customer_id} onChange={handleControlledInputChange}>
//             <option value="0">Select a customer</option>
//             {customers.map(c => (
//               <option key={c.id} value={c.id}>
//                 {c.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </fieldset>
//       <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
//         Save Animal
//           </button>
//     </form>
//   )
// }