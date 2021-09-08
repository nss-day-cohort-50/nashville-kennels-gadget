import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import locationImage from "./location.png"
import "./Location.css"
import { AnimalListComponent } from "../animals/AnimalList"
import AnimalRepository from "../../repositories/AnimalRepository"
import EmployeeRepository from "../../repositories/EmployeeRepository"


export default ({location}) => {
    const [activeNorth, setActiveNorth] = useState("")
    const [activeSouth, setActiveSouth] = useState("")
    const [activeEmpSouth, setActiveEmpSouth] = useState("")
    const [activeEmpNorth, setActiveEmpNorth] = useState("")
    const [animals, setAnimals] = useState([])
    const [locations, setLocations] = useState([])
    const [employees, setEmployees] = useState([])
        
    useEffect(() => {
        AnimalRepository.getAll()
        .then((animalData) => {
            setAnimals(animalData)
        })

    }, [])

    useEffect(() => {
        EmployeeRepository.getAll()
        .then((employeeData) => {
            setEmployees(employeeData)
        })

    }, [])

    useEffect(() => {
        const activateAnimalCounterNorth = animals.filter(animal => animal.id > 0 && animal.locationId === 1).length
        setActiveNorth(`${activateAnimalCounterNorth} animals`)}, [animals])

    useEffect(() => {
        const activateAnimalCounterSouth = animals.filter(animal => animal.id > 0 && animal.locationId === 2).length
        setActiveSouth(`${activateAnimalCounterSouth} animals`)}, [animals])

    useEffect(() => {
        const activateEmpCounterNorth = employees.filter(employee => employee.employeeLocations.locationId === 1).length
        setActiveEmpNorth(`${activateEmpCounterNorth} employees`)}, [employees])

    useEffect(() => {
        const activateEmpCounterSouth = employees.filter(employee => employee.employeeLocations.locationId === 2).length
        setActiveEmpSouth(`${activateEmpCounterSouth} employees`)}, [employees])

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
                {activeNorth} animals
                {activeSouth}
            </section>
            <section>
                {activeEmpNorth} employees
                {activeEmpSouth}
            </section>
        </article>
    </>
    )
}
