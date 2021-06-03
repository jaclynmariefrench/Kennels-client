import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationsProvider"
import "./locations.css"
import { useParams } from "react-router-dom"

export const LocationDetail = () => {
    const { locations } = useContext(LocationContext)
    const [ location, setLocations ] = useState({ animals: [], employees: [] })

    const { locationId } = useParams();


    useEffect(() => {
        const thisLocation = locations.find(a => a.id === parseInt(locationId)) || { animals: [], employees: [] }

        setLocations(thisLocation)
    }, [locationId])

    return (
    <section className="location">
        <h3 className="locations__name">{ location.name }</h3>
        <div className="locations__address">{ location.address }</div>
        <div className="locations__employees"><b>Employees:</b> { location.employees.map(e=> {return (<div>{e.name}</div>)})}</div>
        <div className="locations__animals"><b>Animals:</b> { location.animals.map(a=> {return (<div>{a.name}</div>)})}</div>
        {/* <div className="test">{ parseINlocation.animals.id}</div> */}
    </section>
    )
}