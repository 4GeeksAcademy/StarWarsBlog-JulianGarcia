import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch, removeFavorite } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://static.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" style={{ width: "150px", borderRadius: "10px" }} ></img>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button
							className="btn btn-warning dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
						>
							Favorites {store.favorites.length}
						</button>

						<ul className="dropdown-menu dropdown-menu-end">


							{store.favorites.length === 0 && (
								<li className="dropdown-item text-muted">
									Vacio
								</li>
							)}


							{store.favorites.map((fav, index) => (
								<li
									key={index}
									className="dropdown-item d-flex justify-content-between align-items-center"
								>
									<Link
										to={`/${fav.type}/${fav.uid}`}
										className="text-dark text-decoration-none flex-grow-1"
									>
										{fav.name}
									</Link>

									<button
										className="btn btn-sm btn-danger ms-3"
										onClick={(e) => {
											e.preventDefault();
											e.stopPropagation();
											removeFavorite(fav.uid);
										}}
									>
										<i className="fa-solid fa-trash"></i>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav >
	);
};
