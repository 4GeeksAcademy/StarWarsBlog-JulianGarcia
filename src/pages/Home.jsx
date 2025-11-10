import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import CardPeople from "../components/CardPeople.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	function character() {
		fetch("https://www.swapi.tech/api/people/")
			.then(res => res.json())
			.then(data => console.log(data.results))
			.catch(err => console.error(err))
	}



	useEffect(()=>{
		character()
	},[])

	return (
		<div className="text-center mt-5">
			<h1>Hello Starwars!</h1>
			

			<CardPeople/>

		</div>
	);
}; 