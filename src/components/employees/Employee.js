import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import EmployeeRepository from "../../repositories/EmployeeRepository";
import useResourceResolver from "../../hooks/resource/useResourceResolver";
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import person from "./person.png"
import "./Employee.css"
import LocationRepository from "../../repositories/LocationRepository";


export default ({ employee }) => {
    const [animalCount, setCount] = useState(0)
    const [location, markLocation] = useState({ name: "" })
    const [classes, defineClasses] = useState("card employee")
    const { employeeId,locationId } = useParams()
    const { getCurrentUser } = useSimpleAuth()
    const { resolveResource, resource } = useResourceResolver()

    useEffect(() => {
        if (employeeId) {
            defineClasses("card employee--single")
        }
        resolveResource(employee, employeeId, EmployeeRepository.get)
    }, [])

    useEffect(() => {
        
        if (resource?.locations?.length > 0) {
            markLocation(resource.locations[0].location)
        }
    }, [resource])

    // useEffect(() => {
        
    //     if (locationId) {
    //         defineClasses("card employee--single")
    //         resolveResource(location,locationId,LocationRepository.get)
    //     }
    // }, [])

    // useEffect(() => {
    //     if (animalCaretaker.animalId ===animalId && animalCaretaker.userId === user.id) {
    //         setCount(resource.employeeLocations[0])
    //     }
    // }, [resource])
console.log(location)
    return (
        <article className={classes}>
            <section className="card-body">
                <img alt="Kennel employee icon" src={person} className="icon--person" />
                <h5 className="card-title">
                    {
                        employeeId
                            ? resource.name
                            : <Link className="card-link"
                                to={{
                                    pathname: `/employees/${resource.id}`,
                                    state: { employee: resource }
                                }}>
                                {resource.name}
                            </Link>

                    }
                </h5>
                {console.log(resource)}
               { console.log(location)}
                {
                    employeeId
                        ? <>
                            <section>
                            Caring for {resource?.animals?.length} animals
                            </section>
                            <section>
                             working at {location.name}
                            </section>
                        </>
                        : ""
                }

                {
                    <button className="btn--fireEmployee" onClick={() => {}}>Fire</button>
                }

            </section>

        </article>
    )
}
