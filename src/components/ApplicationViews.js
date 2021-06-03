import React from "react";
import { Route } from "react-router-dom";
import { LocationsProvider } from "./locations/LocationsProvider";
import { LocationList } from "./locations/LocationsList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { EmployeeProvider } from "./employees/EmployeesProvider";
import { EmployeeList } from "./employees/EmployeesList";
import { EmployeeDetail } from "./employees/EmployeesDetails";
import { CustomerProvider } from "./Customer/CustomerProvider";
import { CustomerList } from "./Customer/CustomerList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { LocationsForm } from "./locations/LocationsForm";
import { AnimalDetail } from "./animal/AnimalDetails";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";

export const ApplicationViews = () => {
  return (
    <>
      {/* LOCATION */}
    
      <LocationsProvider>
        <CustomerProvider>
          <Route exact path="/locations">
            <LocationList />
          </Route>
          <Route exact path="/locations/create">
            <LocationsForm />
          </Route>
        </CustomerProvider>
      </LocationsProvider>
      
      {/* ANIMAL */}
      
      <AnimalProvider>
        <LocationsProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>

            <Route exact path="/animals/detail/:animalId(\d+)">
              <AnimalDetail />
            </Route>
          </CustomerProvider>
        </LocationsProvider>
      </AnimalProvider>

      {/* EMPLOYEES */}

      <EmployeeProvider>
        <LocationsProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
          <Route exact path="/employees/detail/:employeeId(\d+)">
            <EmployeeDetail />
          </Route>
        </LocationsProvider>
      </EmployeeProvider>
      
      {/* CUSTOMERS */}
      
      <CustomerProvider>
        <AnimalProvider>
          <Route path="/customers">
            <CustomerList />
          </Route>
        </AnimalProvider>
      </CustomerProvider>
    </>
  );
};
