import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import locationImage from "./location.png"
import "./Location.css"
import { AnimalListComponent } from "../animals/AnimalList"
import AnimalRepository from "../../repositories/AnimalRepository"
import EmployeeRepository from "../../repositories/EmployeeRepository"


export default ({location}) => {
    

    return (
        <>

        
        <article className="card location" style={{ width: `18rem` }}>
            <section className="card-body">
                <img alt="Kennel location icon" src={locationImage} className="icon--location" />
                <h5 className="card-title">
                    <Link className="card-link"
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        {location.name}
                    </Link>
                </h5>
            </section>
            <section>
            employees: {/* <Link className=""
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        employees :{location.employeeLocations.length}
                    </Link> */ location.employeeLocations.length}
                
            </section>
            <section>
            animals: {/* <Link className=""
                        to={{
                            pathname: `/locations/${location.id}`,
                            state: { location: location }
                        }}>
                        animals: {location.animals.length}
                    </Link> */location.animals.length}
            </section>
        </article>
    </>
    )
}
