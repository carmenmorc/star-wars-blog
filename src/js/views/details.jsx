import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const Details = () => {
    const { uid } = useParams()
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeopleDetails(uid);
    }, []);

    return (
        <div>
            <h1>Details Page</h1>
            <div className="container d-flex">
                <div>
                    <figure>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={store.peopleDetails?.properties.name} />
                        <figcaption>{store.peopleDetails?.properties.name}</figcaption>
                    </figure>
                </div>
                <div>
                    <p>Name: {store.peopleDetails?.properties.name} </p>
                    <p>Gender: {store.peopleDetails?.properties.gender}</p>
                    <p>Eye Color: {store.peopleDetails?.properties.eye_color}</p>
                    <p>Height: {store.peopleDetails?.properties.height}</p>
                </div>
            </div>
        </div>
    );
};

