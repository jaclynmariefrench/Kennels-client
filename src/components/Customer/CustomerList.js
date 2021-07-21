import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./customer.css"

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers")
    getCustomers()
  }, [])


  return (
    <section className="customers">
      {console.log("CustomerList: Render", customers)}
      {
        customers.map(customer => {
          return (
            <div className="customer" id={`customer--${customer.id}`}key={customer.id}>
              <div className="customer__name">
                <h3>{ customer.name }</h3>
              </div>
              <div className="customer__animal">
                {/* Pet's Name:  {customer.animal.name} */}
              </div>
            </div>
          )
        })
      }
    </section>
  )
}