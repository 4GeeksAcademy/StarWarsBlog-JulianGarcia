import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPlanets = () => {
    const { uid } = useParams();
    
    const [planet, setPlanet] = useState(null)

    function detailPlanets() {
        fetch("https://www.swapi.tech/api/planets/"+ uid)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            
            .catch(err => console.error(err));      
    }
   

    useEffect(() => {
        detailPlanets()
    }, [uid])



    return (
        
            <div className="container">
                <h1>Name: {planet?.name}</h1>
                 <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`} className="card-img-top" alt="..." />
                 <p>Diameter: {planet?.diameter}</p>
                 <p>Terrain: {planet?.terrain}</p>
                 <p>Rotation Period: {planet?.rotation_period}</p>
                 <p>Gravity: {planet?.gravity}</p>
            </div>
        
    );
};