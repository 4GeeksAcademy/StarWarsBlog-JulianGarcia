import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const CardPeople = ({people}) => {

    return (
        <div className="">
            <div className="card" style={{ width: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                     <h5 className="card-title">Name: {people.name}</h5> 
                    <p className="card-text">k of the card’s content.</p>
                    <Link  className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    )



}

export default CardPeople