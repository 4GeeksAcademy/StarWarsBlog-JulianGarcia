import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


const CardPeople = ({people}) => {
    const { store, dispatch } = useGlobalReducer()
console.log(people);

    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                     <h5 className="card-title">Name: {people.name}</h5>
                     
                    
                    <Link to={`/personaje/${people.uid}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    )



}

export default CardPeople