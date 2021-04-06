import React, { useState, useEffect, setState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Context } from "../store/appContext";

export const Personajes = props => {
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
				<p className="card-text">Gender: {props.gender}</p>
				<p className="card-text">Hair color: {props.hair_color}</p>
				<p className="card-text">Eyes color: {props.eyes_color}</p>
				<Link to={`/personajes/${props.id}`} className="btn btn-primary">
					Learn more!
				</Link>
				<Link onClick={() => actions.addFavorite(props.nombre, "persona")}>
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

Personajes.propTypes = {
	nombre: propTypes.string,
	eyes_color: propTypes.string,
	gender: propTypes.string,
	hair_color: propTypes.string,
	id: propTypes.number
};
