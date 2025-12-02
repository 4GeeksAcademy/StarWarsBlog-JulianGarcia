import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


const CardPlanets = ({planets}) => {
    const { store, dispatch } = useGlobalReducer()
console.log(planets);

    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planets.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                     <h5 className="card-title">Name: {planets.name}</h5>

                     <Link to={`/planeta/${planets.uid}`} className="btn btn-primary">Details</Link>
                     
                </div>
            </div>
        </div>
    )



}

export default CardPlanets