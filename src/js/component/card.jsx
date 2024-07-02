import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const Card = ({ name, uid }) => {
    const { actions } = useContext(Context);

    return (
        <div>
            <div className="card singlecard">
                <figure className="card-img-top">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={name} />
                </figure>
                <figcaption>{name}</figcaption>
                <div className="card-body">
                    <h1 className="card-title">{name}</h1>
                    <p className="card-text">Star Wars: The Force unites Jedi and Sith in an eternal struggle of light versus dark across planets and starships.</p>
                    <Link to={`/details/${uid}`} className="btn btn-light cardbtn">Learn More!</Link>
                    <button className="btn btn-light amarillo cardbtn">★ 
                    </button>
                </div>
            </div>
        </div>
    );
};