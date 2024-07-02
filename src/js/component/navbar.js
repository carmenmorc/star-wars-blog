import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ addToFavorites, favoritesCount }) => {
    return (
        <nav className="navbar navbar-light bg-light mb-3 p-3">
            <Link to="/">
                <img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" style={{ width: "5rem" }} alt="Star Wars Logo" />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle me-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites [{favoritesCount}]
                    </button>
                    <ul className="dropdown-menu">
                        {favoritesCount > 0 ? (
                            favorites.map((favorite, index) => (
                                <li key={index}>
                                    <a className="dropdown-item" href="#">Favorite {favorite}</a>
                                </li>
                            ))
                        ) : (
                            <li><span className="dropdown-item">No favorites yet</span></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
