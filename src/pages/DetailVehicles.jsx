import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailVehicles = () => {
    const { uid } = useParams();
    
    const [vehicle, setVehicle] = useState(null)

    function detailVehicle() {
        fetch("https://www.swapi.tech/api/vehicles/"+ uid)
            .then(res => res.json())
            .then(data => setVehicle(data.result.properties))
            
            .catch(err => console.error(err));      
    }
   

    useEffect(() => {
        detailVehicle()
    }, [uid])



    return (
        
            <div className="container">
                <h1>Name: {vehicle?.name}</h1>
                 <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`} className="card-img-top" alt="..." />
                 <p>Cargo Capacity: {vehicle?.cargo_capacity}</p>
                 <p>Consumables: {vehicle?.consumables}</p>
                 <p>Cost in Credits: {vehicle?.cost_in_credits}</p>
                 <p>Crew: {vehicle?.crew}</p>
                 <p>Model: {vehicle?.model}</p>
            </div>
        
    );
};