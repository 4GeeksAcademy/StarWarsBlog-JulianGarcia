import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


const CardVehicle = ({vehicles}) => {
     const { store, dispatch, addFavorite, removeFavorite } = useGlobalReducer()
           const isFav = store.favorites.some(f => f.uid === vehicles.uid);


    return (
        <div className="col">
            <div className="card m-4" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/vehicles/${vehicles.uid}.jpg`} className="card-img-top home" alt="..." />
                <div className="card-body">
                     <h5 className="card-title">{vehicles.name}</h5>
                     <Link to={`/vehicle/${vehicles.uid}`} className="btn btn-warning me-4 mt-3">Details</Link>
                     <button
                        className="btn btn-outline-warning rounded-circle ms-3 mt-3"
                        onClick={() =>
                            isFav
                                ? removeFavorite(vehicles.uid)
                                : addFavorite({
                                    name: vehicles.name,
                                    uid: vehicles.uid,
                                    type: "vehicle"
                                })
                        }
                    >
                        <i className={
                            isFav
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"
                        }
                        ></i>
                    </button>
                     
                </div>
            </div>
        </div>
    )



}

export default CardVehicle