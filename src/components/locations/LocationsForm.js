import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationsProvider"
import "./locations.css"
import { useHistory } from 'react-router-dom';
import { CustomerContext } from "../Customer/CustomerProvider";

export const LocationsForm = () => {
  const { addLocation } = useContext(LocationContext)
  const { customer , getCustomers } = useContext(CustomerContext)

  const [location, setLocations] = useState({
    name: "",
    address: ""
  });

  const history = useHistory();

  useEffect(() => {
    getCustomers()
  }, [])

  const handleControlledInputChange = (event) => {

    const newLocation = { ...location }
    newLocation[event.target.id] = event.target.value
    setLocations(newLocation)

  }

  const handleClickSaveLocation = (event) => {

      const newLocation = {
        name: location.name,
        address: location.address
      }
      addLocation(newLocation)
        .then(() => history.push("/locations"))
    }
    
    return (
        <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location Address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Location Address" value={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
          </button>
    </form>
  )
  
}