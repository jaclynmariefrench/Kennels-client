import React from "react"
import { Animal } from "./animal/Animal"
import { Customers } from "./Customer/customer"
import { Employees } from "./employees/employees"
import "./Kennel.css"
import { Locations } from "./locations/locations"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <Animal />
            <Animal />
            <Animal />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <Employees />
            <Employees />
            <Employees />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <Locations />
            <Locations />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <Customers />
            <Customers />
            <Customers />
            <Customers /> 
        </article>
        </>
)
       
       