import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3" >
			<Link to="/">
				<img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"  style={{width:"5rem"}} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-outline-secondary dropdown-toggle me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites [num]
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Favorite [i]</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
