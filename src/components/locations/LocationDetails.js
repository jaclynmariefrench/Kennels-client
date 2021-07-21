import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationsProvider"
import "./locations.css"
import { useHistory, useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocations ] = useState({ animals: [], employees: [] })

    const { location_id } = useParams();

    const history = useHistory()

    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(location_id)) || { animals: [], employees: [] }

        setLocations(thisLocation)
    }, [location_id])

    return (
    <section className="location">
        <h3 className="locations__name">{ location.name }</h3>
        <div className="locations__address">{ location.address }</div>
        {/* <div className="locations__employees"><b>Employees:</b> { location.employees.map(e=> {return (<div>{e.name}</div>)})}</div>
        <div className="locations__animals"><b>Animals:</b> { location.animals.map(a=> {return (<div>{a.name}</div>)})}</div> */}
        <button
        onClick={() => {
          history.push(`/locations/edit/${location.id}`);
        }}
      >
        Edit
      </button>
    </section>
    )
}