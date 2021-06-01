import React from "react"
import { Route } from "react-router-dom"
import { LocationsProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationsList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employees/EmployeesProvider"
import { EmployeeList } from "./employees/EmployeesList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationsProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationsProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList/>
                </Route>
            </EmployeeProvider>
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList/>
                </Route>
            </CustomerProvider>
        </>
    )
}