import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailVehicles = () => {
    const { uid } = useParams();

    const [vehicle, setVehicle] = useState(null)

    function detailVehicle() {
        fetch("https://www.swapi.tech/api/vehicles/" + uid)
            .then(res => res.json())
            .then(data => setVehicle(data.result.properties))

            .catch(err => console.error(err));
    }


    useEffect(() => {
        detailVehicle()
    }, [uid])



    return (

        <div className="container my-5">


            <div className="row align-items-center mb-4">


                <div className="col-md-6">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${uid}.jpg`}
                        className="img-fluid rounded"
                        alt={vehicle?.name}
                    />
                </div>

                <div className="col-md-6 text-center">
                    <h1 className="fw-bold">{vehicle?.name}</h1>
                    <p className="text-light px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla facilisi. Suspendisse at ultrices leo. Sed sit amet
                        pharetra libero, et maximus nibh.
                    </p>
                </div>

            </div>


            <hr style={{ borderTop: "2px solid red" }} />

            {/* INFO GRID */}
            <div className="row text-center text-danger fw-bold mt-3">

                <div className="col">
                    <p>Name</p>
                    <p className="text-light fw-normal">{vehicle?.name}</p>
                </div>

                <div className="col">
                    <p>Model</p>
                    <p className="text-light fw-normal">{vehicle?.model}</p>
                </div>

                <div className="col">
                    <p>Cargo Capacity</p>
                    <p className="text-light fw-normal">{vehicle?.cargo_capacity}</p>
                </div>

                <div className="col">
                    <p>Crew</p>
                    <p className="text-light fw-normal">{vehicle?.crew}</p>
                </div>

                <div className="col">
                    <p>Cost (Credits)</p>
                    <p className="text-light fw-normal">{vehicle?.cost_in_credits}</p>
                </div>

                <div className="col">
                    <p>Consumables</p>
                    <p className="text-light fw-normal">{vehicle?.consumables}</p>
                </div>

            </div>
        </div>

    );
};