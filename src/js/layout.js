import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/home.js";
import { Details } from "./views/details.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";
	console.log("Layout component is being rendered");

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:theid" element={<Details />} />
						<Route path="*" element={<h1>May the 404 be with you.</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);