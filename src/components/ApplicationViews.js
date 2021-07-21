import React from "react";
import { Route } from "react-router-dom";
import { LocationsProvider } from "./locations/LocationsProvider";
import { LocationList } from "./locations/LocationsList";
import { LocationDetail } from "./locations/LocationDetails";
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
import { AnimalSearch } from "./animal/AnimalSearch";

export const ApplicationViews = () => {
  return (
    <>
      {/* LOCATION */}

      <LocationsProvider>
        <AnimalProvider>
          <CustomerProvider>
            <EmployeeProvider>
              <Route exact path="/locations">
                <LocationList />
              </Route>
              <Route exact path="/locations/create">
                <LocationsForm />
              </Route>
              <Route exact path="/locations/detail/:location_id(\d+)">
                <LocationDetail />
              </Route>
              <Route path="/locations/edit/:location_id(\d+)">
                <LocationsForm />
              </Route>
            </EmployeeProvider>
          </CustomerProvider>
        </AnimalProvider>
      </LocationsProvider>

      {/* ANIMAL */}

      <AnimalProvider>
        <LocationsProvider>
          <CustomerProvider>
            {/* ANIMAL SEARCH */}
            {/* ANIMAL PAGE */}
            <Route exact path="/animals">
              <AnimalSearch />
              <AnimalList />
            </Route>
            {/* ANIMAL FORM */}
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
            {/* ANIMAL DETAIL */}
            <Route exact path="/animals/detail/:animal_id(\d+)">
              <AnimalDetail />
            </Route>
            {/* ANIMAL EDIT */}
            <Route path="/animals/edit/:animal_id(\d+)">
              <AnimalForm />
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
          <Route path="/employees/edit/:employeeId(\d+)">
            <EmployeeForm />
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
