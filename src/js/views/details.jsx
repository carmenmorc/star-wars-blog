import React, { useContext, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/details.css";

export const Details = () => {
    const { uid } = useParams();
    const { store, actions } = useContext(Context);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/characters')) {
            actions.getPeopleDetails(uid);
        } else if (location.pathname.includes('/vehicles')) {
            actions.getVehiclesDetails(uid);
        } else if (location.pathname.includes('/planets')) {
            actions.getPlanetsDetails(uid);
        }
    }, [uid, location.pathname]);

    return (
        <div className="container">
            <h1>Details</h1>
            {location.pathname.includes('/characters') && store.peopleDetails && (
                <div className="container d-flex photodesc">
                    <div>
                        <figure>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt={store.peopleDetails.properties.name} />
                            <figcaption>{store.peopleDetails.properties.name}</figcaption>
                        </figure>
                    </div>
                    <p>In the epic saga of Star Wars, the Force binds the galaxy together, weaving through the destinies of Jedi and Sith alike. Across the vast expanse of space, planets teem with life, from the desert sands of Tatooine to the lush forests of Endor. Lightsabers ignite in thrilling duels between heroes and villains, while starships soar through the cosmos, carrying rebels and empires into battle. Amidst the interstellar conflict, droids beep and hum with loyalty, and the wise guidance of Yoda echoes through generations. In the eternal struggle between light and dark, the Skywalker legacy spans across generations, shaping the very fabric of a galaxy far, far away.</p>
                </div>
            )}
            {location.pathname.includes('/characters') && store.peopleDetails && (
                <div className="container d-flex attributes">
                    <div>
                        <h1>Name</h1>
                        <p>{store.peopleDetails.properties.name}</p>
                    </div>
                    <div>
                        <h1>Birth Year</h1>
                        <p>{store.peopleDetails.properties.birth_year}</p>
                    </div>
                    <div>
                        <h1>Gender</h1>
                        <p>{store.peopleDetails.properties.gender}</p>
                    </div>
                    <div>
                        <h1>Height</h1>
                        <p>{store.peopleDetails.properties.height}</p>
                    </div>
                    <div>
                        <h1>Skin Color</h1>
                        <p>{store.peopleDetails.properties.skin_color}</p>
                    </div>
                    <div>
                        <h1>Eye Color</h1>
                        <p>{store.peopleDetails.properties.eye_color}</p>
                    </div>
                </div>
            )}
            {location.pathname.includes('/vehicles') && store.vehiclesDetails && (
                <div className="container d-flex attributes">
                    <div>
                        <h1>Vehicle Name</h1>
                        <p>{store.vehiclesDetails.properties.name}</p>
                    </div>
                    <div>
                        <h1>Vehicle Model</h1>
                        <p>{store.vehiclesDetails.properties.model}</p>
                    </div>
                    {/* Agregar más propiedades del vehículo según necesites */}
                </div>
            )}
            {location.pathname.includes('/planets') && store.planetsDetails && (
                <div className="container d-flex attributes">
                    <div>
                        <h1>Planet Name</h1>
                        <p>{store.planetsDetails.properties.name}</p>
                    </div>
                    <div>
                        <h1>Planet Climate</h1>
                        <p>{store.planetsDetails.properties.climate}</p>
                    </div>
                    {/* Agregar más propiedades del planeta según necesites */}
                </div>
            )}
        </div>
    );
};