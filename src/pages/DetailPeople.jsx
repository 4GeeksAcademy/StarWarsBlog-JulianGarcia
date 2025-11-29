import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPeople = () => {
    const { uid } = useParams();
    
    const [character, setCharacter] = useState(null)

    function detailPeople() {
        fetch("https://www.swapi.tech/api/people/"+ uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            
            .catch(err => console.error(err));      
    }
   

    useEffect(() => {
        detailPeople()
    }, [uid])



    return (
        
            <div className="container">
                <h1>Name: {character?.name}</h1>
                 <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="..." />
                 <p>Gender: {character?.gender}</p>
                 <p>Eye Color: {character?.eye_color}</p>
                 <p>Birth date: {character?.birth_year}</p>
                 <p>Hair Color: {character?.hair_color}</p>
            </div>
        
    );
};