import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


const CardPeople = ({ people }) => {
     const { store, dispatch, addFavorite, removeFavorite } = useGlobalReducer()
       const isFav = store.favorites.some(f => f.uid === people.uid);
    



    return (
        <div className="col">
            <div className="card m-4" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top  " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{people.name}</h5>


                    <Link to={`/personaje/${people.uid}`} className="btn btn-warning me-4 mt-3">Details</Link>
                    <button
                        className="btn btn-outline-warning rounded-circle ms-3 mt-3"
                        onClick={() =>
                            isFav
                                ? removeFavorite(people.uid)
                                : addFavorite({
                                    name: people.name,
                                    uid: people.uid,
                                    type: "personaje"
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

export default CardPeople