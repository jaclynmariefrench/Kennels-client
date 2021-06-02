import React, { useContext, useEffect } from "react"

import "./locations.css"
import { LocationContext } from "./LocationsProvider"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])


  return (
    <section className="locations">
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return (
            <div className="location" id={`location--key=d${location.id}`}>
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
    </section>
  )
}