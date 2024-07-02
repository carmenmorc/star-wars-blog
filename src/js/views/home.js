import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

const Home = ({ addToFavorites, favoritesCount }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <div className="container d-flex flex-wrap">
                {store.people?.map(el => (
                    <Card key={el.uid} name={el.name} uid={el.uid} addToFavorites={addToFavorites} />
                ))}
            </div>
        </div>
    );
};

export default Home;

