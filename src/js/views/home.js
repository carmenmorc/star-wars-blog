import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
	console.log("Se está renderizando la home");
	return (
		<div>
			<h1>XXXX</h1>
			<div className="card" style={{ width: '18rem' }}>
				<img src="https://starwars-visualguide.com/#/characters/1" className="card-img-top" alt="" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<Link to="#" className="btn btn-primary">Go somewhere</Link>
				</div>
			</div>
		</div>
	);
};

export default Home; 