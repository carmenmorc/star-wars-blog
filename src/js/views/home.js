import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";
import "../../styles/home.css";

const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPeople();
        actions.getVehicles();
        actions.getPlanets();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Star Wars Characters</h1>
            <div className="container d-flex overflow-auto carta">
                {store.people?.map(el => (
                    <Card key={el.uid} name={el.name} uid={el.uid} type="characters" />
                ))}
            </div>
            <h1>Star Wars Vehicles</h1>
            <div className="container d-flex overflow-auto carta">
                {store.vehicles?.map(el => (
                    <Card key={el.uid} name={el.name} uid={el.uid} type="vehicles" />
                ))}
            </div>
            <h1>Star Wars Planets</h1>
            <div className="container d-flex overflow-auto carta">
                {store.planets?.map(el => (
                    <Card key={el.uid} name={el.name} uid={el.uid} type="planets" />
                ))}
            </div>
        </div>
    );
};

export default Home;

