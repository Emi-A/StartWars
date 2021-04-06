import React, { useState, useEffect, setState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card mx-2" style={{ width: "18rem" }}>
			<img
				src="https://lafuerzanoticias.files.wordpress.com/2018/10/mustafar-tall.jpg?w=1536&h=768&crop=1"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.nombre}</h5>
				<p className="card-text">Terrain: {props.terrain}</p>
				<p className="card-text">Population: {props.population}</p>
				<Link to={`/planetas/${props.id}`} className="btn btn-primary">
					Learn more!
				</Link>
				<Link onClick={() => actions.addFavorite(props.nombre, "planeta")}>
					<button type="button" className="btn btn-outline-warning float-right ">
						<i className="fa fa-gratipay">
							<i className="far fa-heart " />
						</i>
					</button>
				</Link>
			</div>
		</div>
	);
};

Planetas.propTypes = {
	nombre: propTypes.string,
	population: propTypes.string,
	terrain: propTypes.string,
	id: propTypes.number
};
