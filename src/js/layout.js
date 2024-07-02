import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/home.js";
import { Details } from "./views/details.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

const Layout = () => {
    return (
        <div>
            <BrowserRouter basename={process.env.BASENAME || ""}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/characters/:uid" element={<Details />} />
                        <Route path="/details/vehicles/:uid" element={<Details />} />
                        <Route path="/details/planets/:uid" element={<Details />} />
                        <Route path="*" element={<h1>May the 404 be with you.</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);