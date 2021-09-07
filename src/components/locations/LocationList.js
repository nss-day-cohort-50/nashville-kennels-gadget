import React, { useEffect, useState } from "react"
import LocationRepository from "../../repositories/LocationRepository";
import Location from "./Location"
import "./LocationList.css"


export default () => {
    const [ locations, updateLocations ] = useState([])

    useEffect(() => {
        LocationRepository.getAll()
        .then((locationData) => {
            updateLocations(locationData)
        })

    }, [])

    return (
        <div className="locations">
            {locations.map(l => <Location key={l.id} location={l} />)}
        </div>
    )
}
