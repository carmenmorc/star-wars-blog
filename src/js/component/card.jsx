import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, uid }) => {

    const handleFavoriteClick = () => {
        addToFavorites(name);
    };


    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
            <figure className="card-img-top"> < img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} /> </figure>
            <figcaption>{name}</figcaption>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/details/${uid}`} className="btn btn-primary">Learn More!</Link>
                    <button className="btn btn-secondary" onClick={handleFavoriteClick} >fav</button>
                </div>
            </div>
        </div>
    );
}