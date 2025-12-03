import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


const CardVehicle = ({vehicles}) => {
    const { store, dispatch } = useGlobalReducer()
console.log(vehicles);

    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                     <h5 className="card-title">Name: {vehicles.name}</h5>
                     <Link to={`/vehicle/${vehicles.uid}`} className="btn btn-primary">Details</Link>
                     
                </div>
            </div>
        </div>
    )



}

export default CardVehicle