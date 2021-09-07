import React, { useState, useContext, useEffect } from "react"
import "./AnimalForm.css"
import AnimalRepository from "../../repositories/AnimalRepository";
import LocationRepository from "../../repositories/LocationRepository";
import { Animal } from "./Animal";
import { useHistory } from "react-router-dom"


export default (props) => {
    const [animalName, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [animals, setAnimals] = useState([])
    // const [employees, setEmployees] = useState([])
    // const [employeeId, setEmployeeId] = useState(0)
    const [saveEnabled, setEnabled] = useState(false)
    const [ locations, setLocations ] = useState([])
    const [ locationId, setLocationId ] = useState(0)
    const history = useHistory()
    


    const constructNewAnimal = (evt) => {
        evt.preventDefault()
        
        const animal = {
            name: animalName,
            breed: breed,
            locationId: parseInt(locationId)
        }
        
        AnimalRepository.addAnimal(animal)
            .then(() => setEnabled(true))
            .then(() => history.push("/animals"))

    }
    
   

    useEffect(() => {
        LocationRepository.getAll()
        .then((locationData) => {
            setLocations(locationData)
        })

    }, [])

    return (
        <form className="animalForm">
            <h2>Admit Animal to a Kennel</h2>
            <fieldset>
            <div className="form-group">
                <label htmlFor="animalName">Animal name</label>
                <input
                    type="text"
                    required
                    autoFocus
                    className="form-control"
                    onChange={e => setName(e.target.value)}
                    id="animalName"
                    placeholder="Animal name"
                />
            </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <label htmlFor="breed">Breed</label>
                <input
                    type="text"
                    required
                    className="form-control"
                    onChange={e => setBreed(e.target.value)}
                    id="breed"
                    placeholder="Breed"
                />
            </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <label htmlFor="location">Location to Board</label>
                <select
                    defaultValue=""
                    name="location"
                    id="locationId"
                    className="form-control"
                    onChange={e => setLocationId(e.target.value)}
                >
                    <option value="">Select a Location</option>
                    
                    {
                        locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)
                    }

                </select>
            </div>
            </fieldset>

            <button type="submit"
                onClick={constructNewAnimal}
                disabled={saveEnabled}
                className="btn btn-primary"> Submit </button>
        </form>
    )
}
