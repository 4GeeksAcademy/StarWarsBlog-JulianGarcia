import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import CardPeople from "../components/CardPeople.jsx";
import CardPlanets from "../components/CardPlanets.jsx";
import CardVehicle from "../components/CardVehicle.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function character() {
		const response = await fetch("https://www.swapi.tech/api/people/")
		const data = await response.json()
		const personajesBasicos = data.results;
		console.log(data.results, "data.results");

		dispatch({
			type: "get_personajes",
			payload: { personajes: personajesBasicos }
		});


	}

	async function planet() {
		const response = await fetch("https://www.swapi.tech/api/planets/")
		const dataplanets = await response.json()
		const planetas = dataplanets.results;
		console.log(dataplanets.results, "data.results");

		dispatch({
			type: "get_planets",
			payload: { planets: planetas }
		});


	}

	async function vehicle() {
		const response = await fetch("https://www.swapi.tech/api/vehicles/")
		const datavehicles = await response.json()
		const vehicles = datavehicles.results;
		console.log(datavehicles.results, "data.results");

		dispatch({
			type: "get_vehicles",
			payload: { vehicles: vehicles }
		});


	}

	useEffect(() => {
		character(), planet(), vehicle()
	}, [])


	return (
		<div className="text-center mt-5">
			<h1>Starwars Content</h1>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.character && store.character.length > 0 && store.character.map((value, index) => {

					return (
						<CardPeople key={index} people={value} />
					)
				})}
			</div>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.planets.map((value, index) => {

					return (
						<CardPlanets key={index} planets={value} />
					)
				})}
			</div>
			<div className="d-flex flex-row flex-nowrap overflow-auto">
				{store.vehiclestore.map((value, index) => {

					return (
						<CardVehicle key={index} vehicles={value} />
					)
				})}
			</div>


		</div>
	);
}; 