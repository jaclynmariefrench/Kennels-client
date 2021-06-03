import React, { useContext, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

import "./locations.css"
import { LocationContext } from "./LocationsProvider"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()

  useEffect(() => {
    getLocations()
  }, [])


  return (
    <>
    <h2>Locations</h2>
    <button onClick={() => history.push("/locations/create")
    }>
      Add Location
    </button>

      <div className="locations">
      {locations.map((location) => (
        <Link key={location.id} to={`/locations/detail/${location.id}`}>{location.name}</Link>
      ))}
      {/* {locations.map ((location) => (
        parseInt(location.employees.id) 
        parseInt(location.animals.id) 
      )
      )} */}
      </div>
      
    </>
  )
}
           