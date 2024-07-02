import React, { useContext } from "react";
import "../../styles/home.css"; // Asegúrate de importar tus estilos CSS aquí
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <div className="container d-flex overflow-auto">
                {/* Usamos d-flex para flexbox y overflow-auto para permitir el desplazamiento horizontal */}
                {store.people?.map(el => <Card key={el.uid} name={el.name} uid={el.uid} />)}
            </div>
        </div>
    );
};

export default Home;