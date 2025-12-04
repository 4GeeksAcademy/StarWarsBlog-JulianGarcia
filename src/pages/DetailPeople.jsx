import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPeople = () => {
    const { uid } = useParams();

    const [character, setCharacter] = useState(null)

    function detailPeople() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))

            .catch(err => console.error(err));
    }


    useEffect(() => {
        detailPeople()
    }, [uid])



    return (

        <div className="container my-5">

           
            <div className="row align-items-center mb-4">

                
                <div className="col-md-6">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`}
                        className="img-fluid rounded"
                        alt={character?.name}
                    />
                </div>

                
                <div className="col-md-6 text-center">
                    <h1 className="fw-bold">{character?.name}</h1>
                    <p className="text-muted px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

            </div>


            <hr style={{ borderTop: "2px solid red" }} />


            <div className="row text-center text-danger fw-bold mt-3">

                <div className="col">
                    <p>Name</p>
                    <p className="text-dark fw-normal">{character?.name}</p>
                </div>

                <div className="col">
                    <p>Gender</p>
                    <p className="text-dark fw-normal">{character?.gender}</p>
                </div>

                <div className="col">
                    <p>Eye Color</p>
                    <p className="text-dark fw-normal">{character?.eye_color}</p>
                </div>

                <div className="col">
                    <p>Birth Year</p>
                    <p className="text-dark fw-normal">{character?.birth_year}</p>
                </div>

                <div className="col">
                    <p>Hair Color</p>
                    <p className="text-dark fw-normal">{character?.hair_color}</p>
                </div>

            </div>
        </div>
    );
};