import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"

import "./locations.css"
import { LocationContext } from "./LocationsProvider"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])

  const history = useHistory()

  return (
    <>
    <h2>Locations</h2>
    <button onClick={
      () => history.push("/locations/create")
    }>
      Add Location
    </button>
      <div className="locations">
      {
        locations.map(location => {
          return (
            <div className="location" key={location.id} id={`location--${location.id}`}>
              <div className="location__name">
                <h3>{ location.name }</h3>
              </div>
              <div className="location__address">
                Location: {location.address}
              </div>
            </div>
          )
        })
      }
      </div>
    </>
  )
}