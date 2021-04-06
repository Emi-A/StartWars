import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetasViews = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	let info = store.planets[params.theid];
	return (
		<div className="container text-center mt-4">
			<div className="card mb-3" style={{ width: "940px", height: "auto" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="...." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{info.name}</h5>
							<p className="card-text p-4">
								Los viajes espaciales son comunes y la mayoría de los planetas que aparecen en la saga
								están afiliados a la República Galáctica, la unión democrática que rige la galaxia y
								cuyo gobierno, presidido por un canciller supremo, está formado por representantes de
								toda ella, elegidos o designados y agrupados en el llamado Senado Galáctico, ubicado en
								el planeta Coruscant.43​44​ En oposición a la República se encuentra la Confederación de
								Sistemas Independientes (Separatistas), siendo el enfrentamiento de ambas uno de los
								temas más importantes en la trama de las tres primeras películas de Star Wars.
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className="row align-items-center" style={{ color: "red" }}>
				<div className="col"> Name: {info.name}</div>
				<div className="col"> Climate: {info.climate}</div>
				<div className="col"> Population: {info.population}</div>
				<div className="col"> Diameter: {info.diameter}</div>
			</div>
		</div>
	);
};
