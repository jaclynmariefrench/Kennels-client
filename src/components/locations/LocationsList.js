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
        <div class="link_locations">
        <Link key={location.id} to={`/locations/detail/${location.id}`}>{location.name}</Link>
        {/* <div key={location.employees.length}>{location.employees.length} employees</div> */}
        {/* <div key={location.animals.length}>{location.animals.length} animals</div> */}
        </div>
      ))}

      </div>
      
    </>
  )
}

