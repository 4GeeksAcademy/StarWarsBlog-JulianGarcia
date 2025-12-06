import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPlanets = () => {
    const { uid } = useParams();

    const [planet, setPlanet] = useState(null)

    function detailPlanets() {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))

            .catch(err => console.error(err));
    }


    useEffect(() => {
        detailPlanets()
    }, [uid])



    return (

        <div className="container my-5">

        
        <div className="row align-items-center mb-4">

            
            <div className="col-md-6">
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`}
                    className="img-fluid rounded"
                    alt={planet?.name}
                />
            </div>

            
            <div className="col-md-6 text-center">
                <h1 className="fw-bold">{planet?.name}</h1>
                <p className="text-light px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus euismod, urna at aliquam lobortis, velit arcu luctus massa,
                    in sagittis sapien elit ut mauris.
                </p>
            </div>

        </div>

    
        <hr style={{ borderTop: "2px solid red" }} />

       
        <div className="row text-center text-danger fw-bold mt-3">

            <div className="col">
                <p>Name</p>
                <p className="text-light fw-normal">{planet?.name}</p>
            </div>

            <div className="col">
                <p>Diameter</p>
                <p className="text-light fw-normal">{planet?.diameter}</p>
            </div>

            <div className="col">
                <p>Terrain</p>
                <p className="text-light fw-normal">{planet?.terrain}</p>
            </div>

            <div className="col">
                <p>Rotation Period</p>
                <p className="text-light fw-normal">{planet?.rotation_period}</p>
            </div>

            <div className="col">
                <p>Gravity</p>
                <p className="text-light fw-normal">{planet?.gravity}</p>
            </div>

        </div>
    </div>

    );
};