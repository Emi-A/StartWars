import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import "../styles/styleLayout.css";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { MoreInfoPlanetas } from "./views/moreInfoPlanetas";
import { MoreInfoPersonajes } from "./views/moreInfoPersonajes";

import { Navbar } from "./component/navbar";
import { footer, Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planetas/:theid">
							<MoreInfoPlanetas />
						</Route>
						<Route exact path="/personajes/:theid">
							<MoreInfoPersonajes />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
