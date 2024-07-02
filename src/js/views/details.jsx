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
            <h1>Details</h1>
            <div className="container d-flex">
                <div>
                    <figure>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={store.peopleDetails?.properties.name} />
                        <figcaption>{store.peopleDetails?.properties.name}</figcaption>
                    </figure>
                </div>
                <p>In the epic saga of Star Wars, the Force binds the galaxy together, weaving through the destinies of Jedi and Sith alike. Across the vast expanse of space, planets teem with life, from the desert sands of Tatooine to the lush forests of Endor. Lightsabers ignite in thrilling duels between heroes and villains, while starships soar through the cosmos, carrying rebels and empires into battle. Amidst the interstellar conflict, droids beep and hum with loyalty, and the wise guidance of Yoda echoes through generations. In the eternal struggle between light and dark, the Skywalker legacy spans across generations, shaping the very fabric of a galaxy far, far away.</p>
                </div>
                <div className="container d-flex">
                    <p>Name: {store.peopleDetails?.properties.name} </p>
                    <p>Birth: {store.peopleDetails?.properties.birth_year}</p>
                    <p>Gender: {store.peopleDetails?.properties.gender}</p>
                    <p>Height: {store.peopleDetails?.properties.height}</p>
                    <p>Skin Color: {store.peopleDetails?.properties.skin_color}</p>
                    <p>Eye Color: {store.peopleDetails?.properties.eye_color}</p>
                </div>
            
        </div>
    );
};

