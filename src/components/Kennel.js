import React from "react"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { EmployeeProvider } from "./employees/EmployeesProvider"
import { EmployeeList } from "./employees/EmployeesList"
import "./Kennel.css"
import { LocationsProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationsList"

export const Kennel = () => (
    <article class="main__kennel">
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>  
        </article>
        <h2>Employees</h2>
        <article className="employees">
           <EmployeeProvider>
               <EmployeeList/>
           </EmployeeProvider>
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationsProvider>
                <LocationList/>
            </LocationsProvider>
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList/>
            </CustomerProvider>
        </article>
    </article>
)
       
       