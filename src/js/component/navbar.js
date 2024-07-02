import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = ({ favorites, favoritesCount }) => {
    return (
        <nav className="navbar mb-3 p-3">
            <Link to="/">
                <img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" style={{ width: "5rem" }} alt="Star Wars Logo" />
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle me-1 fav" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites [{favoritesCount}]
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end mt-2">
                        <li>
                            <a className="dropdown-item" href="#">Favorite</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};