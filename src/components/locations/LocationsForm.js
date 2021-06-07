import React, { useContext, useState, useEffect } from "react";
import { LocationContext } from "../locations/LocationsProvider";
import "./locations.css";
import { useHistory, useParams } from "react-router-dom";

export const LocationsForm = () => {
  const { addLocation, getLocationsById, updateLocation, getLocations } =
    useContext(LocationContext);

  const [location, setLocations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { locationId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    newLocation[event.target.id] = event.target.value;
    setLocations(newLocation);
  };

  const handleClickSaveLocation = () => {
      setIsLoading(true);
      if (locationId){
        const editedLocation = {
          id: location.id,
          name: location.name,
          address: location.address,
        }
      updateLocation(editedLocation)
      .then(()=> history.push(`/locations/details/${location.id}`))
      }
      else {
        const newLocation = {
          name: location.name, 
          address: location.address,
        }
        addLocation(newLocation)
        .then(()=> history.push("/locations"))
      }

  }
        


  // const handleClickSaveLocation = () => {
  //   if (location.name && location.address === "") {
  //     window.alert("Please enter in all text forms.");
  //   } else {
  //     setIsLoading(true);
  //     if (locationId) {
  //       updateLocation({
  //         id: location.id,
  //         name: location.id,
  //         locationId: parseInt(location.locationId),
  //       }).then(() => history.push(`/locations/detail/${location.id}`));
  //     } else {
  //       addLocation({
  //         name: location.name,
  //         locationId: parseInt(location.locationId),
  //       }).then(() => history.push("/locations"));
  //     }
  //   }
  // };

  useEffect(() => {
    
      if (locationId) {
        getLocationsById(locationId).then((location) => {
          setLocations(location);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    ;
  }, []);

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location Address:</label>
          <input
            type="text"
            id="address"
            required
            autoFocus
            className="form-control"
            placeholder="Location Address"
            value={location.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
          handleClickSaveLocation();
        }}
      >
        {locationId ? <>Save Location</> : <>Add Location</>}
      </button>
    </form>
  );
};

// import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "../locations/LocationsProvider"
// import "./locations.css"
// import { useHistory } from 'react-router-dom';
// import { CustomerContext } from "../Customer/CustomerProvider";

// export const LocationsForm = () => {
//   const { addLocation } = useContext(LocationContext)
//   const { customer , getCustomers } = useContext(CustomerContext)

//   const [location, setLocations] = useState({
//     name: "",
//     address: ""
//   });

//   const history = useHistory();

//   useEffect(() => {
//     getCustomers()
//   }, [])

//   const handleControlledInputChange = (event) => {

//     const newLocation = { ...location }
//     newLocation[event.target.id] = event.target.value
//     setLocations(newLocation)

//   }

//   const handleClickSaveLocation = (event) => {

//       const newLocation = {
//         name: location.name,
//         address: location.address
//       }
//       addLocation(newLocation)
//         .then(() => history.push("/locations"))
//     }

//     return (
//         <form className="locationForm">
//       <h2 className="locationForm__title">New Location</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Location name:</label>
//           <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Location Address:</label>
//           <input type="text" id="address" required autoFocus className="form-control" placeholder="Location Address" value={location.address} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <button className="btn btn-primary" onClick={handleClickSaveLocation}>
//         Save Location
//           </button>
//     </form>
//   )

// }
