import React, { useState, useEffect, setState, useContext } from "react";
import { Link } from "react-router-dom";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Image } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<Image
					src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
					height="30"
					alt="Star Wars"
				/>
			</Link>
			<div className="ml-auto,">
				<Dropdown>
					<Dropdown.Toggle className="btn btn-primary dropdown-toggle">
						Favoritos {store.favorites.length}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item header className="text-primary">
							PERSONAJES
						</Dropdown.Item>
						{store.favorites.map((favorite, i) => {
							if (favorite.type == "persona") {
								return (
									<div key={i} onClick={() => actions.deleteFavorite(i)}>
										<Dropdown.Item>
											{favorite.name}
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</Dropdown.Item>
									</div>
								);
							}
						})}
						<Dropdown.Divider />
						<Dropdown.Item header className="text-primary">
							PLANETAS
						</Dropdown.Item>
						{store.favorites.map((favorite, i) => {
							if (favorite.type == "planeta") {
								return (
									<div key={i} onClick={() => actions.deleteFavorite(i)}>
										<Dropdown.Item text>
											{favorite.name}
											&nbsp;&nbsp;&nbsp;
											<i className="far fa-trash-alt" />
										</Dropdown.Item>
									</div>
								);
							}
						})}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
